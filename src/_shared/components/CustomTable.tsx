/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Table,
  Popover,
  Whisper,
  Checkbox,
  Dropdown,
  IconButton,
  Progress,
  Pagination,
} from "rsuite";
import { SortType } from "rsuite/esm/Table";
import { faker } from "@faker-js/faker";
import MoreIcon from "@rsuite/icons/legacy/More";

import { createRandomLesson } from "../services/faker/lessonTable";

const { Column, HeaderCell, Cell } = Table;

const defaultData = faker.helpers.multiple(createRandomLesson, {
  count: 100,
});

type Data = (typeof defaultData)[0];

const NameCell = ({
  rowData,
  dataKey,
  ...props
}: {
  rowData?: Data;
  dataKey: keyof Data;
}) => {
  const speaker = (
    <Popover title="Description">
      <p>
        <b>Name:</b> {rowData!.name}
      </p>
      {/* <p>
        <b>Gender:</b> {rowData.gender}
      </p>
      <p>
        <b>City:</b> {rowData.city}
      </p>
      <p>
        <b>Street:</b> {rowData.street}
      </p> */}
    </Popover>
  );

  return (
    <Cell {...props}>
      <Whisper placement="top" speaker={speaker}>
        <a>{rowData![dataKey]}</a>
      </Whisper>
    </Cell>
  );
};

const ImageCell = ({
  rowData,
  dataKey,
  ...props
}: {
  rowData?: Data;
  dataKey: keyof Data;
}) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div
      style={{
        width: 40,
        height: 40,
        background: "#f5f5f5",
        borderRadius: 6,
        marginTop: 2,
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <img src={rowData![dataKey] as string} width="40" />
    </div>
  </Cell>
);

const CheckCell = ({
  rowData,
  onChange,
  checkedKeys,
  dataKey,
  ...props
}: {
  rowData?: Data;
  dataKey: keyof Data;
  onChange: any;
  checkedKeys: any;
}) => {
  return (
    <Cell {...props} style={{ padding: 0 }}>
      <div style={{ lineHeight: "46px" }}>
        <Checkbox
          value={rowData![dataKey]}
          inline
          onChange={onChange}
          checked={checkedKeys.some((item: any) => item === rowData![dataKey])}
        />
      </div>
    </Cell>
  );
};

const renderMenu = (props: any, ref: any) => {
  const { onClose, left, top, className } = props;

  const handleSelect = (eventKey?: string) => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item eventKey={1}>Follow</Dropdown.Item>
        <Dropdown.Item eventKey={2}>Sponsor</Dropdown.Item>
        <Dropdown.Item eventKey={3}>Add to friends</Dropdown.Item>
        <Dropdown.Item eventKey={4}>View Profile</Dropdown.Item>
        <Dropdown.Item eventKey={5}>Block</Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ActionCell = ({ dataKey, ...props }: { dataKey: keyof Data }) => {
  return (
    <Cell {...props} className="link-group">
      <Whisper
        placement="autoVerticalStart"
        trigger="click"
        speaker={renderMenu}
      >
        <IconButton appearance="subtle" icon={<MoreIcon />} />
      </Whisper>
    </Cell>
  );
};

export default function CustomTable() {
  const [sortColumn, setSortColumn] = React.useState<string>();
  const [sortType, setSortType] = React.useState<SortType>();
  const [loading, setLoading] = React.useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [checkedKeys, setCheckedKeys] = React.useState<string[]>([]);
  let checked = false;
  let indeterminate = false;

  const data = defaultData.filter((_, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  if (checkedKeys.length === data.length) {
    checked = true;
  } else if (checkedKeys.length === 0) {
    checked = false;
  } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
    indeterminate = true;
  }

  const handleCheckAll = (_: any, checked: boolean) => {
    const keys = checked ? data.map((item) => item.id) : [];
    setCheckedKeys(keys);
  };
  const handleCheck = (value: any, checked: boolean) => {
    const keys = checked
      ? [...checkedKeys, value]
      : checkedKeys.filter((item) => item !== value);
    setCheckedKeys(keys);
  };

  const handleChangeLimit = (dataKey: number) => {
    setPage(1);
    setLimit(dataKey);
  };

  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn as keyof (typeof data)[0]];
        let y = b[sortColumn as keyof (typeof data)[0]];
        if (typeof x === "string") {
          x = x.charCodeAt(0);
        }
        if (typeof y === "string") {
          y = y.charCodeAt(0);
        }
        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  };

  const handleSortColumn = (sortColumn: string, sortType?: SortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  return (
    <div style={{ height: "100%" }}>
      <Table
        autoHeight
        data={getData()}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
      >
        <Column width={50} align="center">
          <HeaderCell style={{ padding: 0 }}>
            <div style={{ lineHeight: "40px" }}>
              <Checkbox
                inline
                checked={checked}
                indeterminate={indeterminate}
                onChange={handleCheckAll}
              />
            </div>
          </HeaderCell>

          <CheckCell
            dataKey="id"
            checkedKeys={checkedKeys}
            onChange={handleCheck}
          />
        </Column>
        <Column width={80} align="center">
          <HeaderCell>Avartar</HeaderCell>
          <ImageCell dataKey="avatar" />
        </Column>
        <Column width={160} flexGrow={1}>
          <HeaderCell>Name</HeaderCell>
          <NameCell dataKey="name" />
        </Column>
        <Column width={230} flexGrow={1}>
          <HeaderCell>Skill Proficiency</HeaderCell>
          <Cell style={{ padding: "10px 0" }}>
            {(rowData) => (
              <Progress percent={rowData.progress} showInfo={false} />
            )}
          </Cell>
        </Column>
        <Column width={100} flexGrow={1}>
          <HeaderCell>Rating</HeaderCell>
          <Cell>
            {(rowData) =>
              Array.from({ length: rowData.rating }).map((_, i) => (
                <span key={i}>⭐️</span>
              ))
            }
          </Cell>
        </Column>
        <Column width={120}>
          <HeaderCell>
            <MoreIcon />
          </HeaderCell>
          <ActionCell dataKey="id" />
        </Column>
      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={["total", "-", "limit", "|", "pager", "skip"]}
          total={defaultData.length}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from "react";
import { styled } from "styled-components";
import {
  Divider,
  FlexboxGrid,
  Form,
  IconButton,
  Input,
  Panel,
  Tag,
  TagInput,
  // useToaster,
} from "rsuite";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import CloseIcon from "@rsuite/icons/Close";

// import CustomMessage from "../Message";
import SubjectExtraContent from "./SubjectExtraContent";
import { KeyValue } from "./@types";
import { StyledDrawer } from "../StyledDrawer";

const SubjectInfo = React.forwardRef((props: any, ref) => {
  const [openModal, setOpenModal] = useState(false);
  const [openExpandModal, setOpenExpandModal] = useState(false);
  const [extraContents, setExtraContents] = useState<KeyValue[]>([]);
  const [contentName, setContentName] = useState("");
  const [textValue, setTextValue] = useState("");
  const { ...others } = props;

  // const toaster = useToaster();
  // const message = <CustomMessage text="Successfully Added" type="error" />;

  // const save = async () => {
  //   await toaster.push(message, { duration: 5000, placement: "topEnd" });
  // };

  const deleteMe = () => {
    console.log(contentName);
    setExtraContents([]);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    setTextValue("");
    deleteMe();
  };

  // const handleCloseModal = () => {
  //   setOpenModal(false);
  // };

  const handleOpenExpandModal = () => {
    setOpenExpandModal(true);
  };

  const handleCloseExpandModal = () => {
    setOpenExpandModal(false);
  };

  // const addContent = () => {
  //   setExtraContents((p) => [...p, { key: contentName, value: textValue }]);
  //   handleCloseModal();
  // };

  return (
    <SubjectInfoWrapper
      {...others}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <CardContent>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={24}>
            <Panel header={<h2>Subject Info</h2>}>
              <Form fluid>
                <Form.Group>
                  <Form.ControlLabel>Subject Name</Form.ControlLabel>
                  <Form.Control
                    name="name"
                    type="text"
                    // onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Subject Code</Form.ControlLabel>
                  <Input
                    type="number"
                    // onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Skill To Gain</Form.ControlLabel>
                  <TagInput
                    block
                    trigger={["Enter", "Comma"]}
                    placeholder="Enter,  Comma"
                    // style={{ width: 300 }}
                    menuStyle={{ width: 300 }}
                    onCreate={(value, item) => {
                      console.log(value, item);
                    }}
                  />
                </Form.Group>
                <Divider />
                {extraContents.map((info, i) => (
                  <Form.Group key={i}>
                    <FlexboxGrid justify="space-between">
                      <FlexboxGrid.Item colspan={6}>
                        <Form.Group>
                          <MyTag>
                            <Tag size="lg" style={{ width: "100%" }}>
                              {info.key}
                            </Tag>
                          </MyTag>
                        </Form.Group>
                      </FlexboxGrid.Item>
                      <FlexboxGrid.Item colspan={16}>
                        <Form.Group>
                          <MyTag>
                            <Tag size="lg" style={{ width: "100%" }}>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: info.value,
                                }}
                              />
                            </Tag>
                          </MyTag>
                        </Form.Group>
                      </FlexboxGrid.Item>
                      <FlexboxGrid.Item colspan={1}>
                        <CloseIcon />
                      </FlexboxGrid.Item>
                    </FlexboxGrid>
                  </Form.Group>
                ))}
                <Form.Group></Form.Group>
                <IconButton
                  icon={<AddOutlineIcon />}
                  appearance="primary"
                  onClick={handleOpenModal}
                >
                  Add Any Extra Content
                </IconButton>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <StyledDrawer
          open={openModal}
          setOpen={setOpenModal}
          // handleClose={handleCloseModal}
          // onSave={addContent}
          backdrop="static"
          title="Select What To Add"
          children={
            <SubjectExtraContent
              handleOpenExpandModal={handleOpenExpandModal}
              openExpandModal={openExpandModal}
              closeExpandModal={handleCloseExpandModal}
              setContentName={setContentName}
              setTextValue={setTextValue}
              textValue={textValue}
            />
          }
        />
      </CardContent>
    </SubjectInfoWrapper>
  );
});

export default SubjectInfo;

const SubjectInfoWrapper = styled.div`
  /* position: absolute; */
  top: 140px;
  width: 100%;
  height: 100%;
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 16px 16px 16px;
  margin-bottom: 32px;
`;

const MyTag = styled.div`
  .rs-tag,
  .rs-modal-content {
    background: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
  }
`;

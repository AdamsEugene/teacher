/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { styled } from "styled-components";
import {
  Button,
  ButtonToolbar,
  FlexboxGrid,
  Form,
  Input,
  Panel,
  Tag,
  TagGroup,
} from "rsuite";

import Card from "../card/Card";
import { DataProps } from "../../../modules/learn/@types";
import { useNavigate } from "react-router-dom";

const SubjectSummary = React.forwardRef((props: any, ref) => {
  const { setStepData, setCurrent, ...others } = props;
  const _setStepData = setStepData as React.Dispatch<
    React.SetStateAction<DataProps[]>
  >;
  const _setCurrent = setCurrent as React.Dispatch<
    React.SetStateAction<number>
  >;

  const navigate = useNavigate();

  const save = async () => {
    _setStepData((p) =>
      p.map((data, i) => {
        if (i === 2) {
          data.status = "finish";
        }
        setTimeout(() => {
          navigate("/plan/subject");
        }, 100);
        return data;
      })
    );
  };

  const back = () => _setCurrent(1);

  return (
    <SubjectSummaryWrapper
      {...others}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <Card
        children={
          <CardContent>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={24}>
                <Panel header={<h2>Subject Summary</h2>}>
                  <Form fluid>
                    <Form.Group>
                      <Form.ControlLabel>Subject Name</Form.ControlLabel>
                      <Form.Control
                        name="name"
                        type="text"
                        disabled
                        // onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Subject Code</Form.ControlLabel>
                      <Input
                        name="code"
                        type="number"
                        disabled
                        // onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Skill To Gain</Form.ControlLabel>
                      <TagGroup>
                        <Tag size="lg">Large</Tag>
                        <Tag size="lg">Large</Tag>
                        <Tag size="lg">Large</Tag>
                        <Tag size="lg">Large</Tag>
                        <Tag size="lg">Large</Tag>
                      </TagGroup>
                    </Form.Group>
                    <Form.Group></Form.Group>
                    <FlexboxGrid justify="end">
                      <ButtonToolbar>
                        <Button appearance="default">Default</Button>
                        <Button appearance="primary">Primary</Button>
                        <Button appearance="link">Link</Button>
                        <Button appearance="subtle" onClick={back}>
                          Back
                        </Button>
                        <Button appearance="ghost" onClick={save}>
                          Save
                        </Button>
                      </ButtonToolbar>
                    </FlexboxGrid>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </CardContent>
        }
      />
    </SubjectSummaryWrapper>
  );
});

export default SubjectSummary;

const SubjectSummaryWrapper = styled.div`
  position: absolute;
  top: 140px;
  width: 100%;
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 16px 16px 16px;
  margin-bottom: 32px;
`;

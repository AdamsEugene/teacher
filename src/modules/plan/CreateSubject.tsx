/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Button, ButtonToolbar, FlexboxGrid } from "rsuite";

import Typography from "../../_shared/components/Typography";
import FloatingButton from "../../_shared/components/FloatingButton";
import Animate from "../../_shared/components/Animate";
import TextEditor from "../../_shared/components/TextEditor";

const CreateSubjectContainer = React.forwardRef((props: any, ref) => {
  const save = () => {
    console.log();
  };

  return (
    <CreateSubjectWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={19}>
          <Typography $variant="title">Subject Details</Typography>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <TextEditor big />
      <FlexboxGrid justify="end">
        <ButtonToolbar>
          <Button appearance="default">Default</Button>
          <Button appearance="primary">Primary</Button>
          <Button appearance="link">Link</Button>
          <Button appearance="subtle">Subtle</Button>
          <Button appearance="ghost" onClick={save}>
            Save
          </Button>
        </ButtonToolbar>
      </FlexboxGrid>
    </CreateSubjectWrapper>
  );
});

export default function CreateSubject() {
  const navigate = useNavigate();

  return (
    <>
      <Animate children={CreateSubjectContainer} />
      <FloatingButton title="Done" onClick={() => navigate("")} />
    </>
  );
}

const CreateSubjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  width: 60%;
  /* margin-top: 64px; */
  gap: 24px;
`;

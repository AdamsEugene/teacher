/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { styled } from "styled-components";
import Animate from "../../_shared/components/Animate";
import { FlexboxGrid } from "rsuite";
import Typography from "../../_shared/components/Typography";
import CustomSteps from "../../_shared/components/CustomSteps";
import { DataProps } from "../learn/@types";
import PersonalInfo from "../../_shared/components/form/PersonalInfo";
import SubjectInfo from "../../_shared/components/form/SubjectInfo";
import SubjectSummary from "../../_shared/components/form/SubjectSummary";

const data: DataProps[] = [
  { title: "Personal Info", status: "wait" },
  { title: "Subject Info", status: "wait" },
  { title: "Summary", status: "wait" },
];

const SubjectContainer = React.forwardRef((props: any, ref) => {
  const { current, stepData, setStepData, setCurrent, ...others } = props;
  const _current = current as number;

  return (
    <SubjectWrapper
      {...others}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={14}>
          <Typography $variant="title">Complete The Form Below</Typography>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={10}></FlexboxGrid.Item>
      </FlexboxGrid>
      <CustomSteps current={_current} data={stepData} />
      <Animate
        children={PersonalInfo}
        inn={_current === 0}
        others={{ setStepData, setCurrent }}
      />
      <Animate
        children={SubjectInfo}
        inn={_current === 1}
        others={{ setStepData, setCurrent }}
      />
      <Animate
        children={SubjectSummary}
        inn={_current === 2}
        others={{ setStepData, setCurrent }}
      />
    </SubjectWrapper>
  );
});

export default function Subject() {
  const [current, setCurrent] = useState(0);
  const [stepData, setStepData] = useState(data);

  return (
    <Animate
      children={SubjectContainer}
      others={{ current, stepData, setStepData, setCurrent }}
    />
  );
}

const SubjectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 60%;
  min-height: 82vh;
  z-index: 2;
`;

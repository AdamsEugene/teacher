/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Animate from "../../_shared/components/Animate";
import { FlexboxGrid } from "rsuite";
import Typography from "../../_shared/components/Typography";
import CustomSteps from "../../_shared/components/CustomSteps";
import { DataProps } from "../learn/@types";
import PersonalInfo from "../../_shared/components/form/PersonalInfo";
import { FormWrapper } from "../../_shared/components/form/@styles";

const data: DataProps[] = [
  { title: "Personal Info", status: "wait" },
  { title: "LessonCreator Info", status: "wait" },
  { title: "Summary", status: "wait" },
];

const LessonCreatorContainer = React.forwardRef((props: any, ref) => {
  const { current, stepData, setStepData, setCurrent, ...others } = props;
  const _current = current as number;

  return (
    <FormWrapper
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
    </FormWrapper>
  );
});

export default function LessonCreator() {
  const [current, setCurrent] = useState(0);
  const [stepData, setStepData] = useState(data);

  return (
    <Animate
      children={LessonCreatorContainer}
      others={{ current, stepData, setStepData, setCurrent }}
    />
  );
}

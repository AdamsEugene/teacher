/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Animate from "../../_shared/components/Animate";
import { FlexboxGrid } from "rsuite";
import Typography from "../../_shared/components/Typography";
import TeachersGuideForms from "../../_shared/components/form/TeachersGuideForms";
import { FormWrapper } from "../../_shared/components/form/@styles";

const TeachersGuideCreatorContainer = React.forwardRef((props: any, ref) => {
  const { ...others } = props;

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
      <TeachersGuideForms />
    </FormWrapper>
  );
});

export default function TeachersGuideCreator() {
  return <Animate children={TeachersGuideCreatorContainer} />;
}

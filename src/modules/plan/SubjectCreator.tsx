/* eslint-disable @typescript-eslint/no-explicit-any */
import Animate from "../../_shared/components/Animate";
import { FlexboxGrid } from "rsuite";
import Typography from "../../_shared/components/Typography";
import SubjectInfo from "../../_shared/components/form/SubjectInfo";
import { FormInModalWrapper } from "../../_shared/components/form/@styles";

export default function Subject() {
  return (
    <FormInModalWrapper>
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={14}>
          <Typography $variant="title">Complete The Form Below</Typography>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={10}></FlexboxGrid.Item>
      </FlexboxGrid>
      <Animate children={SubjectInfo} />
    </FormInModalWrapper>
  );
}

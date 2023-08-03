import { Button, FlexboxGrid, Progress, Rate, Stack } from "rsuite";
import CustomCarousel from "../../../_shared/components/CustomCarousel";
import { styled } from "styled-components";

interface Props {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Reviews(props: Props) {
  const { setOpenDrawer } = props;

  return (
    <FlexboxGrid justify="space-between">
      <FlexboxGrid.Item colspan={6}>
        <Stack
          justifyContent="flex-start"
          direction="column"
          alignItems="flex-start"
        >
          <Rate readOnly defaultValue={2.5} allowHalf />
          <ProgressWrapper>
            <Progress.Line percent={30} strokeColor="#daff07" />
            <Progress.Line percent={30} strokeColor="#07ffb5" />
            <Progress.Line percent={50} strokeColor="#07ff6a" />
            <Progress.Line percent={100} strokeColor="#07d6ff" />
            <Progress.Line percent={100} strokeColor="#ea07ff" />
          </ProgressWrapper>
        </Stack>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={16}>
        <Stack direction="column" alignItems="flex-start" spacing={16}>
          <CustomCarousel />
          <Button
            onClick={() => setOpenDrawer(true)}
            appearance="primary"
            color="cyan"
          >
            View All Reviews
          </Button>
        </Stack>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}

const ProgressWrapper = styled.div`
  width: 300px;
`;

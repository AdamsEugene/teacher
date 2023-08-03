import { FlexboxGrid, Stack } from "rsuite";
import { GiBookCover } from "react-icons/gi";
import { Icon } from "@rsuite/icons";
import { styled } from "styled-components";
import TimeIcon from "@rsuite/icons/Time";

import Typography from "../../../_shared/components/Typography";

export default function Syllabus() {
  return (
    <FlexboxGrid justify="space-between">
      <FlexboxGrid.Item colspan={4}>
        <Stack>
          <h3>Section 1</h3>
        </Stack>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={20}>
        <Stack direction="column" alignItems="flex-start" spacing={8}>
          <Stack spacing={12}>
            <IconWrapper>
              <TimeIcon />
            </IconWrapper>
            <Typography>2 hours to complete</Typography>
          </Stack>
          <Typography $variant="subtitle">
            Introduction to Deep Learning
          </Typography>
          <Typography>
            Analyze the major trends driving the rise of deep learning, and give
            examples of where and how it is applied today.
          </Typography>
          <Stack spacing={8}>
            <Icon as={GiBookCover} />
            <Typography>6 videos (Total 74 min)</Typography>
            <Typography $color="grey">, 2 readings, 3 quizzes</Typography>
            <Typography $color="active">See All</Typography>
          </Stack>
        </Stack>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.text.active};
  svg {
    width: 30px;
    height: 30px;
  }
`;

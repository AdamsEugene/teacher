import { Button, FlexboxGrid, Stack } from "rsuite";
import CheckIcon from "@rsuite/icons/Check";
import { EnrollButton } from "./@styles";

import Typography from "../../../_shared/components/Typography";

export default function Enrolment() {
  return (
    <FlexboxGrid justify="space-between">
      <FlexboxGrid.Item colspan={6}>
        <Stack direction="column" alignItems="flex-start" spacing={16}>
          <Stack spacing={8}>
            <CheckIcon />
            <Typography>This Course Plus the Full Specialization</Typography>
          </Stack>
          <Stack spacing={8}>
            <CheckIcon />
            <Typography>Shareable Certificates</Typography>
          </Stack>
          <Stack spacing={8}>
            <CheckIcon />
            <Typography>Self-Paced Learning Option</Typography>
          </Stack>
          <Stack spacing={8}>
            <CheckIcon />
            <Typography>Course Videos & Readings</Typography>
          </Stack>
          <Stack spacing={8}>
            <CheckIcon />
            <Typography>Practice Quizzes</Typography>
          </Stack>
          <Stack spacing={8}>
            <CheckIcon />
            <Typography>Graded Assignments with Peer Feedback</Typography>
          </Stack>
          <Stack spacing={8}>
            <CheckIcon />
            <Typography>Graded Quizzes with Feedback</Typography>
          </Stack>
          <Stack spacing={8}>
            <CheckIcon />
            <Typography>Graded Programming Assignments</Typography>
          </Stack>
          <EnrollButton>
            <Button appearance="primary" size="lg" color="red">
              <Stack spacing={6} direction="column">
                <Typography>Enroll for free</Typography>
                <Typography>Start Jul 24</Typography>
              </Stack>
            </Button>
          </EnrollButton>
        </Stack>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={16}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
        quae nihil animi facilis, necessitatibus blanditiis quidem
        exercitationem, eaque reprehenderit voluptatum alias vero culpa commodi
        quod itaque nobis velit sed modi?
      </FlexboxGrid.Item>
      <Typography>1,211,196 already enrolled</Typography>
      <Typography>
        You can audit this course for free. When you audit a course, you can
        access the course materials without graded assignments or the ability to
        earn a certificate.
      </Typography>
    </FlexboxGrid>
  );
}

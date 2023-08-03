import { Panel, Stack } from "rsuite";
import OffRoundIcon from "@rsuite/icons/OffRound";

import InstructorList from "./InstructorList";
import Typography from "../../../_shared/components/Typography";
import { styled } from "styled-components";

export default function Instructors() {
  return (
    <Stack spacing={16} direction="column">
      <Stack wrap spacing={24}>
        <InstructorList img="https://avatars.githubusercontent.com/u/1203827" />
        <InstructorList img="https://avatars.githubusercontent.com/u/15609339" />
        <InstructorList img="https://avatars.githubusercontent.com/u/10924138" />
      </Stack>
      <Panel header="OFFERED BY">
        <Stack spacing={72}>
          <IconBig>
            <OffRoundIcon />
          </IconBig>
          <Stack direction="column" alignItems="flex-start">
            <Typography $variant="subtitle">DeepLearning.AI</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              repellendus ullam, corrupti assumenda numquam optio rem, error
              laboriosam reprehenderit modi id animi, molestiae harum eius
              excepturi provident earum dolorum accusamus.
            </Typography>
          </Stack>
        </Stack>
      </Panel>
    </Stack>
  );
}

const IconBig = styled.div`
  svg {
    width: 5em;
    height: 5em;
  }
`;

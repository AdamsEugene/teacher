import { FlexboxGrid, List, Panel, Stack, Tag, TagGroup } from "rsuite";
import TimeIcon from "@rsuite/icons/Time";

import Typography from "../../../_shared/components/Typography";
import { styled } from "styled-components";
import LoadMore from "../../../_shared/components/LoadMore";

export default function About() {
  return (
    <>
      <FlexboxGrid.Item colspan={16}>
        <Panel
          header={
            <Headers>
              <h3>About this course</h3>
              <Typography $color="grey">1,186,085 recent views</Typography>
            </Headers>
          }
        >
          <LoadMore
            lines={3}
            content="In the first course of the Deep Learning Specialization, you will
              study the foundational concept of neural networks and deep
              learning. By the end, you will be familiar with the significant
              technological trends driving the rise of deep learning; build,
              train, and apply fully connected deep neural networks; implement
              efficient (vectorized) neural networks; identify key parameters in
              a neural network’s architecture; and apply deep learning to your
              own applications. The Deep Learning Specialization is our
              foundational program that will help you understand the
              capabilities, challenges, and consequences of deep learning and
              prepare you to participate in the development of leading-edge AI
              technology. It provides a pathway for you to gain the knowledge
              and skills to apply machine learning to your work, level up your
              technical career, and take the definitive step in the world of AI."
          />
        </Panel>
        <SkillsWrapper>
          <Panel header={"SKILLS YOU WILL GAIN"}>
            <TagGroup>
              <Tag size="lg">Deep Learning</Tag>
              <Tag size="lg">Artificial Neural Network</Tag>
              <Tag size="lg">Backpropagation</Tag>
              <Tag size="lg">Python Programming</Tag>
              <Tag size="lg">Neural Network Architecture</Tag>
              <Tag size="lg">architecture</Tag>
              <Tag size="lg">machine learning</Tag>
              <Tag size="lg">definitive</Tag>
              <Tag size="lg">consequences</Tag>
            </TagGroup>
          </Panel>
        </SkillsWrapper>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={8}>
        <List bordered>
          <List.Item>
            <Stack spacing={12} alignItems="flex-start">
              <IconWrapper>
                <TimeIcon />
              </IconWrapper>
              <Stack direction="column" alignItems="flex-start">
                <h4>Flexible deadlines</h4>
                <Typography>
                  Reset deadlines in accordance to your schedule.
                </Typography>
              </Stack>
            </Stack>
          </List.Item>
          <List.Item>
            <Stack spacing={12} alignItems="flex-start">
              <IconWrapper>
                <TimeIcon />
              </IconWrapper>
              <Stack direction="column" alignItems="flex-start">
                <h4>Flexible deadlines</h4>
                <Typography>
                  Reset deadlines in accordance to your schedule.
                </Typography>
              </Stack>
            </Stack>
          </List.Item>
          <List.Item>
            <Stack spacing={12} alignItems="flex-start">
              <IconWrapper>
                <TimeIcon />
              </IconWrapper>
              <Stack direction="column" alignItems="flex-start">
                <h4>Flexible deadlines</h4>
                <Typography>
                  Reset deadlines in accordance to your schedule.
                </Typography>
              </Stack>
            </Stack>
          </List.Item>
          <List.Item>
            <Stack spacing={12} alignItems="flex-start">
              <IconWrapper>
                <TimeIcon />
              </IconWrapper>
              <Stack direction="column" alignItems="flex-start">
                <h4>Flexible deadlines</h4>
                <Typography>
                  Reset deadlines in accordance to your schedule.
                </Typography>
              </Stack>
            </Stack>
          </List.Item>
          <List.Item>
            <Stack spacing={12} alignItems="flex-start">
              <IconWrapper>
                <TimeIcon />
              </IconWrapper>
              <Stack direction="column" alignItems="flex-start">
                <h4>Flexible deadlines</h4>
                <Typography>
                  Reset deadlines in accordance to your schedule.
                </Typography>
              </Stack>
            </Stack>
          </List.Item>
        </List>
      </FlexboxGrid.Item>
    </>
  );
}

const Headers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkillsWrapper = styled.div`
  .rs-tag {
    background-color: ${({ theme }) => theme.colors.background.cards};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

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

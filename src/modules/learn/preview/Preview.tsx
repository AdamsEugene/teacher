/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useState } from "react";
import { styled } from "styled-components";
import Animate from "../../../_shared/components/Animate";
import { Affix, Avatar, Button, FlexboxGrid, Nav, Rate, Stack } from "rsuite";
import OffRoundIcon from "@rsuite/icons/OffRound";

import Typography from "../../../_shared/components/Typography";
import PreviewDetails from "./PreviewDetails";
import { EnrollButton } from "./@styles";
import { Link } from "react-scroll";

const LinkItem = React.forwardRef((props: any, ref) => {
  return (
    <Link
      {...props}
      ref={ref as React.Ref<HTMLAnchorElement> | undefined}
      activeClass="active"
      to={props.to as string}
      spy
      smooth
      offset={-70}
      duration={500}
    />
  );
});

const PreviewContainer = React.forwardRef((props: any, ref) => {
  return (
    <PreviewWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <TopPart>
        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item colspan={16}>
            <Stack spacing={16} direction="column" alignItems="flex-start">
              <Typography $variant="title">
                Learn TypeScript In 5 Hours
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                temporibus architecto eligendi numquam illo? Fugit, eum mollitia
                cum aut, possimus laborum ut nesciunt rem doloremque ullam ipsum
                veniam. Iusto, tempore.
              </Typography>
              <Stack spacing={6}>
                <Rate defaultValue={4.9} size="xs" allowHalf readOnly />
                <Typography>4.9 130,402 ratings</Typography>
              </Stack>
              <Stack spacing={6}>
                <Avatar
                  size="md"
                  circle
                  src={
                    (Math.random() * 10) % 2 === 0
                      ? "https://avatars.githubusercontent.com/u/12592949"
                      : "https://avatars.githubusercontent.com/u/8225666"
                  }
                  alt="@SevenOutman"
                />
                <Typography>Adams Eugene</Typography>
                <Typography $color="grey">Adams Eugene</Typography>
              </Stack>
              <Stack spacing={16}>
                <EnrollButton>
                  <Button appearance="primary" size="lg" color="red">
                    <Stack spacing={6} direction="column">
                      <Typography>Enroll for free</Typography>
                      <Typography>Start Jul 24</Typography>
                    </Stack>
                  </Button>
                </EnrollButton>
                <h4>
                  Try for Free: Enroll to start your 14-day full access free
                  trial
                </h4>
              </Stack>
              <Typography $color="grey">779,946 already enrolled</Typography>
            </Stack>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={7}>
            {/* <FlexboxGrid justify="center"> */}
            <Typography>Offered By</Typography>
            <Stack spacing={8}>
              <OffRoundIcon />
              <Typography $variant="title">DeepLearning.AI</Typography>
            </Stack>
            {/* </FlexboxGrid> */}
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </TopPart>
      <BottomPart>
        <PreviewDetails />
      </BottomPart>
    </PreviewWrapper>
  );
});

export default function Preview() {
  const [navbar, setNavbar] = useState<boolean>();

  return (
    <Wrapper>
      <Affix top={80} onChange={setNavbar}>
        <HeaderWrapper $navbar={navbar}>
          <Nav appearance="subtle">
            <Nav.Item {...{ to: "About" }} as={LinkItem}>
              About
            </Nav.Item>
            <Nav.Item {...{ to: "Instructors" }} as={LinkItem}>
              Instructors
            </Nav.Item>
            <Nav.Item {...{ to: "Syllabus" }} as={LinkItem}>
              Syllabus
            </Nav.Item>
            <Nav.Item {...{ to: "Reviews" }} as={LinkItem}>
              Reviews
            </Nav.Item>
            <Nav.Item {...{ to: "Enrollment Options" }} as={LinkItem}>
              Enrollment Options
            </Nav.Item>
            <Nav.Item {...{ to: "FAQ" }} as={LinkItem}>
              FAQ
            </Nav.Item>
          </Nav>
        </HeaderWrapper>
      </Affix>
      <AnimateWrapper>
        <Animate children={PreviewContainer} />
      </AnimateWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const AnimateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  /* width: 100%; */
  width: calc(60%);
`;

const TopPart = styled.div`
  min-height: 300px;
  width: 100%;
  backdrop-filter: blur(16px) saturate(19%);
  -webkit-backdrop-filter: blur(16px) saturate(19%);
  background-color: rgba(52, 195, 255, 0.25);
  background: ${({ theme }) => theme.colors.background.cards};
  border-radius: 12px;
  padding: 16px;
`;

const BottomPart = styled.div`
  /* margin-top: 8px; */
`;

const HeaderWrapper = styled.div<{ $navbar?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  z-index: 999;
  background: ${({ theme, $navbar }) =>
    $navbar ? theme.colors.background.cards : "transparent"};

  transition: background 0.5s ease-in-out;
`;

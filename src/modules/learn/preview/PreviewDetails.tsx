/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Divider, FlexboxGrid, Panel, Stack } from "rsuite";
import { Element } from "react-scroll";
import { styled } from "styled-components";
import { GiTeacher } from "react-icons/gi";
import { HiInformationCircle } from "react-icons/hi";
import { Icon } from "@rsuite/icons";

import Typography from "../../../_shared/components/Typography";
import { StyledDrawer } from "../../../_shared/components/StyledDrawer";
import AllReviews from "./AllReviews";
import Syllabus from "./Syllabus";
import FQA from "./FQA";
import Enrolment from "./Enrolment";
import Reviews from "./Reviews";
import Instructors from "./Instructors";
import About from "./About";

export default function PreviewDetails() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Content>
        <Element name="About" className="element">
          <Divider />
          <FlexboxGrid justify="space-between">
            <About />
          </FlexboxGrid>
        </Element>
        <Element name="Instructors" className="element">
          <Divider />
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={24}>
              <Panel
                header={
                  <Headers>
                    <h3>Instructors</h3>
                    <Stack spacing={8}>
                      <Typography $color="grey">Instructor rating</Typography>
                      <Icon as={GiTeacher} color="yellow" />
                      <Typography $color="active">4.91/5</Typography>
                      <Typography>(22,134 Ratings)</Typography>
                      <Icon as={HiInformationCircle} color="yellow" />
                    </Stack>
                  </Headers>
                }
              >
                <Instructors />
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Element>
        <Element name="Syllabus" className="element">
          <Divider />
          <Panel
            header={
              <Headers>
                <Typography $variant="title">
                  Syllabus - What you will learn from this course
                </Typography>
                <Typography>Content Rating 👍 97% (208,503 ratings)</Typography>
              </Headers>
            }
          >
            <Syllabus />
          </Panel>
        </Element>
        <Element name="Reviews" className="element">
          <Divider />
          <Panel
            header={
              <FlexboxGrid justify="space-between">
                <FlexboxGrid.Item colspan={6}>
                  <h3>REVIEWS</h3>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={16}>
                  <h4>TOP REVIEWS FROM NEURAL NETWORKS AND DEEP LEARNING</h4>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            }
          ></Panel>
          <Reviews setOpenDrawer={setOpenDrawer} />
        </Element>
        <Element name="Enrollment Options" className="element">
          <Divider />
          <Panel header={<h3>Enrolment Option</h3>}>
            <Enrolment />
          </Panel>
        </Element>
        <Element name="FAQ" className="element">
          <Divider />
          <Panel header={<h3>Frequently Asked Questions</h3>}>
            <FQA />
          </Panel>
        </Element>
        <StyledDrawer
          open={openDrawer}
          setOpen={setOpenDrawer}
          children={<AllReviews />}
        />
      </Content>
    </>
  );
}

const Headers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Content = styled.div`
  margin-top: 32px;
  .element {
    margin-bottom: 32px;
    .rs-divider {
      margin: 8px 0 !important;
    }
  }
`;

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from "react";
import { styled } from "styled-components";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import { Avatar, AvatarGroup, Button, FlexboxGrid } from "rsuite";

import Animate from "../../_shared/components/Animate";
import CustomSteps from "../../_shared/components/CustomSteps";
import Typography from "../../_shared/components/Typography";
import PersonalInfo from "../../_shared/components/form/PersonalInfo";
import CourseInfoBasic from "../../_shared/components/form/CourseInfoBasic";
import Instructors from "../../_shared/components/form/Instructors";
import { DataProps, InstructorData } from "./@types";
import { StyledDrawer } from "../../_shared/components/StyledDrawer";
import ViewInstructor from "../../_shared/components/form/ViewInstructor";
import { FormWrapper } from "../../_shared/components/form/@styles";

const data: DataProps[] = [
  { title: "Personal Info", status: "wait" },
  { title: "Instructors", status: "wait" },
  { title: "Course Info (Basic)", status: "wait" },
  { title: "Course Info", status: "wait" },
  { title: "Summary", status: "wait" },
];

const CreateCourseContainer = React.forwardRef((props: any, ref) => {
  const {
    current,
    setInstructors,
    stepData,
    setStepData,
    setCurrent,
    ...others
  } = props;
  const [addInstructor, setAddInstructor] = useState(false);
  const _current = current as number;

  const RenderAddInstructorButton = React.forwardRef((props, ref) => {
    return (
      <ButtonWrapper
        {...props}
        ref={ref as React.RefObject<HTMLDivElement> | null | undefined}
      >
        <FlexboxGrid justify="end">
          <Button
            color="cyan"
            appearance="primary"
            startIcon={<AddOutlineIcon />}
            onClick={() => setAddInstructor(true)}
          >
            Add Another Instructor
          </Button>
        </FlexboxGrid>
      </ButtonWrapper>
    );
  });

  return (
    <FormWrapper
      {...others}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={14}>
          <Typography $variant="title">Complete The Form Below</Typography>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={10}>
          <Animate children={RenderAddInstructorButton} inn={_current === 1} />
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <CustomSteps current={_current} data={stepData} />
      <Animate
        children={PersonalInfo}
        inn={_current === 0}
        others={{ setStepData, setCurrent }}
      />
      <Animate
        children={Instructors}
        inn={_current === 1}
        others={{
          setInstructors,
          setStepData,
          addInstructor,
          setAddInstructor,
          setCurrent,
        }}
      />
      <Animate
        children={CourseInfoBasic}
        inn={_current === 2}
        others={{ setStepData, setCurrent }}
      />
      <Animate
        children={CourseInfoBasic}
        inn={_current === 3}
        others={{ setStepData, setCurrent }}
      />
      <Animate
        children={PersonalInfo}
        inn={_current === 4}
        others={{ setStepData, setCurrent }}
      />
      <Animate
        children={PersonalInfo}
        inn={_current === 5}
        others={{ setStepData, setCurrent }}
      />
    </FormWrapper>
  );
});

export default function CreateCourse() {
  const [current, setCurrent] = useState(0);
  const [instructors, setInstructors] = useState<Partial<InstructorData>[]>();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [stepData, setStepData] = useState(data);
  const [instructor, setInstructor] = useState<Partial<InstructorData>>();

  const RenderInstructors = React.forwardRef((props, ref) => {
    return (
      <ButtonWrapper
        {...props}
        ref={ref as React.RefObject<HTMLDivElement> | null | undefined}
      >
        <AvatarGroup spacing={12}>
          {instructors?.length &&
            instructors.map((instructor, i) => (
              <Avatar
                key={i}
                size="lg"
                circle
                src={instructor.profileImageUrl}
                alt="@SevenOutman"
                onClick={() => {
                  setInstructor(instructor);
                  setOpenDrawer(true);
                }}
                style={{ cursor: "pointer" }}
              />
            ))}
        </AvatarGroup>
      </ButtonWrapper>
    );
  });

  return (
    <>
      <Animate inn={current === 1} children={RenderInstructors} />
      <Animate
        children={CreateCourseContainer}
        others={{ current, setInstructors, stepData, setStepData, setCurrent }}
      />
      <StyledDrawer
        open={openDrawer}
        setOpen={setOpenDrawer}
        children={<ViewInstructor instructor={instructor} />}
      />
    </>
  );
}

const ButtonWrapper = styled.div``;

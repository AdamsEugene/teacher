import React, { useState } from "react";
import { styled } from "styled-components";
import { Button, ButtonGroup, FlexboxGrid, Input } from "rsuite";
import AddOutlineIcon from "@rsuite/icons/AddOutline";

import Animate from "../../_shared/components/Animate";
import Typography from "../../_shared/components/Typography";
import { useNavigate } from "react-router-dom";
import { StyledDrawer } from "../../_shared/components/StyledDrawer";
import TeachersGuideForms from "../../_shared/components/form/TeachersGuideForms";
import CustomTable from "../../_shared/components/CustomTable";

const PlanContainer = React.forwardRef((props, ref) => {
  const [createGuide, setCreateGuide] = useState(false);
  const navigate = useNavigate();

  const handleCreatedGuide = () => setCreateGuide(true);

  return (
    <PlanWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <Header>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={16}>
            <Typography $variant="title">Teacher's guide</Typography>
            <Typography $variant="title">
              Plan you'r lesson and make life easy for everyone
            </Typography>
            <Typography $variant="subtitle" color="grey">
              We focus on the best course for industrial and commercial use.
              Your job here is to just read, watch or listen and we promise you
              will be ready for that dream job
            </Typography>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={8}>
            <FlexboxGrid justify="end">
              <ButtonGroup>
                <Button
                  color="orange"
                  appearance="primary"
                  startIcon={<AddOutlineIcon />}
                  onClick={() => navigate("subject/create")}
                >
                  Create New Subject
                </Button>
                <Button
                  color="cyan"
                  appearance="primary"
                  startIcon={<AddOutlineIcon />}
                  onClick={handleCreatedGuide}
                >
                  Create Teachers Guide
                </Button>
              </ButtonGroup>
            </FlexboxGrid>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Header>
      <Input
        type="week"
        id="week"
        name="week"
        min="2023-W01"
        max="2023-W52"
        required
      />
      <CustomTable />
      <StyledDrawer
        open={createGuide}
        setOpen={setCreateGuide}
        children={<TeachersGuideForms />}
        title="Complete The Form Below"
        backdrop="static"
      />
    </PlanWrapper>
  );
});

export default function Plan() {
  return <Animate children={PlanContainer} />;
}

const PlanWrapper = styled.div`
  width: 60%;
`;

const Header = styled.div``;

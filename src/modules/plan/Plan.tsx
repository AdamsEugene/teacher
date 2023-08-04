import React from "react";
import { styled } from "styled-components";
import { Button, FlexboxGrid, Input } from "rsuite";
import AddOutlineIcon from "@rsuite/icons/AddOutline";

import Animate from "../../_shared/components/Animate";
import Typography from "../../_shared/components/Typography";
import { useNavigate } from "react-router-dom";

const PlanContainer = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <PlanWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <Header>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={14}>
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
          <FlexboxGrid.Item colspan={10}>
            <FlexboxGrid justify="end">
              <Button
                color="cyan"
                appearance="primary"
                startIcon={<AddOutlineIcon />}
                onClick={() => navigate("create")}
              >
                Create New Subject
              </Button>
            </FlexboxGrid>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Header>
      <Input type="week" />
    </PlanWrapper>
  );
});

export default function Plan() {
  return <Animate children={PlanContainer} />;
}

const PlanWrapper = styled.div``;

const Header = styled.div``;

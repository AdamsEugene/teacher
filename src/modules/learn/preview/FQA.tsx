import { Button, Panel, PanelGroup, Placeholder } from "rsuite";
import { styled } from "styled-components";

export default function FQA() {
  return (
    <QAWrapper>
      <QAWrapper>
        <PanelGroup accordion defaultActiveKey={1}>
          <Panel header="Panel 1" eventKey={1} id="panel1">
            <Placeholder.Paragraph />
          </Panel>
          <Panel header="Panel 2" eventKey={2} id="panel2">
            <Placeholder.Paragraph />
          </Panel>
          <Panel header="Panel 3" eventKey={3} id="panel3">
            <Placeholder.Paragraph />
          </Panel>
          <Panel header="Panel 3" eventKey={3} id="panel3">
            <Placeholder.Paragraph />
          </Panel>
        </PanelGroup>
      </QAWrapper>
      <Button appearance="primary" color="cyan">
        See All
      </Button>
    </QAWrapper>
  );
}

const QAWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background.cards};
  min-height: 30px;
  border-radius: 12px;
  padding: 16px;
`;

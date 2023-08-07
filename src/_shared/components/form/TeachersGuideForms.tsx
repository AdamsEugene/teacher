import { useState } from "react";
import {
  Button,
  ButtonToolbar,
  FlexboxGrid,
  Form,
  SelectPicker,
  Stack,
} from "rsuite";
import CustomModal from "../CustomModal";
import Subject from "../../../modules/plan/SubjectCreator";

const data = ["Lloyd", "Alice", "Julia", "Albert"].map((item) => ({
  label: item,
  value: item,
}));

export default function TeachersGuideForms() {
  const [openModal, setOpenModal] = useState(false);
  const save = () => {
    console.log();
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Form fluid>
      <Form.Group>
        <Form.ControlLabel>Academic Period</Form.ControlLabel>
        <Stack spacing={16}>
          <Stack.Item grow={1}>
            <SelectPicker label="User" data={data} block placement="auto" />
          </Stack.Item>
          <Stack.Item>
            <Button appearance="primary" color="cyan">
              New Period
            </Button>
          </Stack.Item>
        </Stack>
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Subject</Form.ControlLabel>
        <Stack spacing={16}>
          <Stack.Item grow={1}>
            <SelectPicker label="User" data={data} block placement="auto" />
          </Stack.Item>
          <Stack.Item>
            <Button appearance="primary" color="cyan" onClick={handleOpenModal}>
              New Subject
            </Button>
          </Stack.Item>
        </Stack>
      </Form.Group>
      <Form.Group></Form.Group>
      <FlexboxGrid justify="end">
        <ButtonToolbar>
          <Button appearance="primary" onClick={save}>
            Save
          </Button>
        </ButtonToolbar>
      </FlexboxGrid>
      <CustomModal
        handleClose={handleCloseModal}
        open={openModal}
        size="lg"
        children={<Subject />}
        backdrop="static"
        overflow={false}
      />
    </Form>
  );
}

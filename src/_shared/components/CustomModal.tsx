import { PropsWithChildren } from "react";
import { Modal, Button, ModalProps } from "rsuite";

interface Props {
  backdrop?: boolean | "static";
  open: boolean;
  title?: string;
  handleClose: () => void;
  onSave?: () => void;
}

export default function CustomModal(
  props: PropsWithChildren<Props & ModalProps>
) {
  const { backdrop, open, handleClose, title, children, onSave, ...others } =
    props;

  return (
    <>
      <Modal
        {...others}
        backdrop={backdrop}
        keyboard={false}
        open={open}
        onClose={handleClose}
      >
        <Modal.Header>
          <Modal.Title>{title || "Modal Title"}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
          <Button onClick={onSave} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

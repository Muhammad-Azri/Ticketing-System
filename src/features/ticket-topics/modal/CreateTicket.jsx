import Modal from "@/components/Modal";
import TicketForm from "../TicketForm";

const CreateTicket = ({
  onClose = () => {},
  onAdd = () => {},
  onEdit = () => {},
  defaultValue = null,
}) => {
  return (
    <Modal>
      <TicketForm
        onClose={onClose}
        onAdd={onAdd}
        onEdit={onEdit}
        defaultValue={defaultValue}
      />
    </Modal>
  );
};

export default CreateTicket;

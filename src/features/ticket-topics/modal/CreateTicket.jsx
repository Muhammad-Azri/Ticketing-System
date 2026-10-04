import Modal from "@/components/Modal";
import TicketForm from "../TicketForm";

const CreateTicket = ({ onClose = () => {}, onAdd = () => {} }) => {
  return (
    <Modal>
      <TicketForm onClose={onClose} onAdd={onAdd} />
    </Modal>
  );
};

export default CreateTicket;

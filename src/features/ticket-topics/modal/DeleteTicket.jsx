import Button from "@/components/Button";
import Modal from "@/components/Modal";

const DeleteTicket = ({ onDelete = () => {}, onClose = () => {} }) => {
  return (
    <Modal>
      <div className="w-full max-w-110 max-h-[95vh] rounded-2xl bg-white p-6 shadow-xl flex flex-col gap-4">
        <span>Apakah Anda yakin ingi menghapus ticket?</span>
        <div className="flex justify-end gap-1">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destruction" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteTicket;

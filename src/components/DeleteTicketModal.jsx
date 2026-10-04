import cn from "@/utils/cn";
import Button from "./Button";
import Modal from "./Modal";

const DeleteTicket = ({ onDelete = () => {}, onClose = () => {} }) => {
  //   const gajadi = () => {
  //     return console.log("tombol gajadi");
  //   };
  return (
    <Modal>
      <div className="w-full max-w-110 max-h-[95vh] rounded-2xl bg-white p-6 shadow-xl flex flex-col gap-4">
        <span>Apakah Anda yakin ingi menghapus ticket?</span>
        <div className="flex justify-end gap-1">
          <Button variant="secondary" onClick={onClose}>
            Ga Jadi
          </Button>
          <Button
            variant="secondary"
            className={cn("bg-red-500")}
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteTicket;

const Modal = ({ children = null }) => {
  return (
    <div className="flex items-center justify-center z-400 fixed bg-black/30 h-dvh w-full top-0 left-0">
      {children}
    </div>
  );
};

export default Modal;

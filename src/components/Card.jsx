const Card = ({ children = "" }) => {
  return (
    <div className="flex flex-col w-full rounded-2xl border-gray-200 bg-white p-6 gap-1">
      <div className="flex items-center justify-between">
        <span className="font-semibold"></span>
      </div>
      {children}
    </div>
  );
};

export default Card;

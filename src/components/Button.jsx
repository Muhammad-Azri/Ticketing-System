import cn from "../utils/cn";

const Button = ({
  children = "",
  icon = null,
  variant = "primary",
  onClick = () => {},
}) => {
  const buttonVariant = {
    primary: "bg-green-600 hover:bg-green-700 text-white",
    secondary: "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50",
    destruction: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex rounded-md justify-center p-2 gap-1 text-sm items-center cursor-pointer w-fit",
        buttonVariant[variant],
      )}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;

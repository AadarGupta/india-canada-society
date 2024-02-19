type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant?: string;
  onClick?: () => void;
};

const Button = ({ type, title, icon, variant, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        type={type}
        className={`flexCenter gap-3 rounded-full border ${variant}`}
        onClick={onClick} // Use onClick prop in the button element
      >
        <label className="bold-20 whitespace-nowrap cursor-pointer">
          {title}
        </label>
      </button>
    </div>
  );
};

export default Button;

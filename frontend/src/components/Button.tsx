import { LiaChessSolid } from "react-icons/lia";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-5 text-white flex bg-[#779556] p-5 text-3xl font-extrabold px-20 rounded-full hover:bg-[#4e6339] transition-all ${className}`}
    >
      <span className="mt-1 pr-2">
        <LiaChessSolid />
      </span>
      {children}
    </button>
  );
};

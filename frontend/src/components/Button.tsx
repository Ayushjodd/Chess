import { LiaChessSolid } from "react-icons/lia";

export const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="mt-5 text-white flex bg-[#779556] p-5 text-3xl font-extrabold px-20 rounded-full hover:bg-[#4e6339] transition-all"
    >
      <span className="mt-1 pr-2">
        <LiaChessSolid />
      </span>
      {children}
    </button>
  );
};

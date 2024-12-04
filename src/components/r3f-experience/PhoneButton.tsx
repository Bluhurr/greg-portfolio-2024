import { ReactNode } from "react";

interface PhoneButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const PhoneButton = ({ children, onClick, className }: PhoneButtonProps) => {
  return (
    <button
      className={`w-[95%] py-3 flex gap-4 items-center justify-center phone-ui-button transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PhoneButton;

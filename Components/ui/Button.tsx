export const Button = ({
  title,
  icon,
  position,
  onClick,
  otherClasses,
  disabled,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  onClick?: () => void;
  otherClasses?: string;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`py-3 bg-[#525252] mt-10 sm:py-4 px-7 rounded-lg justify-center border border-gray-300 flex items-center gap-2 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md ${otherClasses}`}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export const ButtonDisabled = ({
  title,
  icon,
  position,
  onClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  onClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      disabled
      onClick={onClick}
      className={`py-3 bg-[#525252] opacity-50 cursor-not-allowed mt-10 sm:py-4 px-7 rounded-lg justify-center border border-gray-300 flex items-center gap-2 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md ${otherClasses}`}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

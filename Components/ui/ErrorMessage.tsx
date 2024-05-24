import { ReactNode } from "react";

export const ErrorMessage = ({ message }: { message: ReactNode }) => {
  return <p className="text-sm text-[#f00]">{message}</p>;
};

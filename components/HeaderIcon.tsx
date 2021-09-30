import { ReactNode } from "react";

interface HeaderIconProps {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  title: string;
}

export default function HeaderIcon({ Icon, title }: HeaderIconProps) {
  return (
    <div className="flex flex-col group items-center cursor-pointer w-12 sm:w-20 hover:text-white ">
      <Icon className="h-8 mb-1" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  );
}

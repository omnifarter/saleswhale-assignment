import { FunctionComponent } from "react";

interface ButtonProps {
  children: any;
  iconRight: any;
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className="flex rounded-sm items-center gap-2 text-white bg-[#40D2BF] px-4 py-2">
      {props.iconRight}
      {props.children}
    </button>
  );
};

export default Button;

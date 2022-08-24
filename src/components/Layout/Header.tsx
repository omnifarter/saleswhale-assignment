import { FunctionComponent } from "react";
import { ReactComponent as NotificationLogo } from "../../assets/menu_notification.svg";
import ProfilePic from "../../assets/john.png";
import { ReactComponent as CaretDown } from "../../assets/caret_down.svg";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div
      className="w-full h-[80px] flex justify-between px-8"
      style={{ borderBottom: "1px solid #E2E2E2" }}
    >
      <div className="flex justify-center items-center pr-8">
        <h1 className="text-[#1A1919] font-semibold text-lg text-center">
          NARWAL
        </h1>
        <div style={{ border: "1px solid #E2E2E2" }} className="h-full mx-8" />
        <h3>Teams</h3>
      </div>
      <div className="flex items-center">
        <NotificationLogo className="hover:cursor-pointer" />
        <h3 className="text-sm mx-2">Hello, John</h3>
        <img
          src={ProfilePic}
          className="rounded-full mr-2 hover:cursor-pointer"
        />
        <CaretDown className="hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;

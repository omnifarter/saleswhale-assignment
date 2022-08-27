import { FunctionComponent, useState } from "react";
import { ReactComponent as NotificationLogo } from "../../assets/icon-mail.svg";
import { ReactComponent as CaretDown } from "../../assets/caret_down.svg";
import { useEffect } from "react";
import { getUser } from "../../apis/api";
import Badge from "../Badge";

export interface User {
  id: number;
  name: string;
  avatar: string;
  notifications_count: number;
}

interface HeaderProps {}
const Header: FunctionComponent<HeaderProps> = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(getUser());
  }, []);
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
        <Badge notifCount={user?.notifications_count} />
        <h3 className="text-sm mx-2">Hello, {user?.name}</h3>
        <img
          src={user?.avatar}
          className="w-12 h-12 rounded-full mr-2 hover:cursor-pointer"
        />
        <CaretDown className="hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;

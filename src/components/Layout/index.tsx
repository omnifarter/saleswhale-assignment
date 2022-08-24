import { FunctionComponent } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = (props: any) => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <Header />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;

import { FunctionComponent, useState } from "react";
import { ReactComponent as ReactLogo } from "../../assets/logo.svg";
import { ReactComponent as CampaignsLogo } from "../../assets/icon-campaign.svg";
import { ReactComponent as HelpLogo } from "../../assets/icon-help.svg";
import { ReactComponent as ContactsLogo } from "../../assets/icon-leads.svg";
import { ReactComponent as ReportsLogo } from "../../assets/icon-reports.svg";
import { ReactComponent as TeamsLogo } from "../../assets/icon-teams.svg";

const mapping: [string, any][] = [
  ["campaigns", <CampaignsLogo className="w-full h-[25px] " />],
  ["teams", <TeamsLogo className="w-full h-[25px] " />],
  ["contacts", <ContactsLogo className="w-full h-[25px] " />],
  ["reports", <ReportsLogo className="w-full h-[25px] " />],
];
interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const [selected, setSelected] = useState("teams");

  return (
    <div className="flex flex-col justify-between h-full w-[80px] bg-[#042235] sticky">
      <div>
        <ReactLogo />
        {mapping.map((icon) => (
          <div
            key={icon[0]}
            className={`flex justify-center items-center w-[80px] h-[80px] hover:cursor-pointer ${
              selected == icon[0] ? "bg-[#2995DA] opacity-100" : "opacity-30"
            } `}
          >
            {icon[1]}
          </div>
        ))}
      </div>
      <div>
        <div
          className={`flex justify-center items-center w-[80px] h-[80px] hover:cursor-pointer`}
        >
          <HelpLogo className="w-full h-[25px] " />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

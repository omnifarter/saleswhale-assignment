import { FunctionComponent } from "react";
import { ReactComponent as CompaniesLogo } from "../../assets/icon_companies.svg";
import { ReactComponent as PlusIcon } from "../../assets/plus-icon.svg";
import Button from "../Button";

interface TeamsHeaderProps {}

const TeamsHeader: FunctionComponent<TeamsHeaderProps> = () => {
  return (
    <div className="flex justify-between items-center px-8 h-[80px]">
      <div className="flex items-center">
        <CompaniesLogo className="mr-4" />
        <h3 className="font-semibold text-3xl">Teams</h3>
      </div>
      <Button iconRight={<PlusIcon className='mr'/>}>CREATE NEW TEAM</Button>
    </div>
  );
};

export default TeamsHeader;

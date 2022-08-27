import { FunctionComponent } from "react";
import { Team } from "../../pages/Teams";
import TeamCard from "../TeamCard";

interface TeamCardContainerProps {
  teams: Team[];
}

const TeamCardContainer: FunctionComponent<TeamCardContainerProps> = (
  props: TeamCardContainerProps
) => {
  return (
    <div
      className="flex flex-col flex-grow bg-white pb-8"
      style={{
        boxShadow:
          "0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex h-[60px] justify-between items-center px-8">
        <p className="flex text-lg font-semibold">All Teams</p>
        <p className="text-sm text-[#7F7F7F]">
          Showing {props.teams.length} out of {props.teams.length} items
        </p>
      </div>
      <div
        style={{ borderBottom: "1px solid #EFEFEF" }}
        className="w-full h-1 mb-4 "
      />
      <div className="grid grid-cols-3 gap-4 justify-between items-center px-8">
        {props.teams.map((team) => (
          <TeamCard team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamCardContainer;

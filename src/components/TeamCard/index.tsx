import { FunctionComponent } from "react";
import { Team } from "../../pages/Teams";
import { ReactComponent as StarActive } from "../../assets/star-active.svg";
import { ReactComponent as StarDefault } from "../../assets/star-default.svg";
import { ReactComponent as CampaignsLogo } from "../../assets/icon-conversations-small.svg";
import { ReactComponent as LeadsLogo } from "../../assets/icon-leads-small.svg";

interface TeamCardProps {
  team: Team;
}

const TeamCard: FunctionComponent<TeamCardProps> = (props: TeamCardProps) => {
  const { team } = props;
  return (
    <div
      style={{ border: "1px solid #E4E7EC" }}
      className={`rounded-lg w-[300px] h-[188px] ${
        team.is_archived ? "bg-[#E4E7EC]" : ""
      }`}
    >
      <div className="flex w-full justify-between p-4">
        <div className="flex gap-4">
          <img className="h-12 w-12 rounded-lg" src={team.image} />
          <div>
            <p className="text-md">{team.name}</p>
            <p className="text-sm">{team.created_at || ""}</p>
          </div>
        </div>
        {team.is_favorited ? (
          <StarActive className="justify-self-end" />
        ) : (
          <StarDefault className="justify-self-end" />
        )}
      </div>
      <p
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          lineClamp: 2,
          textOverflow: "ellipsis",
          WebkitLineClamp: 2,
          overflow: "hidden",
        }}
        className="px-4"
      >
        {team.description}
      </p>
      <div style={{ marginTop: "8px", borderBottom: "1px solid #E4E7EC" }} />
      <div className="flex w-full items-center gap-2 mt-4 px-4">
        <CampaignsLogo />
        <p className="opacity-40 text-sm mr-4">
          {team.campaigns_count} Campaigns
        </p>
        <LeadsLogo />
        <p className="opacity-40 text-sm">{team.leads_count} Leads</p>
      </div>
    </div>
  );
};

export default TeamCard;

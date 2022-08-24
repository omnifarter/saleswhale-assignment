import { FunctionComponent } from "react";
import { Activity } from "../../pages/Teams";

interface ActivityCardProps {
  activity: Activity;
}

const textMapping = {
  added_leads: "added",
};
const ActivityCard: FunctionComponent<ActivityCardProps> = (
  props: ActivityCardProps
) => {
  const { activity } = props;
  return (
    <div className="flex w-full gap-2 px-8">
      <img src={activity.person.avatar} className="w-12 h-12 rounded-full" />
      <div>
        <p>
          {activity.action === "increased_quota"
            ? `${activity.person.name} increased ${activity.target}'s quota.`
            : activity.action === "added_leads"
            ? `${activity.person.name} added new leads to ${activity.target}.`
            : activity.action === "archived_team"
            ? `${activity.person.name} archived team ${activity.target}.`
            : ""}
        </p>
        <p className="text-sm text-[#565656]">{activity.created_at || ""}</p>
      </div>
    </div>
  );
};

export default ActivityCard;

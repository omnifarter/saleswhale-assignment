import { FunctionComponent } from "react";
import { Activity } from "../../pages/Teams";
import ActivityCard from "../ActivityCard";

interface ActivityContainerProps {
  activities: Activity[];
}

const ActivityContainer: FunctionComponent<ActivityContainerProps> = (
  props: ActivityContainerProps
) => {
  const { activities } = props;
  return (
    <div
      className="flex flex-col bg-white"
      style={{
        boxShadow:
          "0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="px-8 flex h-[60px] justify-between items-center">
        <p className="flex text-lg font-semibold">Activity</p>
      </div>
      <div
        style={{ borderBottom: "1px solid #EFEFEF" }}
        className="w-full h-1 mb-4"
      />
      <div className="flex gap-8 justify-between flex-col">
        {activities.map((activity: Activity) => (
          <ActivityCard activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityContainer;

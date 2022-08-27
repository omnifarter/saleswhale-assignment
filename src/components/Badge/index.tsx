import { FunctionComponent } from "react";
import { ReactComponent as NotificationLogo } from "../../assets/icon-mail.svg";

interface BadgeProps {
  notifCount?: number;
}

const Badge: FunctionComponent<BadgeProps> = (props: BadgeProps) => {
  return (
    <div className="relative mr-2">
      <NotificationLogo />
      {props.notifCount && (
        <p className="absolute -top-2 -right-2 bg-[#2995DA] rounded-full h-5 w-5 text-center text-white text-xs leading-5">
          {props.notifCount}
        </p>
      )}
    </div>
  );
};

export default Badge;

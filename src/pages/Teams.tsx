import React, { useState } from "react";
import { useEffect } from "react";
import { FunctionComponent } from "react";
import { getTeams, getActivities } from "../apis/api";
import ActivityContainer from "../components/ActivityContainer";
import Layout from "../components/Layout";
import Sidebar from "../components/Layout/Sidebar";
import Tabs from "../components/Tabs";
import TeamCardContainer from "../components/TeamCardContainer";
import TeamsHeader from "../components/TeamsHeader";

interface TeamsPageProps {}

export interface Team {
  id: number;
  name: string;
  image: string;
  description: string;
  campaigns_count: number;
  leads_count: number;
  is_favorited: boolean;
  is_archived: boolean;
  created_at?: string;
}

export interface Activity {
  id: number;
  person: {
    id: number;
    name: string;
    avatar: string;
  };
  action: string;
  target: string;
  created_at?: string;
}
const tabs = ["All", "Favorites", "Archived"];

const TeamsPage: FunctionComponent<TeamsPageProps> = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const [teams, setTeams] = useState<Team[]>([]);
  const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);

  const [search, setSearch] = useState("");

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setFilteredTeams(teams.filter((t) => t.name.includes(e.target.value)));
  };
  useEffect(() => {
    onTabClick("All");
    setActivities(getActivities());
  }, []);

  const onTabClick = (tab: string) => {
    setSelectedTab(tab);
    // simulate API call
    const fetchedTeams = getTeams(tab);
    setTeams(fetchedTeams);
    setFilteredTeams(fetchedTeams);
  };

  return (
    <>
      <Layout>
        <TeamsHeader />
        <Tabs
          tabs={tabs}
          onTabClick={onTabClick}
          selected={selectedTab}
          setSearch={onSearchChange}
        />

        <div
          className="grid bg-[#E5E5E5] w-full p-8 gap-4 h-full"
          style={{ gridTemplateColumns: "75% 25%" }}
        >
          <TeamCardContainer teams={filteredTeams} />
          <ActivityContainer activities={activities} />
        </div>
      </Layout>
    </>
  );
};

export default TeamsPage;

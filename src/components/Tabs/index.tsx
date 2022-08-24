import React, { FunctionComponent, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

interface TabsProps {
  tabs: string[];
  onTabClick(tab: string): void;
  selected: string;
  setSearch?(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Tabs: FunctionComponent<TabsProps> = (props: TabsProps) => {
  return (
    <div className="flex px-8 justify-between">
      <div className="flex gap-8 px-8 ">
        {props.tabs.map((title) => (
          <div
            key={title}
            className="flex flex-col hover:cursor-pointer"
            onClick={() => props.onTabClick(title)}
          >
            <h5
              className={`mx-4 my-4 font-semibold ${
                props.selected === title ? "text-[#0083E3]" : ""
              }`}
            >
              {title}
            </h5>
            {props.selected == title && (
              <div style={{ border: "2px solid #0083E3" }} className="w-full" />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <SearchIcon />
        <input
          placeholder="Search team name..."
          className="h-8 focus:outline-0"
          onChange={props.setSearch}
        />
      </div>
    </div>
  );
};

export default Tabs;

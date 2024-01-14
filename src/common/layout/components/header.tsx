import * as React from "react";
import Pic from "../../../assets/pic.png";
import Notify from "../../../assets/notification.svg";

const Header = () => {
  return (
    <div className="Top w-[100%] h-20  bg-white flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="Contents justify-start items-center gap-96 inline-flex w-[100%]">
        <div className="SearchBar w-96 px-3.5 py-3 bg-neutral-100 rounded-lg flex-col justify-center items-start gap-2.5 inline-flex">
          <div className="Contents justify-start items-center gap-4 inline-flex">
            <div className="Search justify-start items-center gap-1 flex">
              <div className="Rectangle2 w-0.5 h-5 bg-amber-500 rounded" />
              <div className="SearchOrType text-gray-500 text-base font-medium font-['DM Sans']">
                Search or type
              </div>
            </div>
          </div>
        </div>
        <div className="Right flex justify-start items-center gap-10 flex-row ">
          <img
            className="AttractiveKindCuteYoungManGentlySmilingDressedBeautifulDenimShirtIsolatedYellowWall w-5 h-5 "
            src={Notify}
          />
          <img
            className="PortraitHandsomeEuropeanMaleStudentHasGentleSmileFaceHappyHearPleasantNewsStandsDelightedWearsRoundSpectaclesOrangeJumper w-15 h-15 rounded-full"
            src={Pic}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

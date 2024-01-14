import React from "react";
import Car from "../../../assets/car.png";
interface Props {
  classnames: string;
}
const CarCard = ({ classnames = " bg-lime-200" }: Props): JSX.Element => {
  return (
    <div
      className={`Frame31 w-[318px] h-[236px] px-[27px] py-[15px] rounded-[14px] flex-col justify-center items-center gap-2.5 inline-flex ${classnames}`}
    >
      <div className="Contents flex-col justify-start items-start gap-[11px] flex">
        <div className="Top justify-start items-center gap-2.5 inline-flex">
          <div className="Icon w-6 h-6 relative">
            <div className="Rectangle513 w-6 h-6 left-0 top-0 absolute" />
          </div>
          <div className="Recommend text-zinc-800 text-base font-bold font-['DM Sans']">
            64% Recommend
          </div>
        </div>
        <img className="Car w-[257px] h-[106px] " src={Car} />
        <div className="Frame30 h-[54px] flex-col justify-start items-start gap-2 flex">
          <div className="MiniCooper self-stretch text-neutral-800 text-xl font-bold font-['DM Sans']">
            Mini Cooper
          </div>
          <div className="Bottom self-stretch justify-start items-center gap-[105px] inline-flex">
            <div className="Left grow shrink basis-0 h-5 justify-start items-center gap-4 flex">
              <div className="Icon w-5 h-5 relative">
                <div className="Rectangle514 w-5 h-5 left-0 top-0 absolute" />
              </div>
              <div className="K text-zinc-500 text-sm font-medium font-['DM Sans']">
                132K
              </div>
              <div className="Icon w-4 h-4 relative">
                <div className="Rectangle516 w-4 h-4 left-0 top-0 absolute" />
              </div>
              <div className="Icon w-4 h-4 relative">
                <div className="Rectangle515 w-4 h-4 left-0 top-0 absolute" />
              </div>
            </div>
            <div className="32H text-zinc-500 text-sm font-medium font-['DM Sans']">
              $32/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

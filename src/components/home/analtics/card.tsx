import React from "react";
interface Props {
  classnames: string;
  title: string;
  percantage: any;
  icon: string;
}
const Card = ({
  classnames = "bg-white",
  title,
  percantage,
  icon,
}: Props): JSX.Element => {
  const fontColor = classnames == "bg-white" ? "" : "text-white";
  return (
    <div
      className={`Card1 w-[100%]  h-[266px] px-[60px] py-5 bg-purple-500 rounded-[14px] justify-center items-center gap-2.5 inline-flex ${classnames}`}
    >
      <div className="Contents flex-col justify-start items-center gap-[30px] inline-flex">
        <div className="Tittle flex-col justify-start items-center gap-2.5 flex">
          <div className="Component1 w-[38px] h-[38px] relative">
            <div className="Ellipse22 w-[38px] h-[38px] bg-purple-500 bg-opacity-10 rounded-full" />
            <div className="IconsLightningFilled w-5 h-5 left-[9px] top-[9px] absolute flex items-center justify-center">
              <img src={icon} />
            </div>
          </div>
          <div
            className={`Energy  text-2xl font-bold font-['DM Sans'] ${fontColor}`}
          >
            {title}
          </div>
        </div>
        <div className="PieChart w-28 h-28 relative">
          <div className="Ellipse20 w-28 h-28 left-0 top-0 absolute bg-purple-400 rounded-full" />
          <div className="Ellipse19 w-28 h-28 left-0 top-0 absolute bg-white rounded-full" />
          <div
            className={`left-[30px] top-[36px] absolute  text-2xl font-bold font-['DM Sans'] ${fontColor}`}
          >
            {percantage}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

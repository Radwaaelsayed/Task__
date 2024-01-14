import React from "react";
import Layout from "../common/layout";
import Card from "../components/home/analtics/card";
import Icon1 from "../assets/energy-icon.svg";
import Icon2 from "../assets/range-icon.svg";
import Icon3 from "../assets/break-icon.svg";
import Icon4 from "../assets/tier-icon.svg";
import CarCard from "../components/home/cars/card";

const Home = () => {
  const analticsCards = [
    {
      title: "Energy",
      percantage: "45",
      classnames: "bg-purple-500",
      icon: Icon1,
    },
    {
      title: "Range",
      percantage: "157k",
      icon: Icon2,
    },
    {
      title: "Break fluid",
      percantage: "9",
      icon: Icon3,
    },
    {
      title: "EnerTire Weary",
      percantage: "25",
      icon: Icon4,
    },
  ];
  const carCards = [
    {
      classnames: "bg-lime-200",
    },
    { classnames: "bg-slate-200" },
    { classnames: "bg-red-100" },
  ];
  return (
    <Layout>
      <div className="flex flex-wrap gap-[30px] pt-[27px]">
        {analticsCards?.map((data, index) => {
          return (
            <div className="w-[22%]">
              <Card
                key={index}
                percantage={data?.percantage}
                classnames={data?.classnames}
                title={data?.title}
                icon={data?.icon}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-[30px] pt-[27px]">
        {carCards?.map((data, index) => {
          return <CarCard classnames={data?.classnames} key={index} />;
        })}
      </div>
    </Layout>
  );
};

export default Home;

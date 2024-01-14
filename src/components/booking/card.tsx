import React from "react";

const BookingCard = (): JSX.Element => {
  return (
    <div className="Frame270 w-[325px] h-[267px] p-6 bg-white rounded-2xl flex-col justify-center items-start gap-2.5 inline-flex">
      <div className="Frame269 flex-col justify-center items-center gap-[21px] flex">
        <div className="Tittle h-[49px] flex-col justify-start items-start gap-1 flex">
          <div className="Top w-[277px] justify-between items-center inline-flex">
            <div className="Porshe718CaymanS text-zinc-800 text-lg font-bold font-['DM Sans']">
              Porshe 718 Cayman S
            </div>
            <div className="Icons w-6 h-6 justify-center items-center flex">
              <div className="Love w-6 h-6 relative flex-col justify-start items-start flex">
                <div className="Rectangle550 w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="Coupe text-zinc-500 text-base font-normal font-['DM Sans']">
            Coupe
          </div>
        </div>
        <img
          className="CarAudiA3AudiA4Car3822c2bc08e2c2bce1d8ead0e70c7ddb w-[233px] h-[105px] "
          src="https://via.placeholder.com/233x105"
        />
        <div className="Bottom justify-start items-center gap-[81px] inline-flex">
          <div className="Left justify-start items-center gap-[18px] flex">
            <div className="Passenger justify-start items-center gap-1 flex">
              <div className="Icon w-5 h-5 relative">
                <div className="Rectangle518 w-5 h-5 left-0 top-0 absolute" />
              </div>
              <div className=" text-zinc-500 text-lg font-normal font-['DM Sans']">
                4
              </div>
            </div>
            <div className="Manual justify-start items-center gap-[5px] flex">
              <div className="Icon w-5 h-5 relative">
                <div className="Rectangle519 w-5 h-5 left-0 top-0 absolute" />
              </div>
              <div className="Manual text-zinc-500 text-base font-normal font-['DM Sans']">
                Manual
              </div>
            </div>
          </div>
          <div className="400D">
            <span className="text-zinc-800 text-lg font-medium font-['DM Sans']">
              $400
            </span>
            <span className="text-zinc-500 text-lg font-normal font-['DM Sans']">
              /d
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;

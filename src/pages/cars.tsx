import React from "react";
import Layout from "../common/layout";
import Search from "../components/booking/search";
import BookingCard from "../components/booking/card";
import { useFetchCarsQuery } from "../services/apis/carsApis";
import Pagination from "../components/booking/pagination";
const Cars = (): JSX.Element => {
  const { data, isLoading } = useFetchCarsQuery({});
  const cars = data?.cars;
  return (
    <Layout>
      {!isLoading ? (
        <div className="flex gap-[20px] flex-col p-[20px]">
          <div className="Booking text-zinc-800 text-3xl font-bold font-['DM Sans']">
            Booking
          </div>
          <Search />
          <div className="flex gap-[20px] flex-wrap">
            {cars?.map(() => {
              return <BookingCard />;
            })}
          </div>
          <Pagination />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};

export default Cars;

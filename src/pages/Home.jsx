import React from "react";
import SlideBanner from "./SlideBanner";
import ToyCard from "./ToyCard";
import { useToy } from "../Hook/usetoy";

const Home = () => {
  const { toys, loading, error } = useToy();

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    
    <div className="max-w-7xl mx-auto px-4">
      <title>KidsToy - Home</title>
      <SlideBanner />

      <h2 className="text-2xl font-bold mt-10 mb-5 text-center">Popular Toys</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {toys.map((singleToy) => (
          <ToyCard key={singleToy.toyId} singleToy={singleToy} />
        ))}
      </div>
    </div>
  );
};

export default Home;

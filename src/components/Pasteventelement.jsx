import React from 'react';
import { Button } from "@/components/ui/button"; // adjust the import path as needed

const Pasteventelement = ({ eventName, image }) => {
  return (
    <div className="mast p-6 bg-white text-center flex flex-col mt-10">

      <div>
        <p className="text-2xl mb-4">⛑️ {eventName} ⛑️</p>
      </div>

      <div className="mt-10 flex w-screen h-[600px] justify-center items-center">
        <img
          src={image}
          alt="Event"
          className="w-[850px] h-[500px] object-cover rounded-lg shadow-[0_0_100px_rgba(255,0,0,0.8)] transition duration-300 hover:scale-110"
        />
      </div>

    </div>
  );
};

export default Pasteventelement;

"use client";
import AnimatedHeading from "@/component/lyric";
import { useState } from "react";

export default function Home() {
  const [aboutYou, setaboutYou] = useState(false);
  return (
    <div className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden">
      {!aboutYou && (
        <div className=" w-full h-full flex items-center justify-center">
          <button
            onClick={() => setaboutYou(true)}
            type="button"
            className=" bg-black py-1 px-2 text-white rounded-md"
          >
            Click Here
          </button>
        </div>
      )}
      {aboutYou && <AnimatedHeading setaboutYou={setaboutYou} />}
    </div>
  );
}

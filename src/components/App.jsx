import { useState } from "react";
import Land from "../assets/Land.jpg";
function App() {
  return (
    <div className="h-screen bg-slate-500 opacity-100 ">
      <div className="bg-hero-Image bg-cover  p-5 h-screen flex-col justify-between items-center flex ">
        <div>
          <p className="text-white text-h3 font-bold">
            You got the travel plans, we got the travel vans.
          </p>
          <p className="text-white pt-5">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s,
          </p>
        </div>
        <button className="w-full bg-amber-600 p-3 rounded-md text-white font-bold">
          Find your van
        </button>

        <address>
          <p className="text-white">&copy;Haileliul Baye</p>
        </address>
      </div>
    </div>
  );
}

export default App;

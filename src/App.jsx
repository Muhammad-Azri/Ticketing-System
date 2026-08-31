// import { useState } from "react";

import { CalendarDays, Upload } from "lucide-react";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";


const App = () => {
  // const [name, setName] = useState("Dani");
  // const [angka, setAngka] = useState(0);
  // const [hasil, setHasil] = useState()

  // const ubahNama = () => {
  //   setName(oldName => oldName + " Musang");
  // }

  // const tambahAngka = () => {
  //   setAngka(angkaAwal => angkaAwal +1)
  // }

  // const kurangAngka = () => {
  //   setAngka(angkaAwal => angkaAwal -1)
  // }

  // const change = (e) => {
  //   setHasil(Number(e.target.value));
  // }

  // const tampilAngka = () => {
  //   setAngka(angkaAwal => angkaAwal + hasil ) 
  // }

  return (
    // <div>
    //   <h1>Hello {name}</h1>
    //   <button onClick={ubahNama}> Ubah Nama</button>
    //   <h1>{angka}</h1>
    //   <button onClick={tambahAngka}>+</button>
    //   <button onClick={kurangAngka}>-</button>
    //   <br />
    //   <input onChange={change} type="number" placeholder="Masukkan nilai tambah"></input>
    //   <button onClick={tampilAngka}>Tambah</button>
    // </div>
    // 
    <div className="flex">
      {/* SIdebar */}
      <SideBar />

      <div className="bg-mauve-100 w-full border-2 border-mauve-100">
        {/* CONTAINER TOPBAR */}
        <TopBar />
        <div>
          <div className="flex justify-between p-4 items-start">
            <div className="flex flex-col">
              <span className="text-[40px] font-semibold">Admin Dashboard</span>
              <span className="text-[16px]">Monitor your support ticket system with real-time data</span>
            </div>
            <div className="flex gap-2 items-start">
              {/* Button Date */}
              <button className="flex text-xs items-center gap-3 border border-gray-200 rounded-md px-4 py-3 bg-white text-gray-600 shadow-sm">
                {/* Icon Calendar */}
                <CalendarDays className="text-xs" />
                <span>Sept 30, 2025 - Oct 4, 2025</span>
              </button>
              {/* Button Export */}
              <button className="flex text-xs items-center gap-3 border border-gray-200 rounded-md px-4 py-3 bg-white text-gray-600 shadow-sm">
                {/* Icon Upload */}
                <Upload className="text-xs"/>
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};



export default App;
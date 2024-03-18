import { useState } from "react";
function App() {
  const [color, setColor] = useState("grey");
  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 p-4 bg-white rounded-3xl shadow-xl">
        <h1 className="text-center text-black font-mono font-extrabold text-3xl">
          Background Changer
        </h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-4">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white p-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={()=>setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={()=>setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={()=>setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "teal" }}
            onClick={()=>setColor("teal")}
          >
            Teal
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={()=>setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
            onClick={()=>setColor("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={()=>setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
            onClick={()=>setColor("violet")}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

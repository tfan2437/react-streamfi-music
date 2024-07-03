import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import { useContext } from "react";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} preload="auto"></audio>
    </div>
  );
};

export default App;

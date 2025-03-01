import { useState } from "react";
import Card from "./Card";
import CreateContentModal from "./CreateContentModal";
import Topnav from "./Topnav";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
 
  return (
    <div className="w-[80%] p-4">
      <CreateContentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <Topnav setModalOpen={setModalOpen} />
      <div className="flex gap-6">
        <Card
          type="twitter"
          link="https://x.com/Sin_Gifs/status/1888631973851414540"
          title="Sydney>>"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=8urzOH10LEM"
          title="first yt"
        />
      </div>
    </div>
  );
};

export default Hero;

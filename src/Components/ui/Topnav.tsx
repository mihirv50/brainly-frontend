import PlusIcon from "../../icons/PlusIcon";
import ShareIcon from "../../icons/ShareIcon";
import Button from "./Button";

const Topnav = () => {
  return (
    <div className="w-full h-[10%] mb-4 flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold pl-4">All Notes</h1>
      <div className="flex gap-5 pr-2">
        <Button
          text="Share Brain"
          startIcon={<ShareIcon size="md" />}
          variant="secondary"
          size="md"
        />
        <Button
          text="Add Content"
          startIcon={<PlusIcon size="md" />}
          variant="primary"
          size="md"
        />
      </div>
    </div>
    
  );
};

export default Topnav;

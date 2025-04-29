import CancelIcon from "../../icons/CancelIcon";
import Input from "./Input";
import Button from "./Button";

interface IModal{
  onClose: ()=>void,
  open: boolean
}

const CreateContentModal = ({ open, onClose }: IModal) => {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-70 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white p-4 rounded opacity-100">
              <div className="flex justify-end flex-col">
                <div onClick={onClose} className="cursor-pointer">
                  <CancelIcon />
                </div>
                <div className="flex flex-col">
                  <Input placehloder={"Title"} />
                  <Input placehloder={"Link"} />
                </div>
                <div className="flex justify-center">
                  <Button variant="primary" text="Submit" size="md" />
                </div>
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateContentModal;

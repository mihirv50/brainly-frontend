import CancelIcon from "../../icons/CancelIcon";
import Input from "./Input";
import Button from "./Button";
import { useRef, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

interface IModal {
  onClose: () => void;
  open: boolean;
}
enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}
const CreateContentModal = ({ open, onClose }: IModal) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);
  const addContent = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const content = await axios.post(`${BACKEND_URL}/api/V1/content`, {
      title,
      link,
      type
    },{
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    });
  };
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
                  <Input ref={titleRef} placehloder={"Title"} />
                  <Input ref={linkRef} placehloder={"Link"} />
                </div>
                <div>
                  <h1>Type</h1>
                  <div className="flex gap-2 p-4">
                    <Button
                      size="md"
                      onClick={() => {
                        setType(ContentType.Youtube);
                      }}
                      text="Youtube"
                      variant={
                        type === ContentType.Youtube ? "primary" : "secondary"
                      }
                    />
                    <Button
                      size="sm"
                      onClick={() => {
                        setType(ContentType.Twitter);
                      }}
                      text="Twitter"
                      variant={
                        type === ContentType.Twitter ? "primary" : "secondary"
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button
                    onClick={addContent}
                    variant="primary"
                    text="Submit"
                    size="md"
                  />
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

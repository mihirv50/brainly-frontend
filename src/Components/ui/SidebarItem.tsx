// interface SideBarProps {
//   name: string;
//   icon?: ReactElement;
// }

import DocIcon from "../../icons/DocIcon";
import HashIcon from "../../icons/HashIcon";
import LinkIcons from "../../icons/LinkIcons";
import MediaIcon from "../../icons/MediaIcon";
import TwitterIcon from "../../icons/TwitterIcon";

const sidebaritems = [
  { name: "Tweets", icon: <TwitterIcon /> },
  { name: "Videos", icon: <MediaIcon /> },
  { name: "Document", icon: <DocIcon /> },
  { name: "Links", icon: <LinkIcons /> },
  { name: "Tags", icon: <HashIcon /> },
];
const SidebarItem = () => {
  return (
    <div className="flex gap-2 flex-col p-5">
      {sidebaritems.map((s, i) => (
        <div className="flex transition-all font-bold items-center gap-5 text-xl cursor-pointer hover:bg-gray-200 duration-300 rounded p-3 text-[#555B64]" key={i}>
          {s.icon} {s.name}
        </div>
      ))}
    </div>
  );
};

export default SidebarItem;

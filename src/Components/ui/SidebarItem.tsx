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
    <div className="flex gap-6 flex-col p-5">
      {sidebaritems.map((s, i) => (
        <div className="flex items-center gap-5 text-[#555B64]" key={i}>
          {s.icon} {s.name}
        </div>
      ))}
    </div>
  );
};

export default SidebarItem;

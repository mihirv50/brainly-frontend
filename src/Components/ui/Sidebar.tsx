import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-full bg-[#ffff] p-4">
      <div className="flex items-center">
        <img src="/brain.png" alt="" />
        <h1 className=" font-semibold text-xl">Second Brain</h1>
      </div>
      <SidebarItem />
    </div>
  );
};

export default Sidebar;

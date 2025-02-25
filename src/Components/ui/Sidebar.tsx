import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="w-72 h-full bg-[#ffff] p-4 border-r border-zinc-200">
      <div className="flex items-center">
        <img src="/brain.png" alt="" />
        <h1 className=" font-semibold text-xl">Second Brain</h1>
      </div>
      <SidebarItem />
    </div>
  );
};

export default Sidebar;

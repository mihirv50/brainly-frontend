import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="w-72 h-full bg-[#ffff] p-4 border-r border-zinc-200 shadow-2xl mr-16">
      <div className="flex items-center">
        <img src="/brain.png" alt="" />
        <h1 className=" font-extrabold text-2xl text-zinc-800">Second Brain</h1>
      </div>
      <SidebarItem />
    </div>
  );
};

export default Sidebar;

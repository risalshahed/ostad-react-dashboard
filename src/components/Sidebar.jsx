import { NavLink } from "react-router-dom";

export default function Sidebar() {

  return (
    <div
        className='min-h-screen border-r min-w-[15%]'
    >
        <h2 className="text-xl font-bold mb-6">
            Dashboard
        </h2>

        <nav className="flex flex-col gap-2">
            <NavLink to="/overview" className={ ({ isActive })  =>
                isActive ? "p-2 text-blue-700" : "p-2 hover:text-blue-500 hover:border hover:border-cyan-500 hover:rounded-lg"}>
                Overview
            </NavLink>
            <NavLink to="/users" className={({ isActive }) =>
                isActive ? "p-2 text-blue-700" : "p-2 hover:text-blue-500 hover:border hover:border-cyan-500 hover:rounded-lg"}>
                Users
            </NavLink>
            <NavLink to="/recharts" className={({ isActive }) =>
                isActive ? "p-2 text-blue-700" : "p-2 hover:text-blue-500 hover:border hover:border-cyan-500 hover:rounded-lg"}>
                Recharts
            </NavLink>
        </nav>
    </div>
    );
}
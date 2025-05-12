import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Sidebar from "@/features/Sidebar/Sidebar";
import { useAuthStore } from "@/store/useAuthStore";
import { useThemeStore } from "@/store/useThemeStore";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

const DashboardLayout = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { logout } = useAuthStore();
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ">
        <header className="bg-green-50 dark:bg-primary-dark border-b p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* <h1 className="text-xl font-semibold">D</h1> */}

            <Input className="w-[200px] border-black" placeholder="Search" />
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <IoSunny className="h-5 w-5" />
              ) : (
                <IoMoon className="h-5 w-5" />
              )}
            </Button>

            {/* User profile/avatar can go here */}
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600"></div>
              <Button onClick={logout}>
                <MdOutlineLogout />
                Logout
              </Button>
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

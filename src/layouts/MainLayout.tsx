import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { TopAppBar } from "@/components/TopAppBar";
import { BottomNav } from "@/components/BottomNav";
//import MainLayoutPortraitWarning from "../components/MainLayoutComponents/MainLayoutPortraitWarning";

// import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  useEffect(() => {
    // if online
    if (navigator.onLine) {
      if (!localStorage.getItem("lastWebsiteGet")) {
        localStorage.setItem("lastWebsiteGet", new Date().getTime());
        location.reload();
      }
      // reloading to get website recached if there is a new update of the website
      if (new Date().getTime() - localStorage.getItem("lastWebsiteGet") >= 10000) {
        localStorage.setItem("lastWebsiteGet", new Date().getTime());
        location.reload();
      }
    }
  }, []);
  return (
    <div className="flex bg-background h-screen w-screen flex-col justify-center items-center">
      {/* <ToastContainer />
      <MainLayoutPortraitWarning /> */}
        <TopAppBar />
        <Outlet />
        <BottomNav />
    </div>
  );
};

export default MainLayout;

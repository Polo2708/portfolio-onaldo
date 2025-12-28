import { useState } from "react";

export const useSidebarController = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const showSidebar = () => {
    console.log("Open sidebar", openSidebar);
    setOpenSidebar((prev) => !prev);
  };

  return {
    showSidebar,
    openSidebar,
  };
};

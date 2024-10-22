import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const useActiveTab = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const tabName = pathSegments[1];
    setActiveTab(tabName);
  }, [location]);

  return activeTab;
};

export default useActiveTab;

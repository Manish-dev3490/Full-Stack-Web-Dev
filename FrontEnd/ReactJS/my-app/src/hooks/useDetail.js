import { useEffect, useState } from "react";
import { menuApi } from "../utils/constData";

const useDetail = (id) => {
  const [resInfo, setresInfo] = useState(undefined);
  useEffect(() => {
    fetchmenu();
  }, []);

  const fetchmenu = async () => {
    const data = await fetch(menuApi + id);
    const json = await data.json();
    setresInfo(json);
  };

  return resInfo;
};
export default useDetail;

import { useEffect, useState } from "react";

const useMenu = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return [data];
};

export default useMenu;

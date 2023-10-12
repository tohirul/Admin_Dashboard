import { useEffect, useState } from "react";

const useTopDealUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("topDealUsers.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return [data];
};

export default useTopDealUsers;

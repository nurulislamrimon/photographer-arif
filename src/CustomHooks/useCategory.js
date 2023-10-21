import { useEffect } from "react";
import { useState } from "react";
import { apiUrl } from "../Utilities/apiUrl";

const useCategory = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${apiUrl}/category`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
    setLoading(false);
  }, []);
  return [category, loading];
};

export default useCategory;

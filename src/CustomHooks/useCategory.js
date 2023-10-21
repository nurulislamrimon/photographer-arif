import { useEffect } from "react";
import { useState } from "react";
import { apiUrl } from "../Utilities/apiUrl";

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${apiUrl}/category`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
    setLoading(false);
  }, []);
  return { categories, loading };
};

export default useCategory;

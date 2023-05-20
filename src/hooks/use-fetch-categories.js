import { useCallback, useEffect, useState } from "react";

export const useFetchCategories = () => {
  const categoryUrl =
    "https://646312614dca1a661353d0ee.mockapi.io/api/Category";

  const [categoryData, setCategoryData] = useState([]);

  const fetchCategories = useCallback(async () => {
    const response = await fetch(categoryUrl);
    const data = await response.json();
    setCategoryData(data);
  }, [categoryUrl]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return categoryData;
};

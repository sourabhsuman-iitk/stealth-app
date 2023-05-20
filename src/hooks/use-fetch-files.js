import { useCallback, useEffect, useState } from "react";

export const useFetchFiles = () => {
  const filesUrl = "https://646312614dca1a661353d0ee.mockapi.io/api/Files";

  const [filesData, setFilesData] = useState([]);

  const fetchFiles = useCallback(async () => {
    const response = await fetch(filesUrl);
    const data = await response.json();
    setFilesData(data);
  }, [filesUrl]);

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  return filesData;
};

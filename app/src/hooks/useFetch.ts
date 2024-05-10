import { useEffect, useState } from "react";

export const useFetch = (url: string, options?: RequestInit) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url, options)
        .then((res) => res.json())
        .then((json) => setData(json))
        .finally(() => setIsLoading(false))
        .catch((err) => setError(err));
    };

    if (!url) throw new Error("Url is required!");

    fetchData();
  }, [options, url]);

  return { isLoading, data, error };
};

import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../Utilities/apiUrl";

const usePhotos = (album, limit) => {
  const { isLoading, error, data, refetch } = useQuery([album, limit], () =>
    fetch(`${apiUrl}/photos?limit=${limit}&album=${album}`).then((res) =>
      res.json()
    )
  );
  return { data, isLoading, refetch, error };
};

export default usePhotos;

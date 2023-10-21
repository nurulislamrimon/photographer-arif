import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../Utilities/apiUrl";
import { useEffect, useState } from "react";

const useCarousel = () => {
  const { isLoading, error, data, refetch } = useQuery(["repoData"], () =>
    fetch(`${apiUrl}/carousels`).then((res) => res.json())
  );

  return { data, isLoading, error, refetch };
};

export default useCarousel;

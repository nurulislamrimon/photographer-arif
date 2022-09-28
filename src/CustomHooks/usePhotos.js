import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const usePhotos = () => {
    const [photos, setPhotos] = useState([]);

    const { isLoading, error, data, refetch } = useQuery(['repoData'], () =>
        fetch('http://localhost:5000/photos').then(res =>
            res.json()
        )
    )

    return [data, isLoading, refetch, error]
};

export default usePhotos;
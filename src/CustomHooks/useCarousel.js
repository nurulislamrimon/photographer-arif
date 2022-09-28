import { useQuery } from "@tanstack/react-query";

const usePhotos = () => {
    const { isLoading, error, data, refetch } = useQuery(['repoData'], () =>
        fetch('http://localhost:5000/carousels').then(res =>
            res.json()
        )
    )

    return [data, isLoading, refetch, error]
};

export default usePhotos;
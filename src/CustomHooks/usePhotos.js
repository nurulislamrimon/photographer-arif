import { useQuery } from "@tanstack/react-query";

const usePhotos = (album, limit) => {
    const { isLoading, error, data, refetch } = useQuery([album, limit], () =>
        fetch(`http://localhost:5000/photos?limit=${limit}&album=${album}`)
            .then(res =>
                res.json()
            )
    )
    return [data, isLoading, refetch, error]
};

export default usePhotos;
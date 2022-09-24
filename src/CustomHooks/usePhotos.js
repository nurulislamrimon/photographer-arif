import { useEffect, useState } from "react";

const usePhotos = () => {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch('test.json')
            .then(res => res.json())
            .then(data => setPhotos(data))
        setLoading(false)
    }, [])
    return { loading, setLoading, photos, setPhotos }
};

export default usePhotos;
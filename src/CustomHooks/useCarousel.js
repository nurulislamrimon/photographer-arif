import { useEffect, useState } from "react";

const useCarousel = () => {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/carousel')
            .then(res => res.json())
            .then(data => setPhotos(data))
        setLoading(false)
    }, [])
    return { loading, setLoading, photos, setPhotos }
};

export default useCarousel;
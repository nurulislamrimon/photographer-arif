import React, { useEffect } from 'react';
import { useState } from 'react';

const useSmallDevice = () => {
    const [smallDevice, setSmallDevice] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 680) {
                setSmallDevice(true);
            } else {
                setSmallDevice(false)
            }
        })
    }, [])
    return [smallDevice, setSmallDevice];
};

export default useSmallDevice;
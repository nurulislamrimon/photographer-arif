import React from 'react';
import { toast } from 'react-toastify';

const useAddNewItem = () => {
    const addNewItem = async (data, fetchTo) => {
        await fetch(`http://localhost:5000/${fetchTo}`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ data })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged)
                    toast.success('New item Added')
            })
    }
    return addNewItem;
};

export default useAddNewItem;
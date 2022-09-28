import React from 'react';
import { useState } from 'react';
import usePhotos from '../../../CustomHooks/usePhotos';
import DrawerBtn from '../DrawerBtn';
import AddNewItem from '../../../Utilities/Modals/AddNewItem';
import PhotoTable from './PhotoTable';

const ManagePhotos = () => {
    const [photos, loading, refetch, error] = usePhotos('', 0);
    const [addNewPhoto, setAddNewPhoto] = useState(false);
    return (
        <div className='relative min-h-screen p-5'>
            <label onClick={() => setAddNewPhoto(true)} htmlFor="AddNewPhoto" className="btn btn-xs lg:btn-sm absolute top-7 lg:top-10 right-5 text-success">Add New Photo</label>
            {/* small size hamburger */}
            <DrawerBtn />
            <h2 className="font-bold text-transparent text-xl lg:text-5xl bg-clip-text bg-gradient-to-tr from-red-600 to-blue-600 pb-5 text-center select-none">Manage Photos</h2>
            <PhotoTable items={photos} loading={loading} refetch={refetch} error={error} />
            {addNewPhoto && <AddNewItem refetch={refetch} setAddNewItem={setAddNewPhoto} fetchTo='photo' />}
        </div>
    );
};

export default ManagePhotos;
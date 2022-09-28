import React, { useState } from 'react';
import useSmallDevice from "../../../CustomHooks/useSmallDevice"
import ConfirmDelete from "../../../Utilities/Modals/ConfirmDelete";
import EditItemModal from "../../../Utilities/Modals/EditItemModal";
import Spinner from '../../../Utilities/Spinner';

const CarouselTable = ({ items, loading, refetch, error }) => {
    const [smallDevice, setSmallDevice] = useSmallDevice();
    const [deleteCarousel, setDeleteCarousel] = useState(null);
    const [editCarousel, setEditCarousel] = useState(null);

    if (loading) {
        return <Spinner />
    }
    return (
        <section>
            <table className="text-white overflow-x-scroll min-w-full">
                <thead className='border-t border-neutral'>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Tag</th>
                        <th>Album</th>
                        <th>About</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='border-t border-neutral'>
                    {items?.map((item, index) =>
                        <tr key={index} className='border-b border-neutral'>
                            <td>
                                <img src={item?.picture} alt="img" className='h-8 lg:h-16 w-14 lg:w-16 mx-auto my-2 lg:rounded-xl' />
                            </td>
                            <td className='text-center text-sm' title={item?.name}>
                                {smallDevice && item?.name?.length > 10 ? item?.name.slice(0, 10).concat('...') : !smallDevice && item?.name?.length > 20 ? item?.name.slice(0, 20).concat('...') : item?.name}
                            </td>
                            <td className='text-center' title={item?.tag}>
                                {smallDevice && item?.tag?.length > 10 ? item?.tag.slice(0, 10).concat('...') : !smallDevice && item?.tag?.length > 20 ? item?.tag.slice(0, 20).concat('...') : item?.tag}
                            </td>
                            <td className='text-center'>
                                <div>{item?.album}</div>
                            </td>
                            <td className='text-center' title={item?.about}>
                                <div className="text-sm opacity-50">{smallDevice && item?.about?.length > 10 ? item?.about.slice(0, 10).concat('...') : !smallDevice && item?.about?.length > 20 ? item?.about.slice(0, 20).concat('...') : item?.about}</div>
                            </td>
                            <td>
                                <div className="flex">

                                    <label onClick={() => setEditCarousel(item)} htmlFor="editItemModal" className='text-center mr-5 hover:text-success cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    </label>

                                    <label htmlFor="DeletePhotoModal" onClick={() => setDeleteCarousel(item)} className='text-center hover:text-red-700 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                    </label>
                                </div>
                            </td>
                        </tr>)}
                </tbody>
            </table>
            {deleteCarousel && <ConfirmDelete deleteItem={deleteCarousel} refetch={refetch} setDeleteItem={setDeleteCarousel} fetchTo='carousel' />}
            {editCarousel && <EditItemModal editItem={editCarousel} refetch={refetch} setEditItem={setEditCarousel} fetchTo='carousel' />}
        </section>
    );
};

export default CarouselTable;
import React from "react";
import { toast } from "react-toastify";
import { apiUrl } from "../Utilities/apiUrl";

const useEditSubmit = () => {
  const submitData = async (newData, fetchTo) => {
    const { _id, ...rest } = newData;
    await fetch(`${apiUrl}/${fetchTo}/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...rest }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          toast.success("Item updated");
        }
      });
  };
  return submitData;
};

export default useEditSubmit;

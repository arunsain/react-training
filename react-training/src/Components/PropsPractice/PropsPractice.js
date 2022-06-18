import React, { useEffect, useState } from "react";
import CommonPageBar from "../CommonPageBar";
import EdiFormPage from "./EdiFormPage";
import InsertFormPage from "./InsertFormPage";
import "./propsPractice.css";
import ShowDataInTable from "./ShowDataInTable";

const PropsPractice = () => {
  const getLocalStorage = () => {
    const list = localStorage.getItem("setDataInStorage");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  const getLastStorageValue = () => {
    const list = localStorage.getItem("setDataInStorage");
    if (list) {
      let count = JSON.parse(list);
      return count.id + 1;
    } else {
      return 1;
    }
  };

  getLocalStorage();
  const [fetchFormval, setFetchFormVal] = useState(getLocalStorage());
  const [showEditForm, setShowEditForm] = useState(false);
  const [showEditData, setShowEditData] = useState("");

  const concatFormData = (formval) => {
    const fff = {
      ...formval,
      id: fetchFormval.length == 0 ? 1 : fetchFormval.length + 1,
    };
    setFetchFormVal(fetchFormval.concat(fff));
  };

  const handleDeleteRequest = (data) => {
    const deleteData = fetchFormval.filter((filterData) => {
      return filterData.id !== data;
    });

    setFetchFormVal(deleteData);
  };
  const handleEditRequest = (data) => {
    const editData = fetchFormval.filter((filterData) => {
      return filterData.id === data;
    });
    setShowEditForm(true);
    setShowEditData(editData[0]);
  };

  const handleUpdateRequest = (data) => {
    const r = fetchFormval.map((curElemss) => {
      if (curElemss.id === data.id) {
        return {
          ...curElemss,
          email: data.email,
          name: data.name,
          address: data.address,
          city: data.city,
          state: data.state,
        };
      }
      return curElemss;
    });

    setFetchFormVal(r);
    setShowEditForm(false);
  };

  useEffect(() => {
    localStorage.setItem("setDataInStorage", JSON.stringify(fetchFormval));
  }, [fetchFormval]);

  return (
    <CommonPageBar margineTopValue={5}>
      {!showEditForm && <InsertFormPage concatFormData={concatFormData} />}

      {!showEditForm && (
        <ShowDataInTable
          getAllFormData={fetchFormval}
          handleDeleteRequest={handleDeleteRequest}
          handleEditRequest={handleEditRequest}
        />
      )}
      {showEditForm && (
        <EdiFormPage
          showEditData={showEditData}
          handleUpdateRequest={handleUpdateRequest}
        />
      )}
    </CommonPageBar>
  );
};

export default PropsPractice;

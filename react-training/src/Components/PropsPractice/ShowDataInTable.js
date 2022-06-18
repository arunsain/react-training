import React, { useEffect } from "react";

const ShowDataInTable = (props) => {
  const { handleEditRequest, handleDeleteRequest, getAllFormData } = props;

  return (
    <div className="container mt-5">
      <table
        className="table"
        style={{ border: "2px solid  rgb(196, 248, 203)" }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Action</th>
          </tr>
          {getAllFormData &&
            getAllFormData.map((element, index) => {
              return (
                <tr key={index}>
                  <td scope="col">{element.id}</td>
                  <td scope="col">{element.name}</td>
                  <td scope="col">{element.email}</td>
                  <td scope="col">{element.address}</td>
                  <td scope="col">{element.city}</td>
                  <td scope="col">{element.state}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        handleEditRequest(element.id);
                      }}
                      className="btn btn-primary btn-sm mx-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        handleDeleteRequest(element.id);
                      }}
                      type="button"
                      className="btn btn-primary btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default ShowDataInTable;

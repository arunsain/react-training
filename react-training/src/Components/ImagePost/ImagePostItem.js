import React from "react";

const ImagePostItem = (props) => {
  const { title, test, body } = props.combinePostData;

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            test !== undefined
              ? test.thumbnailUrl
              : process.env.PUBLIC_URL + "Fidget-spinner.gif"
          }
          className="card-img-top"
          alt="adad"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <a
            href={test !== undefined ? test.url : ""}
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default ImagePostItem;

import React from "react";

const DataCardItem = (props) => {
  const { title, thumbnailUrl, url } = props.showData;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={thumbnailUrl} className="card-img-top" alt={thumbnailUrl} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a target="_blank" href={url} className="btn btn-primary">
            View Image
          </a>
        </div>
      </div>
    </div>
  );
};

export default DataCardItem;

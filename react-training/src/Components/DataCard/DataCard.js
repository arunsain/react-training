import React, { useEffect, useState } from "react";

import CommonPageBar from "../CommonPageBar";

import DataCardItem from "./DataCardItem";

import LoaderImage from "./LoaderImage";
const DataCard = () => {
  const [apiDatas, setApiDatas] = useState([]);
  const [loaderImg, setLoaderImg] = useState(false);

  const getData = async () => {
    setLoaderImg(true);
    let url = "https://jsonplaceholder.typicode.com/photos?_limit=50";
    //setPage(page+1);
    let data = await fetch(url);
    let parseData = await data.json();

    setApiDatas(parseData);
    setLoaderImg(false);
    //console.log(apiDatas)
  };

  useEffect(() => {
    getData();
    //console.log(loaderImg)
  }, []);

  return (
    <CommonPageBar margineTopValue={5}>
      {loaderImg && <LoaderImage />}
      <div className="row">
        {apiDatas.map((element, index) => {
          return (
            <div className="col-4 mt-2" key={index}>
              <DataCardItem showData={element} />
            </div>
          );
        })}
      </div>
    </CommonPageBar>
  );
};

export default DataCard;

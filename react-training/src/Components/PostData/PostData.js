import React, { useEffect, useState } from "react";
import LoaderImage from "../DataCard/LoaderImage";
import CommonPageBar from "../CommonPageBar";
import PostDataItem from "./PostDataItem";

const PostData = () => {
  const [apiDatas, setApiDatas] = useState([]);
  const [loaderImg, setLoaderImg] = useState(false);

  const getData = async () => {
    setLoaderImg(true);
    let url = "https://jsonplaceholder.typicode.com/posts?_limit=50";

    let data = await fetch(url);
    let parseData = await data.json();

    setApiDatas(parseData);
    setLoaderImg(false);
  };

  useEffect(() => {
    getData();
    console.log(loaderImg);
  }, []);

  return (
    <CommonPageBar margineTopValue={5}>
      {loaderImg && <LoaderImage />}
      <div className="row">
        {apiDatas.map((element, index) => {
          return (
            <div className="col-4 mt-2" key={index}>
              <PostDataItem showData={element} />
            </div>
          );
        })}
      </div>
    </CommonPageBar>
  );
};

export default PostData;

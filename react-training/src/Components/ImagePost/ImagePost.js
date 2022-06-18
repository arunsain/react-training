import React, { useEffect, useState } from "react";
import CommonPageBar from "../CommonPageBar";

import ImagePostItem from "./ImagePostItem";

const ImagePost = () => {
  const [postApi, setPostApi] = useState([]);
  const [imageApi, setImageApi] = useState([]);

  const getPostApi = async () => {
    let url = "https://jsonplaceholder.typicode.com/posts?_limit=50";

    let data = await fetch(url);
    let parseData = await data.json();

    setPostApi(parseData);
  };

  const getImageApi = async () => {
    let url = "https://jsonplaceholder.typicode.com/photos?_limit=50";
    //setPage(page+1);
    let data = await fetch(url);
    let parseData = await data.json();

    setImageApi(parseData);
  };

  useEffect(() => {
    getPostApi();
    getImageApi();
  }, []);

  return (
    <CommonPageBar margineTopValue={5}>
      <div className="row">
        {postApi.map((element, index) => {
          const combinePost = imageApi.filter((filterImage) => {
            if (filterImage.id === element.id) {
              return (element.test = filterImage);
            }
          });
          return (
            <div className="col-4" key={index}>
              {console.log(element)}
              <ImagePostItem combinePostData={element} />
            </div>
          );
        })}
      </div>
    </CommonPageBar>
  );
};

export default ImagePost;

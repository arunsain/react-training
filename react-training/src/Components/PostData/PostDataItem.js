import React from 'react'

const PostDataItem = (props) => {
  const {title,body} = props.showData;
  return (
    <div>

<div className="card" style={{ width: "18rem" }}>
 
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{body}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default PostDataItem
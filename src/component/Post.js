import React from "react";
import {Link} from 'react-router-dom';
const Post = ()=>{
    return(
        <>
        <div className="panel panel-warning">
        <div className="panel-heading">Post</div>
        <div className="panel-body">
          Post is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <h1>Javascript</h1>
        <Link to="/post/Javascript?page=1" className="btn btn-primary">Know More</Link>
        <h1>React</h1>
        <Link to="/post/React?page=2" className="btn btn-danger">Know More</Link>
        <h1>Node</h1>
        <Link to="/post/Node?page=3" className="btn btn-success">Know More</Link>
      </div>
        </>
    )
}
export default Post;
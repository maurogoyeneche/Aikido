import React from "react";
import "../components/styles/styleNewsGrid.css";

function NewsGrid({ Post, posts }) {
  return (
    <>
      <div className="container">
        <div className="row">
          {posts && (
            <>
              {posts.map((post) => (
                <Post post={post} key={post.id} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default NewsGrid;

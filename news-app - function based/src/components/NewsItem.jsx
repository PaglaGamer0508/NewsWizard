import React from "react";

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, date, author } = props;
  return (
    <div className="my-2">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
        <p className="m-2 card-text"><small className="text-muted text-success">By <cite className="text-danger">{author ? author : "unknown"}</cite> on {date}</small></p>
      </div>
    </div>
  );
}

export default NewsItem;

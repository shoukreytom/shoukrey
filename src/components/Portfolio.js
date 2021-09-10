import React from "react";

function Portfolio(props) {
  return (
    <div className="col-md-9 m-4 card shadow-sm" style={{ width: "18rem" }}>
      <img src={ props.portfolio.image } className="card-img-top pt-2 h-75" alt={ props.portfolio.title } />
      <div className="card-body">
        <h5 className="card-title">
          <a className="card-link" href={"/work/" + props.portfolio.id }>
            { props.portfolio.title }
          </a>
        </h5>
        <p className="card-text">
          { props.portfolio.description }
        </p>
      </div>
    </div>
  );
}

export default Portfolio;

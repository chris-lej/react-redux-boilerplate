import React from "react";
import { connect } from "react-redux";

import Form from "./Form";

const mapStateToProps = (state) => ({
  articles: state.articles
});

const List = ({ articles }) => (
  <div className="col d-flex">
    <Form />
    <div className="col">
      <div className="row">
        <h3>Articles</h3>
      </div>

      <div className="row">
        <ul>
          {articles.length
            ? articles.map((el, i) =>{ console.log(i)
              return (
              <li key={i}>{el.title}</li>
            )})
            : <li key="no-article">No articles yet!</li>
          }
          {}
        </ul>
      </div>
    </div>
  </div>
);

export default connect(mapStateToProps)(List);

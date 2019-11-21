import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const mapStateToProps = (state) => ({
  articles: state.remoteArticles.slice(0, 10)
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData())
})

export class Post extends Component {
  componentDidMount = () => {
    this.props.getData();
  }
  render = () => (
    <div className="col">
      <div className="row">
        <h3>API posts</h3>
      </div>

      <div className="row">
        <ul>
          {this.props.articles.map(el => (
            <li className="list-group-item" key={el.id}>
              {el.title}
            </li>
          ))}
        </ul>
      </div>
    </div>

    );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

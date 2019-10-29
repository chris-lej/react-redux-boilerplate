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
    console.log(this.props.getData())
    this.props.getData();
  }
  render = () => (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

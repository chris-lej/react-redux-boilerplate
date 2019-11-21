import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from 'reactstrap';
import { addArticle } from "../../actions/index";

const mapDispatchToProps = (dispatch) => ({
  addArticle: article => dispatch(addArticle(article))
});

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    this.props.addArticle({ title });
    this.setState({ title: "" });
  }

  render = () => {
    const { title } = this.state;
    return (
      <div className="col">
        <div className="row">
          <h3>Add a new article</h3>
        </div>

        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={this.handleChange}
              />
            </div>
            <Button type="submit">SAVE</Button>
          </form>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Form);

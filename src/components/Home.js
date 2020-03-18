import React from "react";
import {
  connect
} from "react-redux";
import {
  getData,
  postData
} from "../actions";
import Selectors from "../selectors";
import {
  Button,
  Jumbotron
} from "reactstrap"
import MapBox from "./Map"

const mapStateToProps = (state) => ({
  apiData: Selectors.apiDataTree(state),
  apiDataExists: Selectors.apiDataExists(state),
  formattedDataExists: Selectors.formattedDataExists(state),
  formattedData: Selectors.formattedDataTree(state)
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
  postData: (dataToPost) => dispatch(postData(dataToPost))
});

export class Home extends React.Component {
  render = () => {
    const showApiData = () => !this.props.apiDataExists
      ? 'No data yet! Make the call'
      : JSON.stringify({...this.props.apiData}, null, 2)

    return (
      <div className="container text-center">
        <h3>API Request Result</h3>

        <div className="row">
          <div className="col-2">
            <Button outline color="primary" onClick={this.props.getData}>Make API GET call</Button>
          </div>

          <div className="col-10">
            <Jumbotron className="p-0 text-left">
              <div className="p-2">
                <p className="m-0">API Original Raw Data (JSON format)</p>
                <hr className="my-2" />
                <pre>
                {showApiData()}
              </pre>
              </div>
            </Jumbotron>
          </div>
        </div>
      </div>

    );}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

import React from "react";
import {
  connect
} from "react-redux";
import {
  getData
} from "../../actions";
import Selectors from "../../selectors";
import {
  Button
} from "reactstrap"
import WorldMap from "../WorldMap"
import SearchBar from "../SearchBar";

const mapStateToProps = (state) => ({
  apiData: Selectors.apiDataTree(state),
  apiDataExists: Selectors.apiDataExists(state),
  formattedDataExists: Selectors.formattedDataExists(state),
  formattedData: Selectors.formattedDataTree(state)
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData())
});

export class HomeView extends React.Component {
  render = () => {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-2">
            <Button outline color="primary" onClick={this.props.getData}>Make API GET call</Button>
          </div>
          <div className="col-10">
            <SearchBar />
            <WorldMap />
          </div>
        </div>
      </div>

    );}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);

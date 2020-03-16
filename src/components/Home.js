import React from "react";
import moment from 'moment';
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
  postPayload = () => {
    // Build new array with all the countries
    const countries = [...new Set(this.props.apiData.map(atendee => atendee.country))]

    // Final payload to be submitted
    const finalPayload = {
      countries: []
    }

    //Build a model for each country that will need to be part of the finalPayload
    for (let i = 0; i < countries.length; i++) {
      // Get all the partners from the country
      const countryPartners = this.props.apiData.filter(partner => partner.country === countries[i])
      // Get all the dates of available partners from the current country
      const countryPartnersDates = countryPartners.map(partner => partner.availableDates)

      // Here I am defining an datesObj that will keep count of how many times each date is the first available date of 2 in a row.
      // Seems like my logic in here is where I am missing something. I would love some feedback to better understand the requirement.
      const datesObj = {}
      // Loop over each array of dates available
      countryPartnersDates.forEach(datesArr => {
        for(let i = 0; i < datesArr.length; i++) {
            let currentDate = moment(datesArr[i].split('-'))
            let nextDate = moment(datesArr[i + 1] ? datesArr[i + 1].split('-') : undefined)
            // If the difference between the next date and the current date is 1 it means that the current date
            // is an availability according to the need to be 2 days in a row. In that case push that date to the datesObj
            if(nextDate.diff(currentDate, 'days') === 1 ) {
              datesObj[datesArr[i]] ? datesObj[datesArr[i]]++ : datesObj[datesArr[i]] = 1
            }

        }
      })

      // Sort the datesObj by turning it into an array, and afterwards rebuilding the object.
      let sortable = [];
      for (let date in datesObj) (
        sortable.push([date, datesObj[date]])
      )
      sortable.sort((a, b) => {
        return b[1] - a[1];
      });
      let datesSorted = {};
      sortable.forEach((date) => datesSorted[date[0]]=date[1])

      // Reduce the datesSorted object to get the final start date for the country at hand.
      const startDate = Object.keys(datesSorted).reduce((m, k) =>
      {
        return datesSorted[k] > m ? k : m
      }, Infinity);

      // countryModel to be pushed to the finalPayload
      const countryModel = {
        name: countries[i],
        attendeeCount: countryPartners.length,
        attendees: countryPartners.map(partner => partner.email),
        startDate: startDate || null
      }
      finalPayload.countries.push(countryModel)
    }

    this.props.postData(finalPayload)
  }

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
            <Button outline color="primary" disabled={!this.props.apiDataExists} onClick={this.postPayload} className="mt-3">Make API Post call</Button>
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

import React, { Component } from 'react';
import './mbtaWidget.css';

class MbtaWidget extends Component {


  constructor(props) {
    super(props);

    this.state = {
      nextTrain: 0,
      deltaSchedule: 0
    };

    //TODO Remove these keys from the code, move to config file or something
    this.apiKey = 'SX7PbCIK40OEiB8Lein2mg';
    this.location = 'place-alfcl';
    this.routesUrl = `http://realtime.mbta.com/developer/api/v2/routes?api_key=${this.apiKey}`;
    this.predictionUrl = `http://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=${this.apiKey}&stop=${this.location}&format=json`;

  }

  componentWillMount() {
    // console.log("myHeader(), componentWillmount()");
  }


  componentDidMount() {
    return this.getTScheule();
  }

  getTScheule() {
    // This mapper needs a lot of work for checking of times, direction, etc.
    fetch(this.predictionUrl).then((response) => {
          return response.json();
      }).then((json) => {

        const trip = json.mode.find(modeItem => {
          return modeItem.route_type === "1"
        }).route[0].direction.find(directionItem => {
          return directionItem.direction_id === "0";
        }).trip[0];

        const nextTrain = (trip.pre_away >= 60) ? Math.round(trip.pre_away / 60).toString() : "<1";

        this.setState({
            nextTrain : nextTrain
        });
      });
  };

  render() {
    return (
      <div className="mbta-widget">
        The T is {this.state.nextTrain} minutes away
      </div>
    )
  }
}

export default MbtaWidget;
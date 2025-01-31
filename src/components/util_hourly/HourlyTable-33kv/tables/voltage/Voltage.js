import React from 'react';
import { withRouter } from 'react-router-dom';
import VoltageTable from '../table/Table';

class Voltage extends React.Component {

  render() {    
    return (
      <VoltageTable item={this.props.item} type={this.props.type} station={this.props.station} feeder_link={this.props.feeder_link} feeders={this.props.feeders_name} flipFeeder={this.props.flipFeeder} />
    )
  }
}

export default withRouter(Voltage);


import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import './components/css/tables.css';
import Footer from './components/Footer';
import Hourly33kv from './components/util_hourly/HourlyTable-33kv/HourlyTable';
import Hourly132kv from './components/util_hourly/HourlyTable-132kv/HourlyTable';
import Hourly330kv from './components/util_hourly/HourlyTable-330kv/HourlyTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getEquipment = this.getEquipment.bind(this);
    this.state = {
      station: 'Lekki',
      feeders: [],
      transformers: [],
      lines: [],
      reactor: []
    };
  }
  componentDidMount() {
    
  }
  getEquipment() {

  }
  render() {
    return (
      <Router>
        <div className="App">
          <h1>TCN RADAR DATABASE REPOSITORY AND DATA PROCESSING APPLICATION</h1>
          <nav>
            <Link to={'/hourly-33kv'}> HOURLY 33KV FEEDERS </Link>
            <Link to={'/hourly-132kv'}> HOURLY 132KV FEEDERS </Link>
            <Link to={'/hourly-330kv'}> HOURLY 330KV FEEDERS </Link>
          </nav>

          <Switch >
            <Route path={'/hourly-33kv'}>
              <Hourly33kv station={this.state.station} feeders={this.state.feeders} transformers={this.state.transformers} lines={this.state.lines} reactor={this.state.reactor} />
            </Route>
            <Route path={'/hourly-132kv'}>
              <Hourly132kv station={this.state.station} feeders={this.state.feeders} transformers={this.state.transformers} lines={this.state.lines} reactor={this.state.reactor} />
            </Route>
            <Route path={'/hourly-330kv'}>
              <Hourly330kv station={this.state.station} feeders={this.state.feeders} transformers={this.state.transformers} lines={this.state.lines} reactor={this.state.reactor} />
            </Route>

          </Switch>
          <Footer />
        </div>



      </Router>
    );
  }
}

export default App;

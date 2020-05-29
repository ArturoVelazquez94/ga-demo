import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mrp from './Mrp';
import Mot from './Mot';
import Aph from './Aph';
import GAEvents from './GAEvents';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function handleOnClick(label) {
  let urlForm;
  switch (label) {
    case 'MRP':
      urlForm='/mrp';
      break;
    case 'APH':
      urlForm='/aph';
      break;
    case 'MOT':
      urlForm='/mot';
      break;
  }
  GAEvents.sendToLenderGA(urlForm);
  GAEvents.sendtoLender(urlForm);
}

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <Router>
          <div>
            <h2>Google Analytics Demo</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Button variant="contained" onClick={handleOnClick('MRP')}><Link to={'/'} >MRP</Link></Button></li>
                <br />
                <li><Button variant="contained" onClick={handleOnClick('APH')}><Link to={'/aph'} >APH</Link></Button></li>
                <br />
                <li><Button variant="contained" onClick={handleOnClick('MOT')}><Link to={'/mot'}>MOT</Link></Button></li>
              </ul>
            </nav>
            <hr />
            <Switch>
              <Route exact path='/' component={Mrp} />
              <Route path='/aph' component={Aph} />
              <Route path='/mot' component={Mot} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

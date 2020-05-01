import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from './navigation/navigation';


const useStyles = makeStyles((theme) => ({
  '@global': {
    html: {
      background: 'white'
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}
));

function App() {
  useStyles();
  return (
    <Navigation />
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Line } from 'react-chartjs-2';
import TotalCases from './charts/totalCases';
import DailyCases from './charts/dailyCases';
import GenderCases from './charts/genderCases';
// import NationalityCases from './charts/nationalityCases';

const useStyles = makeStyles((theme) => ({
    '@global': {

    },
    main: {
        paddingLeft: '100px',
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: '10px',
        marginBottom: '40px'
    }

}));



function DeepDive() {
    const classes = useStyles();
    const [statesDaily, setStatesDaily] = useState({})



    return (
        <div className={classes.main}>
            <TotalCases />
            <DailyCases />
            <GenderCases />
            {/* <NationalityCases /> */}
        </div>
    );
}


export default DeepDive;
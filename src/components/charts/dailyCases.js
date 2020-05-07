// import { defaultOptions, xAxisDefaults, yAxisDefaults } from './chart-defaults';

// import { parse } from 'date-fns';
// import deepmerge from 'deepmerge';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
    '@global': {

    },
    totalCase: {
        width: '30%',
        // height: '00px'
    },
    heading: {
        fontSize: '20px',
        margin: '30px 0',
        textAlign: 'center'
    }

}));


function DailyCases() {
    const classes = useStyles();

    // let dailyStatesData = props.statesDaily

    let allData;
    let confirmed = [];
    let recovered = [];
    let deceased = [];

    let confirmedCaseDaily = [];
    let confirmedDateDaily = [];

    let recoveredCaseDaily = [];
    let recoveredDateDaily = [];

    let deceasedCaseDaily = [];
    let deceasedDateDaily = [];

    const [confirmedCaseDailyG, setConfirmedCaseDailyG] = useState([]);
    const [recoveredCaseDailyG, setRecoveredCaseDailyG] = useState([]);
    const [deceasedCaseDailyG, setDeceasedCaseDailyG] = useState([]);

    const [confirmedCaseDailyDateG, setConfirmedCaseDailyDateG] = useState([]);



    useEffect(() => {


        //Fetching daily states data for graphs
        fetch('https://api.covid19india.org/states_daily.json')
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {

                        // setStatesDaily(data);
                        allData = data.states_daily
                        // console.log(allData)
                        if (allData.length !== 0) {
                            allData.map(val => {
                                if (val.status === "Confirmed") {
                                    confirmed.push(val);
                                }
                                if (val.status === "Recovered") {
                                    recovered.push(val);
                                }
                                if (val.status === "Deceased") {
                                    deceased.push(val);
                                }
                            });
                        }

                        confirmed.map(val => {
                            confirmedCaseDaily.push(val['tt']);
                            confirmedDateDaily.push(val['date']);
                        })
                        // console.log(confirmedCaseDaily)
                        setConfirmedCaseDailyG(confirmedCaseDaily);


                        recovered.map(val => {
                            recoveredCaseDaily.push(val['tt']);

                        })
                        setRecoveredCaseDailyG(recoveredCaseDaily);

                        deceased.map(val => {
                            deceasedCaseDaily.push(val['tt']);
                        })
                        setDeceasedCaseDailyG(deceasedCaseDaily);

                        setConfirmedCaseDailyDateG(confirmedDateDaily);

                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });


    }, []);





    const dataset = {
        labels: confirmedCaseDailyDateG,
        datasets: [
            {
                borderWidth: 2,
                data: confirmedCaseDailyG,
                borderCapStyle: 'round',
                pointBackgroundColor: '#ff6862',
                label: 'Confirmed',
                borderColor: '#ff6862',
                pointHoverRadius: 2,
            },
            {
                borderWidth: 2,
                data: recoveredCaseDailyG,
                borderCapStyle: 'round',
                pointBackgroundColor: '#7ebf80',
                label: 'Recovered',
                borderColor: '#7ebf80',
                pointHoverRadius: 2,
            },
            {
                borderWidth: 2,
                data: deceasedCaseDailyG,
                borderCapStyle: 'round',
                pointBackgroundColor: '#6c757d',
                label: 'Deceased',
                borderColor: '#6c757d',
                pointHoverRadius: 2,
            },
        ],
    };

    const options = {

        scales: {
            yAxes: [
                {
                    scaleLabel: {
                        display: false,
                        labelString: 'Total Cases',
                    },
                },
            ],
            xAxes: [
                {
                    type: 'time',
                    time: {
                        unit: 'day',
                        tooltipFormat: 'MMM DD',
                        stepSize: 7,
                        displayFormats: {
                            millisecond: 'MMM DD',
                            second: 'MMM DD',
                            minute: 'MMM DD',
                            hour: 'MMM DD',
                            day: 'MMM DD',
                            week: 'MMM DD',
                            month: 'MMM DD',
                            quarter: 'MMM DD',
                            year: 'MMM DD',
                        },
                    },
                },
            ],
        },
    };

    return (
        <div className={classes.totalCase}>
            <div className={classes.heading}>DAILY CASES</div>
            <div>
                <Bar data={dataset} options={options} />
            </div>
        </div>
    );
}

export default DailyCases;
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
    '@global': {

    },
    totalCase: {
        width: '30%',
        // height: '500px'
    },
    heading: {
        fontSize: '20px',
        margin: '30px 0',
        textAlign: 'center'
    }

}));

function GenderCases() {
    const classes = useStyles();

    const [male, setMale] = useState(0);
    const [female, setFemale] = useState(0);

    useEffect(() => {


        //Fetching daily states data for graphs
        fetch('https://api.covid19india.org/raw_data.json')
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        let genderData = data.raw_data;
                        let genderArray = [];
                        genderData.map(val => {
                            genderArray.push(val['gender'])
                        })
                        let maleCount = 0;
                        let femaleCount = 0;

                        genderArray.map(val => {
                            if (val === "M") {
                                maleCount++;
                            }
                            if (val === "F") {
                                femaleCount++;
                            }
                        })

                        setMale(maleCount);
                        setFemale(femaleCount);

                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });


    }, []);

    const chartData = {
        datasets: [
            {
                data: [male, female],
                backgroundColor: ['#6497f3', '#ea6e9a'],
                label: 'Hola',
            },
        ],
        labels: ['Male', 'Female'],
    };

    const chartOptions = {
        tooltips: {
            mode: 'point',
            position: 'nearest',
            callbacks: {
                label: function (tooltipItem, data) {
                    const dataset = data.datasets[tooltipItem.datasetIndex];
                    const meta = dataset._meta[Object.keys(dataset._meta)[0]];
                    const total = meta.total;
                    const currentValue = dataset.data[tooltipItem.index];
                    const percentage = parseFloat(
                        ((currentValue / total) * 100).toFixed(1)
                    );
                    return currentValue + ' (' + percentage + '%)';
                },
                title: function (tooltipItem, data) {
                    return data.labels[tooltipItem[0].index];
                },
            },
        },
    };

    return (
        <div className={classes.totalCase}>
            <div className={classes.heading}>GENDER CASES</div>
            <div>
                <Doughnut data={chartData} options={chartOptions} />
            </div>
        </div>
    );
}

export default GenderCases;
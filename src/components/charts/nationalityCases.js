import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
    '@global': {

    },
    totalCase: {
        width: '500px',
        height: '500px'
    }

}));

function NationalityCases() {
    const classes = useStyles();

    const [nationalityCount, setNationality] = useState([]);

    useEffect(() => {


        fetch("https://api.covid19india.org/raw_data.json")
            .then(function (response) {
                response.json().then(function (data) {
                    if (data.raw_data) {
                        data.raw_data.map((val) => {
                            let nationalityy = []
                            if (val.nationality !== "") {

                                nationalityy.push(val["nationality"]);
                            }
                            var count = {};
                            nationalityy.forEach(function (i) {
                                count[i] = (count[i] || 0) + 1;
                            });
                            console.log(count);
                            setNationalityCount(count);
                        });
                    }
                });


            }, [])
    });

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
            <div className="chart-title">{"Total Cases"}</div>
            <div className="chart-content">
                <Doughnut data={chartData} options={chartOptions} />
            </div>
        </div>
    );
}

export default NationalityCases;
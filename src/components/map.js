import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';

import LinearGradient from './LinearGradient.js';
// import './App.css';

/**
* Courtesy: https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json
* Looking topojson for other countries/world? 
* Visit: https://github.com/markmarkoh/datamaps
*/
const INDIA_TOPO_JSON = require('./india.topo.json');

const PROJECTION_CONFIG = {
    scale: 350,
    center: [78.9629, 22.5937] // always in [East Latitude, North Longitude]
};

// Red Variants
let COLOR_RANGE = [];




const DEFAULT_COLOR = '#EEE';

const getRandomInt = () => {
    return parseInt(Math.random() * 100);
};

const geographyStyle = {
    default: {
        outline: 'none'
    },
    hover: {
        fill: '#ccc',
        transition: 'all 250ms',
        outline: 'none'
    },
    pressed: {
        outline: 'none'
    }
};



function Map(props) {

    // console.log(props.states);
    const [states, setStates] = useState([]);

    console.log(props.mapType);

    useEffect(() => {
        //Fetching Total Data
        fetch('https://api.covid19india.org/data.json')
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        // console.log(data);
                        setStates(data.statewise)
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
        // alert(props.mapType);



        if (props.mapType === 'confirmed') {
            COLOR_RANGE = [
                '#ffedea',
                '#ffcec5',
                '#ffad9f',
                '#ff8a75',
                '#ff5533',
                '#e2492d',
                '#be3d26',
                '#9a311f',
                '#782618'
            ];
        }
        if (props.mapType === 'active') {
            COLOR_RANGE = [
                '#d1f3ff',
                '#a6e8ff',
                '#8fe2ff',
                '#7addff',
                '#44afd4',
                '#1a88ad',
                '#096685',
                '#044e66',
                '#003e52'
            ];
        }
        if (props.mapType === 'recovered') {
            COLOR_RANGE = [
                '#e7ffbd',
                '#dafc9f',
                '#c0e87b',
                '#a2cc5a',
                '#78a629',
                '#456b04',
                '#3c5c05',
                '#2d4701',
                '#131f00'
            ];
        }
        if (props.mapType === 'deaths') {
            COLOR_RANGE = [
                '#ffffff',
                '#ededed',
                '#a8a8a8',
                '#919191',
                '#737373',
                '#292929',
                '#292929',
                '#454545',
                '#000000'
            ];
        }

    }, [props.mapType]);

    // will generate random heatmap data on every call
    // const getHeatMapData = () => {
    //     return [
    //         { id: 'AP', state: 'Andhra Pradesh', value: getRandomInt() },
    //         { id: 'AR', state: 'Arunachal Pradesh', value: getRandomInt() },
    //         { id: 'AS', state: 'Assam', value: getRandomInt() },
    //         { id: 'BR', state: 'Bihar', value: getRandomInt() },
    //         { id: 'CT', state: 'Chhattisgarh', value: getRandomInt() },
    //         { id: 'GA', state: 'Goa', value: 21 },
    //         { id: 'GJ', state: 'Gujarat', value: 22 },
    //         { id: 'HR', state: 'Haryana', value: getRandomInt() },
    //         { id: 'HP', state: 'Himachal Pradesh', value: 24 },
    //         { id: 'JH', state: 'Jharkhand', value: 26 },
    //         { id: 'KA', state: 'Karnataka', value: 27 },
    //         { id: 'KL', state: 'Kerala', value: getRandomInt() },
    //         { id: 'MP', state: 'Madhya Pradesh', value: getRandomInt() },
    //         { id: 'MH', state: 'Maharashtra', value: getRandomInt() },
    //         { id: 'MN', state: 'Manipur', value: getRandomInt() },
    //         { id: 'ML', state: 'Meghalaya', value: 59 },
    //         { id: 'MZ', state: 'Mizoram', value: getRandomInt() },
    //         { id: 'NL', state: 'Nagaland', value: 59 },
    //         { id: 'OR', state: 'Odisha', value: 59 },
    //         { id: 'PB', state: 'Punjab', value: getRandomInt() },
    //         { id: 'RJ', state: 'Rajasthan', value: getRandomInt() },
    //         { id: 'SK', state: 'Sikkim', value: getRandomInt() },
    //         { id: 'TN', state: 'Tamil Nadu', value: getRandomInt() },
    //         { id: 'TG', state: 'Telangana', value: getRandomInt() },
    //         { id: 'TR', state: 'Tripura', value: 14 },
    //         { id: 'UT', state: 'Uttarakhand', value: getRandomInt() },
    //         { id: 'UP', state: 'Uttar Pradesh', value: 15 },
    //         { id: 'WB', state: 'West Bengal', value: 17 },
    //         { id: 'WB', state: 'West Bengal', value: 17 },
    //         { id: 'AN', state: 'Andaman and Nicobar Islands', value: getRandomInt() },
    //         { id: 'CH', state: 'Chandigarh', value: getRandomInt() },
    //         { id: 'DN', state: 'Dadra and Nagar Haveli', value: 19 },
    //         { id: 'DD', state: 'Daman and Diu', value: 20 },
    //         { id: 'DL', state: 'Delhi', value: 59 },
    //         { id: 'JK', state: 'Jammu and Kashmir', value: 25 },
    //         { id: 'LA', state: 'Ladakh', value: getRandomInt() },
    //         { id: 'LD', state: 'Lakshadweep', value: getRandomInt() },
    //         { id: 'PY', state: 'Puducherry', value: getRandomInt() }
    //     ];
    // };

    const [tooltipContent, setTooltipContent] = useState('');
    // console.log(states)
    // const [data, setData] = useState(getHeatMapData());

    const gradientData = {
        fromColor: COLOR_RANGE[0],
        toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
        min: 0,
        max: states.reduce((max, item) => (item[props.mapType] > max ? item[props.mapType] : max), 0)
    };

    const colorScale = scaleQuantile()
        .domain(states.map(d => d[props.mapType]))
        .range(COLOR_RANGE);

    const onMouseEnter = (geo, current = { value: 'NA' }) => {
        return () => {
            setTooltipContent(`${((current[props.mapType] / states[0][props.mapType]) * 100).toFixed(2)}% in ${geo.properties.name}`);
        };
    };

    const onMouseLeave = () => {
        setTooltipContent('');
    };



    return (
        <div className="full-width-height container">
            {/* <h1 className="no-margin center">States and UTs</h1> */}
            <ReactTooltip>{tooltipContent}</ReactTooltip>
            <ComposableMap
                projectionConfig={PROJECTION_CONFIG}
                projection="geoMercator"
                width={230}
                height={230}
                data-tip=""
            >
                <Geographies geography={INDIA_TOPO_JSON}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            //console.log(geo.id);
                            if (states.length !== 0) {
                                const current = states.find(s => s.statecode === geo.id);
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={current ? colorScale(current[props.mapType]) : DEFAULT_COLOR}
                                        style={geographyStyle}
                                        onMouseEnter={onMouseEnter(geo, current)}
                                        onMouseLeave={onMouseLeave}
                                    />
                                );
                            }
                        })
                    }
                </Geographies>
            </ComposableMap>
            {/* <LinearGradient data={gradientData} />
            <div className="center">
                <button className="mt16" onClick={onChangeButtonClick}>Change</button>
            </div> */}
        </div>
    );
}

export default Map;
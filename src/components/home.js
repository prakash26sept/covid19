import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import statesTable from './statesTable';
import DataTable, { createTheme } from "react-data-table-component";
import Map from './map';




const style = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        paddingTop: '70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '65%',
        margin: 'auto',
        backgroundColor: 'white'
    },
    container: {
        width: '100%',
        backgroundColor: 'white'
    },
    mainContent: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
    },
    mainContentInner: {
        width: '40%',
        // width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
    },
    mapDetails: {
        display: 'flex',

        justifyContent: 'space-between',

    },
    mapDetailsInnerConfirmed: {
        background: 'rgba(255,7,58,.12549)',
        color: 'rgba(255,7,58,.6)',
        width: '20%',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        flex: '1 1',
        flexDirection: 'column',
        height: 'auto',
        marginBottom: '1rem',
        marginLeft: '.25rem',
        marginRight: '.25rem',
        padding: '.25rem',
        position: 'relative'
    },
    mapDetailsInnerActive: {
        background: 'rgba(0,123,255,.0627451)',
        color: 'rgba(0,123,255,.6)',

        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        flex: '1 1',
        flexDirection: 'column',
        height: 'auto',
        marginBottom: '1rem',
        marginLeft: '.25rem',
        marginRight: '.25rem',
        padding: '.25rem',
        position: 'relative'
    },
    mapDetailsInnerRecovered: {
        background: 'rgba(40,167,69,.12549)',
        color: 'rgba(40,167,69,.6)',

        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        flex: '1 1',
        flexDirection: 'column',
        height: 'auto',
        marginBottom: '1rem',
        marginLeft: '.25rem',
        marginRight: '.25rem',
        padding: '.25rem',
        position: 'relative'
    },
    mapDetailsInnerDeceased: {
        background: 'rgba(108,117,125,.0627451)',
        color: 'rgba(108,117,125,.6)',

        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        flex: '1 1',
        flexDirection: 'column',
        height: 'auto',
        marginBottom: '1rem',
        marginLeft: '.25rem',
        marginRight: '.25rem',
        padding: '.25rem',
        position: 'relative'
    },
    mapDetailsInnerTested: {
        background: 'rgba(32,26,162,.12549)',
        color: 'rgba(32,26,162,.6)',

        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        flex: '1 1',
        flexDirection: 'column',
        height: 'auto',
        marginBottom: '1rem',
        marginLeft: '.25rem',
        marginRight: '.25rem',
        padding: '.25rem',
        position: 'relative'
    },
    scaleRow: {
        display: 'flex',
        color: '#6c757d',
        fontSize: '.75rem',
        fontweight: '900',
        margin: '10px 0'
    },
    mapImage: {
        width: '100%'
    },
    cases: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    casesTable: {
        alignSelf: 'center',
        borderCollapse: 'separate',
        borderSpacing: '3px 4px',
        fontFamily: "archia",
        position: 'relative',
    },
    homeMainInput: {
        '-webkit-appearance': 'none!important',
        '-webkit-box-shadow': '0 10px 35px rgba(0,0,0,.1)',
        background: '#fff',
        border: '0',
        borderRadius: '5px',
        boxShadow: '0 10px 35px rgba(0,0,0,.1)',
        color: '#6c757d',
        fontFamily: "archia",
        fontSize: '1rem',
        outline: 'none',
        padding: '1rem 1rem 1rem 3rem',
        transition: 'all .2s ease-in-out',
        // width: 'calc(100% - 4rem)'
        width: '100%',
        height: '60px'
    },
    leftTitle: {
        color: '#6c757d',
        fontFamily: "archia",
        fontSize: '.75rem',
        marginBottom: '1rem'
    },
    selectState: {
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        appearance: 'none',
        backgroundColor: '#eee',
        backgroundImage: 'linear-gradient(45deg,transparent 50%,grey 0),linear-gradient(135deg,grey 50%,transparent 0)',
        backgroundPosition: 'calc(100% - 13px) 50%,calc(100% - 8px) 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '5px 5px,5px 5px',
        border: '2px solid #e8e8e9',
        borderRadius: '4px',
        color: '#6c757d',
        cursor: 'pointer',
        fontFamily: "archia",
        fontWeight: '900',
        marginLeft: '-1px',
        marginTop: '1rem',
        padding: '.5rem',
        width: 'auto'
    },
    date: {
        color: '#6c757d',
        fontWeight: '600',
        fontSize: '12px',
        padding: '40px 0'
    },
    casesTitle: {
        // color: '#ff073a',
        fontWeight: '600',
        fontSize: '12px'
    },
    casesChanges: {
        // color: 'rgba(255,7,58,.6)',
        alignSelf: 'center',
        marginBottom: '-.5rem',
        fontFamily: "archia",
        fontWeight: '900',
        padding: '10px 0',
        fontSize: '13px'
    },
    casesTotal: {

        alignSelf: 'center',
        fontWeight: '600',
        marginBottom: '0',
        fontFamily: "archia",
        fontSize: '24px!important',
    },
    spreadTrends: {
        textAlign: 'left'
    },
    spreadHeading: {
        color: '#6c757d',
        margin: '40px 0',
        fontFamily: "archia",
        fontSize: '24px!important',
        fontWeight: '900'
    },
    confirmed: {
        color: '#ff073a',
    },
    active: {
        color: '#007bff'
    },
    recovered: {
        color: '#28a745'
    },
    deceased: {
        color: '#6c757d'
    },
    searchIcon: {
        color: 'rgba(108,117,125,.6)',
        position: 'absolute',
        top: '20px',
        left: '8px',
        transition: 'all .2s ease-in-out'
    },
    inputBox: {
        position: 'relative',
        marginTop: '30px'
    },
    statesTable: {
        fontSize: '18px'
    },
    headingIndia: {
        fontFamily: "archia",
        fontSize: '20px',
        fontWeight: '900',
        color: '#6c757d'
    },
    hoverForMore: {
        marginBottom: '2rem',
        marginTop: '.75rem',
        fontFamily: "archia",
        fontSize: '11px',
        fontWeight: '500',
        color: '#6c757d'
    },
    totall: {
        display: 'flex',
        marginTop: '40px',
        justifyContent: 'space-between'
    },
    stateNameDiv: {
        color: '#e23028',
        fontWeight: '900',
        fontSize: '18px!important'
    },
    lastupdated: {
        color: 'rgba(40,167,69,.6)',
        fontWeight: '900',
        fontSize: '11px!important'
    },
    lastUpdatedTime: {
        color: '#28a745',
        fontWeight: '600',
        fontSize: '14px!important'

    },
    update: {
        color: 'rgba(40,167,69,.6)'
    },
    firstInner: {
        fontSize: '12px',
        fontFamily: "archia",
        fontWeight: '900', textAlign: 'left'
    },

    secondInner: {
        fontSize: '1em!important',
        fontWeight: '600',
        fontFamily: 'archia',
        textAlign: 'left'
    },
    thirdInner: {
        fontWeight: '900',
        marginBottom: '.25rem',
        marginTop: 'auto',
        fontSize: '11px',
        textAlign: 'left'
    },
    spreadRow: {
        display: 'flex',
        '&>div': {
            background: '#f1f1f1',
            color: '#6c757d',
            cursor: 'pointer',
            height: '3.25rem',
            marginRight: '.25rem',
            minWidth: '5rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center'
        }
    },
    chartDuration: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '15px 0',
        '&>div': {
            color: '#fd7e14',
            cursor: 'pointer',
            fontFamily: "archia",
            fontWeight: '900',
            margin: '0',
            outline: 'none',
            padding: '10px 15px',
            textAlign: 'center',
            backgroundColor: 'rgba(255,193,7,.6)',
            margin: '3px'
        }
    }
}
));


function Home() {

    const [states, setStates] = useState([]);
    const [dailyStatesData, setDailyStatesData] = useState({
        confirmed: [],
        active: [],
        recovered: [],
        deceased: [],
        tested: []
    })

    const [dailyConfirmedByState, setDailyConfirmedByState] = useState([]);
    const [dailyConfirmedByStateDates, setDailyConfirmedByStateDates] = useState([]);

    const [dailyRecoveredByState, setDailyRecoveredByState] = useState([]);
    const [dailyRecoveredByStateDates, setDailyRecoveredByStateDates] = useState([]);

    const [dailyDeceasedByState, setDailyDeceasedByState] = useState([]);
    const [dailyDeceasedByStateDates, setDailyDeceasedByStateDates] = useState([]);



    const ExpanableComponent = ({ data }) => {
        let stateCode = data.statecode;
        // console.log(stateCode);

        const index = districts.findIndex(elem => elem.statecode === stateCode);

        // console.log(districts[index].districtData);


        return (<DataTable
            columns={districtTableData.columns}
            data={districts[index].districtData}
            // overflowX={false}
            className={classes.statesTable}
            striped
            dense

        ></DataTable>)
    }

    const [tableData, setTableData] = React.useState({
        data: states,
        columns: [
            {
                name: "State/ UT",
                selector: "state",
                sortable: true,
            },
            {
                name: "Confirmed",
                selector: "confirmed",
                sortable: true,
            },
            {
                name: "Active",
                selector: "active",
                sortable: true,
            },
            {
                name: "Recover",
                selector: "recovered",
                sortable: true,
            },
            {
                name: "Deceased",
                selector: "deaths",
                sortable: true,
            },

        ],
    });

    const [districts, setDistricts] = useState([]);

    const [districtTableData, setDistrictTableData] = React.useState({
        data: districts,
        columns: [
            {
                name: "District",
                selector: "district",
                sortable: true,
            },
            {
                name: "Confirmed",
                selector: "confirmed",
                sortable: true,
            },
            {
                name: "Active",
                selector: "active",
                sortable: true,
            },
            {
                name: "Recover",
                selector: "recovered",
                sortable: true,
            },
            {
                name: "Deceased",
                selector: "deceased",
                sortable: true,
            },

        ],
    });

    const classes = style();

    Date.prototype.monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    Date.prototype.getMonthName = function () {
        return this.monthNames[this.getMonth()];
    };


    const changingDataBySelect = (e) => {

    }


    const changeData = (e) => {


        let selectedState;
        if (e.target !== undefined) {
            selectedState = e.target.value.toLowerCase();
            // this.options[this.selectedIndex].text
        } else {
            selectedState = e.statecode.toLowerCase()
        }


        let dailyConfirmedByStatee = [];
        let dailyConfirmedByStateeDates = [];

        let dailyRecoveredByStatee = [];
        let dailyRecoveredByStateeDates = [];

        let dailyDeceasedByStatee = [];
        let dailyDeceasedByStateeDates = [];

        dailyStatesData.confirmed.map((val, index) => {
            dailyConfirmedByStatee.push(parseInt(val[selectedState]));
            dailyConfirmedByStateeDates.push(val["date"]);

        })

        dailyStatesData.recovered.map((val, index) => {
            dailyRecoveredByStatee.push(parseInt(val[selectedState]));
            dailyRecoveredByStateeDates.push(val["date"]);

        })

        dailyStatesData.deceased.map((val, index) => {
            dailyDeceasedByStatee.push(parseInt(val[selectedState]));
            dailyDeceasedByStateeDates.push(val["date"]);

        })



        setDailyConfirmedByState(dailyConfirmedByStatee);
        setDailyConfirmedByStateDates(dailyConfirmedByStateeDates);

        setDailyRecoveredByState(dailyRecoveredByStatee);
        setDailyRecoveredByStateDates(dailyRecoveredByStateeDates);

        setDailyDeceasedByState(dailyDeceasedByStatee);
        setDailyDeceasedByStateDates(dailyDeceasedByStateeDates);

        console.log(e);
        setStateStats({
            ...stateStats,
            confirmed: e.confirmed,
            state: e.state,
            lastUpdate: e.lastupdatedtime,
            active: e.active,
            recovered: e.recovered,
            deceased: e.deaths,
            deltaConfirmed: e.deltaconfirmed,
            deltaRecovered: e.deltarecovered,
            deltaDeceased: e.deltadeaths,
            // totalTested: data.tested[data.tested.length - 1].totalsamplestested
        })
    }



    const [patientsStatus, setPatientsStatus] = useState(
        {
            confirmed: 0,
            active: 0,
            recovered: 0,
            deceased: 0,
            deltaConfirmed: 0,
            deltaRecovered: 0,
            deltaDeceased: 0,
            totalTested: 0,
            date: new Date()
        }
    );

    const [stateStats, setStateStats] = useState({
        confirmed: patientsStatus.confirmed,
        active: patientsStatus.active,
        recovered: patientsStatus.recovered,
        deceased: patientsStatus.deceased,
        deltaConfirmed: patientsStatus.deltaConfirmed,
        deltaRecovered: patientsStatus.deltaRecovered,
        deltaDeceased: patientsStatus.deltaDeceased,
        totalTested: patientsStatus.totalTested,
        state: '',
        lastUpdate: '',
        date: new Date()
    })

    useEffect(() => {
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
                        let tested
                        // console.log(data);
                        setStates(data.statewise)
                        setPatientsStatus({
                            ...patientsStatus,
                            confirmed: data.statewise[0].confirmed,
                            active: data.statewise[0].active,
                            recovered: data.statewise[0].recovered,
                            deceased: data.statewise[0].deaths,
                            deltaConfirmed: data.statewise[0].deltaconfirmed,
                            deltaRecovered: data.statewise[0].deltarecovered,
                            deltaDeceased: data.statewise[0].deltadeaths,
                            totalTested: data.tested[data.tested.length - 1].totalsamplestested
                        })
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

        //Fetching data for the table
        fetch('https://api.covid19india.org/v2/state_district_wise.json')
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        setDistricts(data)
                        // console.log(data);
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });


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

                        let allData = data.states_daily;
                        let confirmed = [];
                        let active = [];
                        let recovered = [];
                        let deceased = [];
                        let tested = [];



                        console.log(allData);

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
                        })

                        // console.log(confirmed);

                        setDailyStatesData({
                            ...dailyStatesData,
                            confirmed: confirmed,
                            recovered: recovered,
                            deceased: deceased
                        })

                        // console.log(dailyStatesData);

                        // setDailyStatesData(data);
                        // console.log(data);
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });


    }, []);

    const lineDataConfirmed = {
        labels: dailyConfirmedByStateDates,
        datasets: [
            {
                label: 'Cases',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '',
                showLine: true,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                pointBorderColor: "rgba(255, 7, 58, 0.6)",
                pointBackgroundColor: "rgba(255, 7, 58, 0.6)",
                borderWidth: 2,
                data: dailyConfirmedByState
            }
        ]
    }

    const lineDataRecovered = {
        labels: dailyRecoveredByStateDates,
        datasets: [
            {
                label: 'Cases',
                fill: false,
                lineTension: 0.5,
                showLine: true,

                borderColor: 'rgba(0,0,0,1)',
                pointBorderColor: "rgba(40,167,69,.6)",
                pointBackgroundColor: "rgba(40,167,69,.6)",
                borderWidth: 2,
                data: dailyRecoveredByState
            }
        ]
    }

    const lineDataDeceased = {
        labels: dailyDeceasedByStateDates,
        datasets: [
            {
                label: 'Cases',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '',
                showLine: true,
                backgroundColor: 'rgba(108,117,125,.6)',
                borderColor: 'rgba(108,117,125,.6)',
                borderWidth: 2,
                data: dailyDeceasedByState
            }
        ]
    }



    return (
        <div className={classes.container}>
            <main className={classes.content}>

                <div className={classes.mainContent}>
                    <div className={classes.mainContentInner}>
                        <div className={classes.leftTitle}>
                            Search your city, resource, etc
                        </div>
                        <div>

                            <div className={classes.inputBox}>
                                <input className={classes.homeMainInput} type="text" />
                                <svg className={classes.searchIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                            <div className={classes.date}>
                                {Date()}
                            </div>
                            <div className={classes.cases}>
                                <div className={classes.confirmed}>
                                    <div className={classes.casesTitle}>Confirmed</div>
                                    <div className={classes.casesChanges}>[+{patientsStatus.deltaConfirmed}]</div>
                                    <div className={classes.casesTotal}>{patientsStatus.confirmed}</div>
                                    <div className={classes.casesMapping}></div>
                                </div>
                                <div className={classes.active}>
                                    <div className={classes.casesTitle}>Active</div>
                                    <div className={classes.casesChanges}>-</div>
                                    <div className={classes.casesTotal}>{patientsStatus.active}</div>
                                    <div className={classes.casesMapping}></div>
                                </div>
                                <div className={classes.recovered}>
                                    <div className={classes.casesTitle}>Recovered</div>
                                    <div className={classes.casesChanges}>[+{patientsStatus.deltaRecovered}]</div>
                                    <div className={classes.casesTotal}>{patientsStatus.recovered}</div>
                                    <div className={classes.casesMapping}></div>
                                </div>
                                <div className={classes.deceased}>
                                    <div className={classes.casesTitle}>Deceased</div>
                                    <div className={classes.casesChanges}>[+{patientsStatus.deltaDeceased}]</div>
                                    <div className={classes.casesTotal}>{patientsStatus.deceased}</div>
                                    <div className={classes.casesMapping}></div>
                                </div>

                            </div>
                            <br />
                            <div>

                                <DataTable
                                    columns={tableData.columns}
                                    data={states}
                                    expandableRows
                                    expandableRowsComponent={<ExpanableComponent />}
                                    striped
                                    dense
                                    onRowClicked={changeData}
                                    pointerOnHover={true}
                                ></DataTable>


                            </div>
                        </div>
                    </div>
                    <div className={classes.mainContentInner}>
                        <div className={classes.headingIndia}><h2>India Map</h2></div>
                        <div className={classes.hoverForMore}>Hover over a state/UT for more details</div>
                        <div className={classes.mapDetails}>
                            <div className={classes.mapDetailsInnerConfirmed}>
                                <div className={classes.firstInner}>Confirmed</div>
                                <div className={classes.secondInner}>{stateStats.confirmed}</div>
                                <div className={classes.thirdInner}>{stateStats.deltaConfirmed}</div>
                            </div>
                            <div className={classes.mapDetailsInnerActive}>
                                <div className={classes.firstInner}>Active</div>
                                <div className={classes.secondInner}>{stateStats.active}</div>
                                <div className={classes.thirdInner}></div>
                            </div>
                            <div className={classes.mapDetailsInnerRecovered}>
                                <div className={classes.firstInner}>Recovered</div>
                                <div className={classes.secondInner}>{stateStats.recovered}</div>
                                <div className={classes.thirdInner}>{stateStats.deltaRecovered}</div>
                            </div>
                            <div className={classes.mapDetailsInnerDeceased}>
                                <div className={classes.firstInner}>Deceased</div>
                                <div className={classes.secondInner}>{stateStats.deceased}</div>
                                <div className={classes.thirdInner}>{stateStats.deltaDeceased}</div>
                            </div>
                            <div className={classes.mapDetailsInnerTested}>
                                <div className={classes.firstInner}>Tested</div>
                                <div className={classes.secondInner}>{stateStats.totalTested}</div>
                                <div className={classes.thirdInner}>As of {patientsStatus.date.getUTCDate()} {patientsStatus.date.getMonthName()} </div>
                            </div>
                        </div>
                        <div className={classes.totall}>
                            <div className={classes.stateNameDiv}>{stateStats.state}</div>
                            <div className={classes.update}>
                                <div className={classes.lastUpdated}>Last Updated</div>
                                <div className={classes.lastUpdatedTime}>{stateStats.lastUpdate}</div>
                            </div>
                        </div>
                        <Map />
                        <div className={classes.spreadHeading}>Spread Trends</div>
                        <div className={classes.spreadTrends}>
                            <div className={classes.spreadRow}>
                                <div>Cumulative</div>
                                <div>Daily</div>
                            </div>
                            <div className={classes.scaleRow}>
                                <div>Scale Modes</div>
                                <div>Uniform</div>
                                <div>Logarithmic</div>
                            </div>
                            <div>
                                <select className={classes.selectState} onChange={(e) => { changeData(e) }}>
                                    {states.map(val => {
                                        return (<option key={val.statecode} value={val.statecode} id={val.statecode}>{val.state}</option>)
                                    })}
                                </select>
                            </div>
                            <div className={"lineConfirmed"}><Line
                                data={lineDataConfirmed}

                                options={{
                                    backgroundColor: "#F5DEB3",
                                    title: {
                                        display: true,
                                        text: 'Confirmed',
                                        fontSize: 18
                                    },

                                    legend: {
                                        display: false,
                                        position: 'left'
                                    },
                                    scales: {
                                        yAxes: [{
                                            display: true,
                                            position: 'right',
                                            gridLines: {
                                                display: false
                                            },

                                        },

                                        ],
                                        xAxes: [{
                                            gridLines: {
                                                display: false
                                            }
                                        }]

                                    }
                                }}
                            /></div>
                            {/* <Line
                                data={lineData}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Active',
                                        fontSize: 18
                                    },
                                    legend: {
                                        display: false,
                                        position: 'right'
                                    },
                                    scales: {
                                        yAxes: [{
                                            display: true,
                                            position: 'right',
                                            gridLines: {
                                                display: false
                                            }
                                        },

                                        ],
                                        xAxes: [{
                                            gridLines: {
                                                display: false
                                            }
                                        }]

                                    }
                                }}
                            /> */}
                            <div className={"lineRecovered"}><Line
                                data={lineDataRecovered}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Recovered',
                                        fontSize: 18
                                    },
                                    legend: {
                                        display: false,
                                        position: 'right'
                                    },
                                    scales: {
                                        yAxes: [{
                                            display: true,
                                            position: 'right',
                                            gridLines: {
                                                display: false
                                            }
                                        },

                                        ],
                                        xAxes: [{
                                            gridLines: {
                                                display: false
                                            }
                                        }]

                                    }
                                }}
                            /></div>
                            <div className={"lineDeceased"}><Line
                                data={lineDataDeceased}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Deceased',
                                        fontSize: 20
                                    },
                                    legend: {
                                        display: false,
                                        position: 'right'
                                    },
                                    scales: {
                                        yAxes: [{
                                            display: true,
                                            position: 'right',
                                            gridLines: {
                                                display: false
                                            }
                                        },

                                        ],
                                        xAxes: [{
                                            gridLines: {
                                                display: false
                                            }
                                        }]

                                    }
                                }}
                            /></div>
                            {/* <Line
                                data={lineData}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Tested',
                                        fontSize: 18
                                    },
                                    legend: {
                                        display: false,
                                        position: 'right'
                                    },
                                    scales: {
                                        yAxes: [{
                                            display: true,
                                            position: 'right',
                                            gridLines: {
                                                display: false
                                            }
                                        },

                                        ],
                                        xAxes: [{
                                            gridLines: {
                                                display: false
                                            }
                                        }]

                                    }
                                }}
                            /> */}
                            <div className={classes.chartDuration}>
                                <div>Beginning</div>
                                <div>1 Month</div>
                                <div>2 Weeks</div>
                            </div>

                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}

export default Home;

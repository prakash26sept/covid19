import React, { useState, useEffect } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import statesTable from './statesTable';
import DataTable, { createTheme } from "react-data-table-component";

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
        width: '38%',
        // width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
    },
    mapDetails: {
        display: 'flex',

        justifyContent: 'space-between'
    },
    mapDetailsInner: {

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
}
));



function Home() {

    const [states, setStates] = useState([]);
    const ExpanableComponent = ({ data }) => {
        let stateCode = data.statecode;
        console.log(stateCode);

        const index = districts.findIndex(elem => elem.statecode === stateCode);

        console.log(districts[index].districtData);


        return (<DataTable
            columns={districtTableData.columns}
            data={districts[index].districtData}
            // overflowX={false}
            className={classes.statesTable}

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

    const [patientsStatus, setPatientsStatus] = useState(
        {
            confirmed: 0,
            active: 0,
            recovered: 0,
            deceased: 0,
            deltaConfirmed: 0,
            deltaRecovered: 0,
            deltaDeceased: 0
        }
    );

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
                        setPatientsStatus({
                            ...patientsStatus,
                            confirmed: data.statewise[0].confirmed,
                            active: data.statewise[0].active,
                            recovered: data.statewise[0].recovered,
                            deceased: data.statewise[0].deaths,
                            deltaConfirmed: data.statewise[0].deltaconfirmed,
                            deltaRecovered: data.statewise[0].deltarecovered,
                            deltaDeceased: data.statewise[0].deltadeaths
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
                        console.log(data);
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });


    }, []);



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
                                ></DataTable>


                            </div>
                        </div>
                    </div>
                    <div className={classes.mainContentInner}>
                        <div className={classes.headingIndia}><h2>India Map</h2></div>
                        <div className={classes.hoverForMore}>Hover over a state/UT for more details</div>
                        {/* <div className={classes.mapDetails}>
                            <div className={classes.mapDetailsInner}>
                                <div>Confirmed</div>
                                <div>480</div>
                                <div>+0</div>
                            </div>
                            <div className={classes.mapDetailsInner}>
                                <div>Active</div>
                                <div>356</div>
                                <div></div>
                            </div>
                            <div className={classes.mapDetailsInner}>
                                <div>Recovered</div>
                                <div>104</div>
                                <div>+0</div>
                            </div>
                            <div className={classes.mapDetailsInner}>
                                <div>Deceased</div>
                                <div>20</div>
                                <div>+0</div>
                            </div>
                            <div className={classes.mapDetailsInner}>
                                <div>Tested</div>
                                <div>21, 205</div>
                                <div>As of 30 Apr</div>
                            </div>
                        </div> */}
                        {/* <div>Total</div> */}
                        <div><img alt="indiamap" className={classes.mapImage} src="images/indiamap.png" /></div>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default Home;

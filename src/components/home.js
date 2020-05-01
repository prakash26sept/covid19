import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        paddingTop: '70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
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
        width: '30%',
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
        display: 'flex',
    }
}
));

function Home() {

    const classes = style();
    return (
        <div className={classes.container}>
            <main className={classes.content}>

                <div className={classes.mainContent}>
                    <div className={classes.mainContentInner}>
                        <div>
                            Search your city, resource, etc
                        </div>
                        <div>
                            <input className={classes.homeMainInput} type="text" />
                            <div>
                                {Date()}
                            </div>
                            <div className={classes.cases}>
                                <div>
                                    <div>Confirmed</div>
                                    <div>[+204]</div>
                                    <div>35,070</div>
                                    <div></div>
                                </div>
                                <div>
                                    <div>Active</div>
                                    <div>-</div>
                                    <div>24,631</div>
                                    <div></div>
                                </div>
                                <div>
                                    <div>Recovered</div>
                                    <div>[+217]</div>
                                    <div>9,276</div>
                                    <div></div>
                                </div>
                                <div>
                                    <div>Deceaed</div>
                                    <div>[+5]</div>
                                    <div>1,159</div>
                                    <div></div>
                                </div>
                                <div>Table</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.mainContentInner}>
                        <div className={classes.headingIndia}><h2>India Map</h2></div>
                        <div>Hover over a state/UT for more details</div>
                        <div className={classes.mapDetails}>
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
                        </div>
                        <div>Total</div>
                        <div><img alt="indiamap" className={classes.mapImage} src="images/indiamap.png" /></div>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default Home;

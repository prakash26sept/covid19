import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DatePicker from 'react-date-picker';
// import DatePicker from './datePicker';

const style = makeStyles((theme) => ({
    '@global': {
        select: {
            backgroundColor: '#eee',
            // backgroundImage: "linear-gradient(45deg,transparent 50%,grey 0),linear-gradient(135deg,grey 50%,transparent 0)",
            backgroundPosition: "calc(100% - 13px) 50%,calc(100% - 8px) 50%",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '5px 5px,5px 5px',
            border: '2px solid #e8e8e9',
            borderRadius: '4px',
            color: '#6c757d',
            cursor: 'pointer',
            fontFamily: "archia",
            fontWeight: '900',
            margin: '.2rem .1rem',
            padding: '.5rem',
            width: '130px'
        }

    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        margin: 'auto',
        backgroundColor: 'white'

    },
    container: {
        width: '100%',
        paddingLeft: '65px',
        backgroundColor: 'white',


    },
    header: {
        // width: '%',
        // paddingLeft: '85px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '5px',
        boxShadow: '0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #dadce0'

    },
    innerHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&>div': {
            padding: '0 10px'
        }
    },
    first: {
        display: 'flex',
        width: '100%',
        margin: 'auto',
        justifyContent: 'space-between'
    },
    firstLast: {
        width: '10%',
        fontSize: '11px',
        textAlign: 'right',
        color: 'grey'
    },
    demographics: {
        color: '#4c75f2',
        fontFamily: 'archia'
    },
    datePicker: {
        backgroundColor: '#eee',
        // backgroundImage: "linear-gradient(45deg,transparent 50%,grey 0),linear-gradient(135deg,grey 50%,transparent 0)",
        backgroundPosition: "calc(100% - 13px) 50%,calc(100% - 8px) 50%",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '5px 5px,5px 5px',
        // border: '2px solid #e8e8e9',
        borderRadius: '4px',
        color: '#6c757d',
        stroke: 'rgba(108,117,125,.6)',
        cursor: 'pointer',
        fontFamily: "archia",
        fontWeight: '900',
        margin: '.2rem .1rem',
        padding: '.4rem',
        // width: '130px'
    },
    second: {
        background: 'rgba(76,117,242,.0627451)',
        borderRadius: '5px',
        color: '#4c75f2',
        fontFamily: "archia",
        fontSize: '.9rem',
        fontWeight: '600',
        lineHeight: '23px',
        width: '30%',
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '100px',
        padding: '20px',
        textAlign: 'center'
    },
    rowDiv: {
        display: 'flex'
    },
    row: {
        display: 'flex'
    }
}
));

function Demographics() {

    const [newDate, setNewDate] = useState(new Date());

    const changeSelectedDate = date => {
        setNewDate(date)
    }

    const dataByType = (e) => {

    }


    const classes = style();
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.innerHeader}>
                    <div><select>
                        <option>Select State</option>
                        <option>UP</option>
                        <option>Gujarat</option>
                        <option>Delhi</option>
                        <option>Punjab</option>
                        <option>Rajasthan</option>
                    </select></div>
                    <div><DatePicker className={classes.datePicker} onChange={changeSelectedDate} value={newDate} /></div>
                </div>
                <div className={classes.innerHeader}>
                    <div className={classes.rowDiv}>
                        <div className={classes.row}>
                            <div>Female</div>
                            <div>Male</div>
                            <div>Unknown</div>
                        </div>
                        <div className={classes.row}>
                            <div>Local</div>
                            <div>Imported</div>
                            <div>Unknown</div>
                        </div>
                        <div className={classes.row}>
                            <div>IN</div>
                            <div>UK</div>
                            <div>US</div>
                            <div>TH</div>
                            <div>IT</div>
                            <div>CA</div>
                            <div>ID</div>
                            <div>MM</div>
                        </div>
                    </div>

                    <div><select>
                        <option value="genders" onChange={dataByType}>Genders</option>
                        <option value="transmission" onChange={dataByType}>Transmission</option>
                        <option value="nationality" onChange={dataByType}>Nationality</option>
                    </select></div>
                </div>
            </div>
            <main className={classes.content}>
                <div className={classes.first}>
                    <div className={classes.firstInner}>
                        <div className={classes.demographics}><h2>Demographics</h2></div>
                        <div>Expand</div>
                    </div>
                    <div className={classes.firstLast}>
                        Some of the data provided might be missing/unknown as the details have not been shared by the state/central governments
                    </div>
                </div>
                <div className={classes.second}>
                    It is important that we do not think of these as just tiny boxes,<br /> numbers, or just another part of statistics - among these are our<br /> neighbors, our teachers, our healthcare workers, our supermarket<br /> vendors, our friends, our co-workers, our children or our<br /> grandparents.<br /><br />
                    Among these are our people.


                </div>
            </main>
        </div>
    );
}

export default Demographics;

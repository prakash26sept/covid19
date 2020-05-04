import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    '@global': {

    },
    faqs: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'white',
        lineHeight: '1.5rem',
        fontWeight: '600',
        fontFamily: "archia",
        fontSize: '19px',
        padding: '40px 0'
    },
    faq: {
        width: '25%',
        margin: 'auto',
        marginBottom: '20px'
    },
    description: {
        color: '#007bff',
    }

}));

function Faq() {
    const classes = useStyles();

    return (
        <div className={classes.faqs}>

            <div className={classes.faq}>
                <div className={classes.heading}>
                    Are you official?
                </div>
                <div className={classes.description}>
                    No.
                </div>
            </div>

            <div className={classes.faq}>
                <div className={classes.heading}>
                    What are your sources? How is the data gathered for this project?
                </div>
                <div className={classes.description}>
                    We are using state bulletins and official handles to update our numbers. The data is validated by a group of volunteers and published into a Google sheet and an API. API is available for all at api.covid19india.org. We would love it if you can use this data in the fight against this virus. The source list is here.
                </div>
            </div>

            <div className={classes.faq}>
                <div className={classes.heading}>
                    Why does covid19india.org have more positive count than MoH?
                </div>
                <div className={classes.description}>
                    MoHFW updates the data at a scheduled time. However, we update them based on state press bulletins, official (CM, Health M) handles, PBI, Press Trust of India, ANI reports. These are generally more recent.
                </div>
            </div>

            <div className={classes.faq}>
                <div className={classes.heading}>
                    Where can I find the data for this?
                </div>
                <div className={classes.description}>
                    You can preview all the data collected in this page : patientdb.covid19india.org . All the data is available through an API for further analysis and development here : api.covid19india.org
                </div>
            </div>

            <div className={classes.faq}>
                <div className={classes.heading}>
                    Who are you?
                </div>
                <div className={classes.description}>
                    We are a group of dedicated volunteers who curate and verify the data coming from several sources. We extract the details, like a patient's relationship with other patients to identify local and community transmissions, travel history and status. We never collect or expose any personally identifiable data regarding the patients.
                </div>
            </div>

            <div className={classes.faq}>
                <div className={classes.heading}>
                    Why are you guys putting in time and resources to do this while not gaining a single penny from it?
                </div>
                <div className={classes.description}>
                    Because it affects all of us. Today it's someone else who is getting infected; tomorrow it could be us. We need to prevent the spread of this virus. We need to document the data so that people with knowledge can use this data to make informed decisions.
                </div>
            </div>



        </div>
    );
}


export default Faq;
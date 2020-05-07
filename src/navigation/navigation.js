import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles, createStyles } from '@material-ui/core';
import React from 'react';
import MiniDrawer from '../components/sidebar';
import Home from '../components/home';
import Demographics from '../components/demographics';
import Faq from '../components/faq';
import DeepDive from '../components/deepDive';



const style = makeStyles(theme => createStyles({

    '@global': {
        body: {
            backgroundColor: '#ededed'
        },
    }

})
)

function Navigation() {

    style();

    return (
        <BrowserRouter >

            <MiniDrawer />

            <Switch >

                <Route path="/" exact>

                    <Home />
                </Route>

                <Route path="/demographics">
                    <Demographics />
                </Route>

                <Route path="/deepdive">
                    <DeepDive />
                </Route>

                <Route path="/essentials">
                    <Demographics />
                </Route>

                <Route path="/faq">
                    <Faq />
                </Route>



            </Switch>

        </BrowserRouter>
    );
}

export default Navigation;
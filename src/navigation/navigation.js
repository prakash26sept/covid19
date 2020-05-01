import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles, createStyles } from '@material-ui/core';
import React from 'react';
import MiniDrawer from '../components/sidebar';
import Home from '../components/home';
import Demographics from '../components/demographics';


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
                    <Demographics />
                </Route>

                <Route path="/essentials">
                    <Demographics />
                </Route>

                <Route path="/faq">
                    <Demographics />
                </Route>



            </Switch>

        </BrowserRouter>
    );
}

export default Navigation;
import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import "../scss/main.css";
import Home from '../pages/Home';
import AuthProvaider from '../context/auth-context';
import AnonimRoute from './AnonimRoute';
import PrivateRote from './PrivateRote';
import Spawn from '../pages/Spawn';
import EditorRute from './EditorRute';
import Create from '../pages/Create';

const Router = () => <BrowserRouter>
    <AuthProvaider>
        <Switch>
            <AnonimRoute path="/" exact component={Home} />
            <PrivateRote path="/spawn" exact component={Spawn} />
            <EditorRute path="/create" exact component={Create} />
        </Switch>
    </AuthProvaider>
</BrowserRouter>

export default Router;

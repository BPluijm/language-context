import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import AllPlants from './pages/allPlants/AllPlants';


function App() {

    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about-us">
                    <AboutUs/>
                </Route>
                <Route path="/all-plants">
                    <AllPlants/>
                </Route>
            </Switch>
        </>

    )
        ;
}

export default App;

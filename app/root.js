import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import {Scene, Router} from 'react-native-router-flux';
// Views
import {Stocks} from './containers/index'
// Constance
import {Scene as SceneConstans} from './constans/index'


const store = configureStore();

export default class Root extends Component {

    componentDidMount() {

    }

    render() {

        let scenes;

        if (process.env.NODE_ENV === 'development') {
            scenes = [
                [SceneConstans.STOCKS, Stocks, true]
            ]
        } else {
            scenes = [
                [SceneConstans.STOCKS, Stocks, true]
            ]
        }

        return(
            <Provider store={store}>
                <Router>
                    <Scene key="root" hideNavBar>
                        {scenes.map((item) => <Scene key={item[0]} component={item[1]} initial={item[2]}/>)}
                    </Scene>
                </Router>
            </Provider>
        )
    }
}
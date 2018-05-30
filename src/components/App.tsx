import React = require("react")
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { PagesHome } from "./pages/Home";
const {
    createBottomTabNavigator
} = require("react-navigation")


type Props = {};

const StackNav = createBottomTabNavigator({
    Home: PagesHome,
    Home2: PagesHome,
})

export default class App extends React.Component {
    render() {
        return <StackNav />
    }
}

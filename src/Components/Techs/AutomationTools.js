import React from "react";
import Robot from './Robot'
import Appium from './Appium'
import Selenium from './Selenium'
import WebDriverIO from './WebDriverIO'
import OtherLibraries from './OtherLibraries'


const AutomationTools = props => {
    let active = false
    if (props.tool === 'appium') {
        return <Appium />
    }
    else if (props.tool === 'selenium') {
        return <Selenium />
    }
    else if (props.tool === 'wd') {
        return <WebDriverIO />
    }
    else if (props.tool === 'other') {
        return <OtherLibraries />

    }
    else {
        return <Robot />
    }

}

export default AutomationTools
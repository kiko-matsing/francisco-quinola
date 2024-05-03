import React, { useState } from "react";
// import "../Styles/Automation.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import AutomationTools from './Techs/AutomationTools'
const Automation = () => {

    const [toolState, setToolState] = useState(null);

    const autoTools = [
        { tool: 'robot', name: 'Robot Framework', active: false },
        { tool: 'selenium', name: 'Selenium', active: false },
        { tool: 'wd', name: 'Web Driver IO', active: false },
        { tool: 'appium', name: 'Appium', active: false },
        { tool: 'other', name: 'Other Libraries', active: false },

    ]

    const onToolUpdate = (tool, device) => {
        tool.tool === toolState && device === 'mobile' ?
            setToolState(null) :
            setToolState(tool.tool)

    }

    const toolList = device => autoTools.map(tool => {
        return (
            <li className="tool">
                <button
                    className="tool-button"
                    onClick={() => onToolUpdate(tool, device)}
                    key={tool.tool}
                >
                    {tool.name}
                </button>
                <div className={device === 'mobile' && tool.tool === toolState ? `${tool.tool}-active` : 'mobile'}>
                    <AutomationTools tool={toolState} key='description' />
                </div>
            </li>
        )
    })

    return (
        <div className="automation-container" id="automation">
            <div className="automation">
                <div className="web">
                    <h2 className="automation-title">
                        <FontAwesomeIcon icon={faRobot} className="robotIcon" /> Mobile and Web Automation Tools</h2>
                    <div className="automation-tools">
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="wrenchicon" />
                        <ul className="tool-framework" key='tool'>
                            {toolList('web')}
                        </ul>
                        <AutomationTools tool={toolState} key='description' />

                    </div>
                </div>
                {/* Mobile */}

                <div className="mobile">
                    <h2 className="automation-title">
                        <FontAwesomeIcon icon={faRobot} className="robotIcon" /> Mobile and Web Automation Tools</h2>
                    <div className="automation-tools">
                        <ul className="tool-framework" key='tool'>
                            {toolList('mobile')}
                        </ul>

                    </div>
                </div>
            </div>




        </div >
    )
}

export default Automation
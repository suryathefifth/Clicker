import React from 'react'; 
import './Wrapper.css';
import ClickerPanel from './ClickerPanel.js'
import UpgradePanel from './UpgradePanel.js'

{/*todo: get ResizableBox functionality*/}

class Wrapper extends React.Component {
    
    render() {
        return (
            <div className="Wrapper">
                <ClickerPanel></ClickerPanel>
                <UpgradePanel></UpgradePanel>
            </div>
        );
    };

}

export default Wrapper;



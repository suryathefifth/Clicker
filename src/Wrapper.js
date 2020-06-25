import React from 'react'; 
import './Wrapper.css';
import ClickerPanel from './ClickerPanel.js'
import UpgradePanel from './UpgradePanel.js'

{/*todo: get ResizableBox functionality*/}

class Wrapper extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            currentUnits : 0,
            currentUnitsPerSecond : 0,
            upgradesPurchased : [0, 0, 0, 0, 0]
        };
    }

    addUnit() {

        this.setState({
            currentUnits : this.state['currentUnits'] + 1
        })

    }

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



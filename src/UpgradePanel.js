import React from 'react';
import './UpgradePanel.css';

class UpgradePanel extends React.Component {

    state = {tier1num : 10, tier2num : 5}

    addTier1 = () => {
        this.setState({tier1num : this.state['tier1num'] + 1})

    }

    addTier2 = () => {
        this.setState({tier2num : this.state['tier2num'] + 1})

    }

    render() {

        return (
            <div className="UpgradePanel">

                <div>  
                <p>Count: {this.state.tier1num}</p>
                <button onClick={this.addTier1}> Add a unit! </button>
                </div>

                <div>  
                <p>Count: {this.state.tier2num}</p>
                <button onClick={this.addTier2}> Add a unit! </button>
                </div>



            </div>
        );


    };



}

export default UpgradePanel;

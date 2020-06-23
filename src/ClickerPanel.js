import React from 'react';
import './ClickerPanel.css';

class ClickerPanel extends React.Component {
    
    state = {count : 0}
    
    addUnit = () => {
        this.setState({count : this.state['count'] + 1})
        console.log(this.state['count'])
    }


    render() {

        return (
            <div className="ClickerPanel">
            <p>Count: {this.state.count}</p>
            <button onClick={this.addUnit}> Add a unit! </button>
            </div>
        );


    };
}

export default ClickerPanel;

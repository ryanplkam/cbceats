import React from 'react';
import './../styles/Panel.css'

export default class Panel extends React.Component {
    
    constructor(props) {
        super(props)
    }

    onClick = (e) => {
        this.props.onPanelClick(this.props.panelId)
    }

    onComplete = (e) => {
        e.stopPropagation();
        this.props.onPanelComplete(this.props.panelId)
    }

    render() {

        let panelContent = this.props.panelContent;

        let className = "panel"
        if (this.props.panelId == this.props.currentlyOpenPanelId) {
            className += " panel-active"
        }

        return(
            <div onClick={this.onClick} className={className}>
                <h3>{panelContent.panelTitle}</h3>
                <p>{panelContent.panelBody}</p>
                <button onClick={this.onComplete}>Click to complete this panel</button>
            </div>
        )
    }
}
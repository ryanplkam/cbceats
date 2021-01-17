import React from 'react';
import Panel from './Panel.js'

export default class PanelsContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentlyOpenPanelId: null,
            completion: 0,
            completedPanels: []
        }
    }

    getPercentComplete = () => {
        return Math.round(this.state.completedPanels.length / this.props.panelsContent.length * 100)
    }

    onPanelClick = (panelId) => {
        
        this.setState({
            currentlyOpenPanelId: this.state.currentlyOpenPanelId == panelId ? null : panelId,
        })
    }

    onPanelComplete = (panelId) => {
        console.log('inside panelscontainer onpanelcomplete')
        let newCompletedPanels = this.state.completedPanels
        if (newCompletedPanels.includes(panelId)) {
            console.log('inside top')
            let idxToRemove = newCompletedPanels.indexOf(panelId)
            newCompletedPanels.splice(idxToRemove,1);
            this.setState({
                completedPanels: newCompletedPanels
            })
        } else {
            console.log('inside bottom')
            newCompletedPanels.push(panelId)
            console.log(newCompletedPanels)
            this.setState({
                completedPanels: newCompletedPanels
            })
        }
    }
      
    render() {
        let panels = []
        this.props.panelsContent.forEach((panelContent, index) => {
            panels.push(<Panel 
                panelId={index+1} 
                currentlyOpenPanelId={this.state.currentlyOpenPanelId} 
                onPanelClick={this.onPanelClick}
                onPanelComplete={this.onPanelComplete}
                panelContent={panelContent}></Panel>)
        })
        return (
            <>
            <div>Is any panel open? {`${this.state.currentlyOpenPanelId != null}`}</div>
            <div>Currently open panel is {`${this.state.currentlyOpenPanelId}`}</div>
            <div>This panel container is {this.getPercentComplete()}% completed</div>
            
            {panels}

            </>
        )
    }
}
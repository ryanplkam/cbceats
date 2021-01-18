import React from "react";
import "./../styles/Panel.css";
import "./../styles/Common.css";
import Checkbox from "./Checkbox";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    this.props.onPanelClick(this.props.panelId);
  };

  render() {
    let panelContent = this.props.panelContent;

    let thisPanelActive = this.props.panelId == this.props.activePanel;

    let className = "panel";
    let panelArrow;
    if (thisPanelActive) {
      className += " panel-active";
      panelArrow = (<KeyboardArrowUpIcon/>)
    } else {
        panelArrow = (<KeyboardArrowDownIcon/>)
    }

    

    return (
      <div onClick={this.onClick} className={className}>
        <div className="panel-header">
          <div className="panel-header-left">
            <Checkbox
              onCheckboxChange={this.props.onPanelComplete}
              checkboxId={this.props.panelId}
              key={this.props.panelId}
            />
          </div>
          <div className="panel-header-title">
            <p>{panelContent.panelTitle}</p>
          </div>
          <div className={"panel-header-right"}>
              {panelArrow}
          </div>
        </div>

        <p>{panelContent.panelBody}</p>
      </div>
    );
  }
}

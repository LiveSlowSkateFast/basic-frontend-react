import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TabBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: props.tabs.filter(tab => tab.isActive) ? props.tabs.filter(tab => tab.isActive)[0].id : props.tabs[0].id
    }
  }

  onClick(e) {
    this.setState({ selected: e.target.id })
  }

  render() {
    const { tabs } = this.props
    const { selected } = this.state

    return (
      <div class="code-picker">
        <div class="languages-bar">
          <ul>
            {tabs.map(tab =>
              <li
                className={tabs.id === selected ? "active" : ""}
                id={tab.id}
                onClick={e => this.onClick(e)}
                style={{ cursor: 'default' }}
              >{tab.name}</li>
            )}
          </ul>
        </div>
        <div class="tab-pane">
          {tabs.filter(tab => tab.id === selected)[0].content}
        </div>
      </div>
    )
  }
}

TabBox.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      id: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
    })
  ).isRequired
};

export default TabBox;
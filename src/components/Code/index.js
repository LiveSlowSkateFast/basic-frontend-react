import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlightjs';


import './styles.css';

class Code extends Component {


  componentDidMount() {
    hljs.configure({
      classPrefix: 'sc-hljs-'
    });
    hljs.highlightBlock(this.codeBlock);
  }

  componentDidUpdate() {
    hljs.configure({
      classPrefix: 'sc-hljs-'
    });
    hljs.highlightBlock(this.codeBlock);
  }

  render() {
    const { code, className } = this.props;

    return (
      <div>
        <pre><code ref={(codeBlock) => {this.codeBlock = codeBlock;}} className={className}>{ code }</code></pre>
      </div>
    );
  }
}

Code.propTypes = {
  code: PropTypes.string.isRequired
};

export default Code;
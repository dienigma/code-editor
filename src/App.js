import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

const initCode = `function add (a,b){
    // Please fill code here
};`;

class App extends React.Component {
  state = { code: initCode };
  resetCode = () => {
    this.setState({ code: initCode });
  };
  render() {
    return (
      <div>
        <Editor
          value={this.state.code}
          onValueChange={code => this.setState({ code })}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 20
          }}
        />
        <button onClick={this.resetCode}>Reset</button>
        <button />
      </div>
    );
  }
}

export default App;

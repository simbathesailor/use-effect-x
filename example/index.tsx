import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useEffectX } from '../.';

const App = () => {
  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);

  useEffectX(
    ({ changedItem }) => {
      console.log('changed Item', changedItem);
    },
    [count, count1]
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      count -> {count}
      count1 -> {count1}
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Change count
      </button>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Change count1
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

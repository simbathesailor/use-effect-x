# use-effect-x

<h2  align="center">An alternative to useEffect which provide extra info to work with updates</h2>

---

### Why it is needed ?

Most of the times we need to respond to updates in our components, where we need to compare previous values and current values. Remember we had the same thing with componentDidUpdate in class based components earlier. useEffect today are not capable to do so out of the box. you need to put in extra effort to get the previous and current values.

We will focus on the function components now, as they are the most prominent way of developing components today.

In functional components we typically make use of usePrevious custom hooks. That definetly works. But, you need to do extra work of adding usePrevious hooks for individual items in useEffect dependency.

What if we have the access of previous and new values in useEffect callback also, so that we dont have to do that extra work of writing usePrevious hooks.

---

So there you go, I try to solve the problem using useEffect alternative which provides extra info about the dependencies , tells you what changed, previous values, current values and first run for the starters

## Install

If you use yarn. Run

```sh

yarn add use-effect-x

```

If you use npm. Run

```

npm i use-effect-x

```

## Usage

```jsx
import { useEffectX } from 'use-effect-x';

export default function App() {
  const [countA, setCountA] = React.useState(0);
  const [countB, setCountB] = React.useState(0);

  useEffectX(
    ({ changedItem: [changeObjcountA, changeObjcountB] }) => {
      // Here you have complete access to what changed
      console.log('changed Item', changeObjcountA, changeObjcountB);
      // your logic if you want to check for count
      // console.log(
      //   `count ${changedItem[0]?.changed ? 'changed' : 'not changed'} from ${
      //     changedItem[0]?.previous
      //   } to ${changedItem[0]?.next}`
      // );
    },
    [countA, countB]
  );

  return (
    <div className="App">
      countA -> {countA}
      countB -> {countB}
      <button
        onClick={() => {
          setCountA(countA + 1);
        }}
      >
        Change count A
      </button>
      <button
        onClick={() => {
          setCountB(countB + 1);
        }}
      >
        Change count B
      </button>
    </div>
  );
}
```

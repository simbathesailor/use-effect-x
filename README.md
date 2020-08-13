# use-effect-x

<h2  align="center">An alternative to useEffect which provide extra info to work with updates and react on what changed</h2>

---

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
    ({ changedItem }) => {
      // Here you have complete access to what changed
      console.log('changed Item', changedItem);
      // your logic if you want to check for count
      console.log(
        `count ${changedItem[0]?.changed ? 'changed' : 'not changed'} from ${
          changedItem[0]?.previous
        } to ${changedItem[0]?.next}`
      );
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

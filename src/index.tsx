import * as React from 'react';

// interface IUseEffect {}

// Delete me
export function useEffectX(callback: any, dependency: any[] | undefined) {
  const dependencyRef = React.useRef<null | any[] | undefined>(null);

  const changedDependencyRef = React.useRef<null | any[]>(null);

  const callbackRef = React.useRef(callback);

  callbackRef.current = callback;

  React.useEffect(() => {
    if (dependency) {
      if (dependencyRef.current) {
        changedDependencyRef.current = dependency.map((elem, index) => {
          if (dependencyRef.current?.[index] === elem) {
            return {
              previous: elem,
              next: elem,
              changed: false,
            };
          }

          return {
            previous: dependencyRef.current?.[index],
            next: elem,
            changed: true,
          };
        });
      } else {
        changedDependencyRef.current = dependency.map(elem => {
          return {
            previous: undefined,
            next: elem,
            changed: true,
            isFirstRun: true,
          };
        });
      }
    }

    callbackRef.current({
      changedItem: changedDependencyRef.current,
    });
    dependencyRef.current = dependency;
  }, [
    ...(() => {
      if (Array.isArray(dependency)) {
        return [dependency];
      } else {
        return [Math.random()];
      }
    })(),
    changedDependencyRef,
  ]);
}

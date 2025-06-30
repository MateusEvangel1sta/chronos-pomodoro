import { useEffect, useState } from 'react';
import { TaskContext } from './TaskContext';
import { initialTaskState } from './initialTaskState';

type TaskContentProviderProps = {
  children: React.ReactNode;
};

export function TaskContentProvider({ children }: TaskContentProviderProps) {
  const [state, setState] = useState(initialTaskState);

  useEffect(() => {
    console.log(state.activeTask);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

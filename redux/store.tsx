import { createContext, useReducer, PropsWithChildren, Dispatch } from 'react';
import { reducer } from './action';

export interface StoreState {
  sheet: {
    tableRows: any[];
    tableHeaders: string[];
  };
}

const initialState: StoreState = {
  sheet: {
    tableRows: [],
    tableHeaders: []
  }
}

export default function Store({ children }: PropsWithChildren) {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextDispatch.Provider value={dispatch}>
      <ContextStore.Provider value={store}>
        {children}
      </ContextStore.Provider>
    </ContextDispatch.Provider>
  )
}

export const ContextStore = createContext<StoreState>(initialState);
export const ContextDispatch = createContext<Dispatch<any>>(() => { });

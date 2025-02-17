import { StoreState } from './store';

export enum actionStore {
  UPDATE_SHEET_ROWS = 'UPDATE_SHEET_ROWS',
  UPDATE_SHEET_HEADERS = 'UPDATE_SHEET_HEADERS'
}

export const reducer = (state: StoreState, action: any) => {
  switch (action.type) {
    case actionStore.UPDATE_SHEET_ROWS:
      return { ...state, sheet: { ...state.sheet, tableRows: action.payload } }
    case actionStore.UPDATE_SHEET_HEADERS:
      return { ...state, sheet: { ...state.sheet, tableHeaders: action.payload } }
    default:
      return state;
  }
};

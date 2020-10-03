import {
  GET_CURRENCIES, SET_LOADER, SET_RELOAD, SET_ERROR, SET_ERROR_RELOAD
} from './types';


export const initialState = {
  currencies: [],
  loading: true,
  reloading: false,
  error: null
};

export default function AppReducer(state, action) {
  switch (action.type) {
    case GET_CURRENCIES:
      return { ...state, currencies: action.currencies };
    case SET_LOADER:
      return { ...state, loading: action.loading };
    case SET_RELOAD:
      return { ...state, reloading: action.reloading };
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_ERROR_RELOAD:
      return { ...state, error_reload: action.error_reload };
    default:
      return state;
  }
}

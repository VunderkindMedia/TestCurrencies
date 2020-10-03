import React, { useReducer } from "react";
import { AppContext } from "./AppContext";
import AppReducer, { initialState } from "./AppReducer";
import { GET_CURRENCIES, SET_LOADER, SET_RELOAD, SET_ERROR, SET_ERROR_RELOAD } from './types';

export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getCurrencies = async () => {
    errorClear()
    errorReloadClear()
    let url = 'https://poloniex.com/public?command=returnTicker';
    if (state.currencies.length === 0) {
      loaderOn()
    } else {
      reloadOn()
    }
    try {
      fetch(url, {
        method: "GET",
      }).then((response) => {
        return response.json()
      }).then((data)=> {
          if ('error' in data) {
            if (state.currencies.length === 0) {
              errorIs()
              loaderOff()
            } else {
              errorReloadIs()
              reloadOff()
            }
          } else {
            let array_data =[];
            Object.keys(data).map((key)=> {
              data[key].name = key
              array_data.push(data[key])
            })
            dispatch({
              type: GET_CURRENCIES,
              currencies: array_data,
            });
            loaderOff()
            reloadOff()
          }
      })
    } catch (e) {
      console.log('Error: ', e);
      loaderOff()
      reloadOff()
    }
  };

  const errorIs = () => {
    dispatch({
      type: SET_ERROR,
      error: 'Ошибка получения данных',
    });
  }

  const errorClear = () => {
    dispatch({
      type: SET_ERROR,
      error: null,
    });
  }

  const errorReloadIs = () => {
    dispatch({
      type: SET_ERROR_RELOAD,
      error_reload: 'Ошибка получения данных',
    });
  }

  const errorReloadClear = () => {
    dispatch({
      type: SET_ERROR_RELOAD,
      error_reload: null,
    });
  }

  const loaderOn = () => {
    dispatch({
      type: SET_LOADER,
      loading: true,
    });
  }

  const loaderOff = () => {
    dispatch({
      type: SET_LOADER,
      loading: false,
    });
  }

  const reloadOn = () => {
    dispatch({
      type: SET_RELOAD,
      reloading: true,
    });
  }

  const reloadOff = () => {
    dispatch({
      type: SET_RELOAD,
      reloading: false,
    });
  }

  return (
    <AppContext.Provider
      value={{
        currencies: state.currencies,
        getCurrencies,
        loading: state.loading,
        reloading: state.reloading,
        error: state.error,
        error_reload: state.error_reload
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

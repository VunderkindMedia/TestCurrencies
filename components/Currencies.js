import React, {useLayoutEffect, useContext, useEffect} from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import {Container} from './childs/Container';
import {RowCurrency} from './childs/RowCurrency';
import {AppContext} from '../context/AppContext';
import {ProgressIndicator} from './childs/ProgressIndicator';
import { useFocusEffect } from '@react-navigation/native';
import {toastError} from '../utils/utils';
import {ErrorView} from './childs/ErrorView';
export const Currencies = ({navigation}) => {

  const {
    currencies: currencies,
    getCurrencies: getCurrencies,
    loading,
    reloading,
    error,
    error_reload
  } = useContext(AppContext);

  useFocusEffect(() => {
     const timer = setInterval(()=> {
        getCurrencies()
        console.log('re-render');
      }, 5000)
    return () => clearInterval(timer)
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ProgressIndicator
          size='small'
          animating={reloading}
          style={{ paddingHorizontal: 10}}
      />
    });

  }, [reloading]);

  useEffect(()=> {
    console.log('error ->', error_reload);
      if (error_reload) {
        toastError.show(error_reload)
      } else {
        toastError.hide()
      }
  },[error_reload])

  return (
    <Container style={{ paddingTop: 2}}>
      {loading && <ProgressIndicator size='large'/>}
      {error && <ErrorView error='Ошибка получения данных' />}

      {!loading && !error &&
      <FlatList
          scrollsToTop={true}
          data={currencies}
          renderItem={(item) => {
            return (
                <RowCurrency data={item.item} reloading={reloading} />
            )
          }
          }
          initialNumToRender={0}
          keyExtractor={(item, index) => String(index)}
      />
      }
    </Container>
  )
}

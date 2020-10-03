import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import {BACKGROUND_COLOR} from '../../config/constants';

export const RowCurrency = ({data}) => {
   return (
        <View style={styles.row}>
            <View style={styles.left}>
              <View style={styles.top}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.value_title}>Наименование валюты</Text>
              </View>
              <View>
                <Text style={styles.values}>{data.last}</Text>
                <Text style={styles.value_title}>Текущий курс</Text>
              </View>
            </View>
          <View style={styles.right}>
            <View style={styles.top}>
              <Text style={[styles.title, data.percentChange[0] !== '-' ? styles.green : styles.red]}>{data.percentChange[0] !== '-' ? '+' + data.percentChange : data.percentChange}</Text>
              <Text style={styles.value_title}>Средняя динамика за день</Text>
            </View>
            <View>
              <Text style={styles.values}>{data.highestBid}</Text>
              <Text style={styles.value_title}>Последний наивысший курс</Text>
            </View>
          </View>
        </View>
    )

}

const styles = StyleSheet.create({
  row: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
    marginBottom: 2,
    marginHorizontal: 2,
    padding: 5,
    borderLeftWidth: 4,
    borderColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10

  },
  values: {
    color: '#fff',
    fontSize: 14,

  },
  value_title: {
    color: '#c7c7c7',
    fontSize: 10
  },

  green: {
    color: 'green'
  },
  red: {
    color: '#BB261A'
  },
  top: {
    marginBottom: 15
  },
  title_wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.white
  },
  row: {
    flex: 1,
    backgroundColor: Colors.red,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  row_container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    margin: 5
  },
  name: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  genre: {
    color: 'red',
    margin: 10,
  },
})

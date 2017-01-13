// @flow

import React, { PropTypes } from 'react'
import { View, Text, Image, ListView } from 'react-native'
import { connect } from 'react-redux'
// import { Actions as NavigationActions } from 'react-native-router-flux'

// For empty lists
import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/ArtistListStyle'

class ArtistList extends React.Component {

  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)
    // If you need scroll to bottom, consider http://bit.ly/2bMQ2BZ

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = [
        {name: 'Scotty and the Reverbs',
         genre: 'Rock',
         location: 'Durham, NC',
         pic: 'https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/149/original/resize:248x186/crop:x0y0w800h600/BF7A56BB-6FD6-46BB-A0F1-14C5542FF1FB-6197-00000F368AE237CD.jpg?1478787906'},
        {name: 'Gianna Salvato',
         genre: 'Pop / Soul',
         location: 'New York, NY',
         pic: 'https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/854872/original/crop:x44y0w636h478/resize:140x105/1447689070_artist_854872-1447689053.jpg?1466654377'},
        {name: 'Brie',
          genre: 'Pop / Indie',
          location: 'Los Angeles, CA',
          pic: 'https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/1760661/original/crop:x0y106w568h426/resize:140x105/artist_1760661-1464461203.jpg?1467204235'},
        {name: 'Krigarè',
          genre: 'Pop / Indie',
          location: ' Nashville, TN',
          pic: 'https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/336138/original/crop:x0y638w2913h2185/resize:140x105/Album_cover_.jpg?1483563743'},
        {name: 'Twelve24',
          genre: 'Dance',
          location: 'Dance Manchester, ENG, UK',
          pic: 'https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/4427866/original/crop:x0y389w3199h2399/resize:140x105/1433515353_Twelve24barBWsquare3.jpg?1467588247'},
      ]


    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData) {
    return (
      <View style={styles.row_container}>
        <Image source={{uri: rowData.pic}} style={styles.thumbnail}/>
        <View>
          <Text style={styles.name}>{rowData.name}</Text>
          <Text style={styles.genre}>{rowData.genre}</Text>
        </View>
      </View>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  // Render a footer.
  renderFooter = () => {
    return (
      <Text> - Footer - </Text>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this.noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderFooter={this.renderFooter}
          enableEmptySections
          pageSize={15}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)

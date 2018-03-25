import React from 'react';
import {
  //AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class LayoutRN extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.header}>
          <Text style={styles.text1}>Pendidikan Teknik Informatika</Text>
        </View>
        <View style={styles.slider}>
          <Image
            style={{width: 250, height: 250}}
            resizeMode="contain"
            source={{ uri: 'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react-native/react-native.png' }}
          />
            <Text style={styles.text2}>Slider</Text>

        </View>

        <View style={styles.keyboard}>
          <View style={styles.backkeyboard}>
            <View style={styles.tombol}>
              <Text style={styles.text2}>abc</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>def</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>ghi</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>1</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>2</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>3</Text>
            </View>
          </View>

          <View style={styles.backkeyboard}>
            <View style={styles.tombol}>
              <Text style={styles.text2}>jkl</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>mno</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>pqrs</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>4</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>5</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>6</Text>
            </View>
          </View>

          <View style={styles.backkeyboard}>
            <View style={styles.tombol}>
              <Text style={styles.text2}>tuv</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>wxyz</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>0</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>7</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>8</Text>
            </View>
            <View style={styles.tombol}>
              <Text style={styles.text2}>9</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.text4}>#JaenKuliahdiPTI</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#2196F3',
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    justifyContent : 'center',
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems : 'center',
  },
  slider: {
    justifyContent : 'center',
    flex: 3,
    backgroundColor: '#E8F5E9',
    alignItems : 'center',
  },
  keyboard: {
    flex: 2,
    backgroundColor: '#283593',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15
  },
  footer: {
    justifyContent : 'center',
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems : 'center',
  },
  backkeyboard: {
    flex: 2,
    backgroundColor: '#90CAF9',
    flexDirection: 'row',
  },

  tombol: {
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  text1 : {
    fontSize : 30,
    color : 'white'
  },
  text2 : {
    fontSize : 20,
    color : 'black'
  },
  text3 : {
    fontSize : 30,
    color : 'white'
  },
  text4 : {
    fontSize : 30,
    color : 'white'
  },
});

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

const image =
  'https://e7.pngegg.com/pngimages/624/712/png-clipart-instagram-logo-logo-computer-icons-insta-miscellaneous-sticker.png';

const MyImageViewLogo = () => {
  return (
    <Image
      style={{width: 70, height: 70, padding: 10}}
      source={require('./logo.png')}
    />
  );
};

const Post = props => {
  return (
    <View
      style={{
        width: '100%',
        height: 400,
        backgroundColor: props.color,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>POST</Text>
    </View>
  );
};

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Instagram</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>ICON</Text>
        </View>
        <ScrollView style={{height: '80%'}}>
          <View>
            <ScrollView horizontal>
              <MyImageViewLogo />
              <MyImageViewLogo />
              <MyImageViewLogo />
              <MyImageViewLogo />
              <MyImageViewLogo />
              <MyImageViewLogo />
              <MyImageViewLogo />
              <MyImageViewLogo />
              <MyImageViewLogo />
            </ScrollView>
          </View>

          <View>
            <Post color={'aqua'} />
            <Post color={'red'} />
            <Post color={'blue'} />
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Home</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Search</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Profile</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    backgroundColor: '#aaa',
  },
  TextInputView: {
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
  },
  textView: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  firstView: {
    height: '33%',
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondView: {
    height: '33%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdView: {
    height: '34%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

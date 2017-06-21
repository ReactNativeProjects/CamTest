/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//https://snowball.digital/Blog/Capturing-Pictures-in-React-Native
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import Camera from 'react-native-camera';
export default class CamTest extends Component {
  constructor(props){
    super(props);//should always be first statement in constructor when using react native
    this.state={
      data:this.props.data,
      imageSource:this.props.imageSource
    }
  }
  static defaultProps={
    data:'',
    imageSource:''
  }
  componentDidMount(){
    this.setState({data:this.props.data,imageSource:this.props.imageSource})
  }
  componentDidMount(){
    this.setState({data:this.props.data,imageSource:this.props.imageSource})
  }
  takePicture() {
      this.camera.capture()
      .then(
        (camDetails) => {
          console.log('check this: '+camDetails.path)
          var te='./Images/searchIcon.png';
          this.setState({data:JSON.stringify(camDetails),imageSource:te//camDetails.path//.replace('///','//')
        })
        }
      )
      .catch(err => console.error('Error: '+err));
  }
  renderIf(){
    if(this.state.imageSource===''){
      return <Text>Default Text</Text>
    }
    else{
      var str='./Images/searchIcon.png';
      var temp=//require("'"+this.state.imageSource+"'");
      require('./Images/searchIcon.png');
      return <View>
        <Text>Updated Text</Text>
        <Image source={{uri: this.state.imageSource}}/>
        </View>
    }
  }
  render() {
    return (
      <View style={styles.mainDiv}>
        <View style={styles.cameraHolder}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            captureTarget={Camera.constants.CaptureTarget.disk}
          >
            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
          </Camera>
        </View>
        <View style={styles.contentHolder}>
          <ScrollView>
            {this.renderIf()}
            <Text style={{fontSize:20}}>{this.state.data}</Text>
            
          </ScrollView>
        </View>
      </View>
    );
  }
}
//<Image source={this.state.imageSource}/>
const styles = StyleSheet.create({
  preview: {
   justifyContent: 'flex-end',
   alignItems: 'center',
   height: 300,//Dimensions.get('window').height,
   width: 300,//Dimensions.get('window').width
   alignSelf:'center'
 },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  cameraHolder:{
    flexDirection:'column'
  },
  mainDiv:{

  }
});

AppRegistry.registerComponent('CamTest', () => CamTest);

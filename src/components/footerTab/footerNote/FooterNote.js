import React from 'react';
import {View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';
const FooterNote = () =>{
    return (
      <View style={Styles.FooterContainer}>
        <View style={Styles.col1Footer}>
          <View style={Styles.col1FooterItem}>
            <Octicons name="diff-added" size={25} color="#000" />
          </View>
          <View style={Styles.col1FooterItem}>
            <Ionicons name="color-palette-outline" size={25} color="#000" />
          </View>
        </View>
        <View style={Styles.col2Footer}>
          <Entypo name="dots-three-vertical" size={25} color="#000" />
        </View>
      </View>
    );
}
export default  FooterNote;
 
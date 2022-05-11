import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Styles from './styles';
import NewNote from '../../Screens/newNote/NewNote';
const FooterTab = ({navigation}) =>{
  // const navigation = useNavigation();
    return (
      <View style={Styles.FooterWrapper}>
        <View style={Styles.FooterCol1}>
          <View style={Styles.FooterIcons}>
            <AntDesign name="checksquareo" size={22} color="#000" />
          </View>
          <View style={Styles.FooterIcons}>
            <Ionicons name="brush" size={22} color="#000" />
          </View>
          <View style={Styles.FooterIcons}>
            <MaterialCommunityIcons
              name="microphone-outline"
              size={22}
              color="#000"
            />
          </View>
          <View style={Styles.FooterIcons}>
            <SimpleLineIcons name="picture" size={22} color="#000" />
          </View>
        </View>
        <View style={Styles.FooterCol2}>
          <TouchableOpacity style={Styles.FooterIcons}>
            <AntDesign name="plus" size={35} color="red" onPress={()=>navigation.navigate('newNote')} />
          </TouchableOpacity>
        </View>
      </View>
    );
}
export default FooterTab;
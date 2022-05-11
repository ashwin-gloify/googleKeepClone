import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
  FooterWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderTopColor:'#e3e3e3',
    paddingTop:hp('1%'),
    paddingBottom:hp('1%'),
  },
  FooterCol1: {
    flex:1,
    flexDirection: 'row',
    paddingLeft: wp('5%'),
    // justifyContent:'space-evenly',
    // backgroundColor:'red',
  },
  FooterCol2: {
      flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  FooterIcons:{
      paddingRight:wp('7%'),
  }
});
export default Styles;
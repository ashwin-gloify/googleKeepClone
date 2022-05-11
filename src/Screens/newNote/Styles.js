import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
  containerWrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp('3%'),
    marginHorizontal: wp('3%'),
    alignItems: 'center',
    paddingBottom: hp('2%'),
    // backgroundColor:'red',
  },
  Col1: {},
  Col2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  col2Item: {
    paddingHorizontal: wp('3%'),
  },
  notesTextView: {
    marginHorizontal: wp('5%'),
  },
  inputTitle: {
    fontSize: wp('5%'),
    color: '#000',
    fontFamily: 'Poppins',
  },
  inputText: {
    fontSize: wp('4%'),
    color: '#000',
    fontFamily: 'Poppins',
  },
  FooterView: {
    // flex: 1,
    // top:hp('75%'),
    positon: 'absolute',
    zIndex: 1000,
    flexDirection: 'row',
    paddingVertical:hp('2%'),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

export default Styles;

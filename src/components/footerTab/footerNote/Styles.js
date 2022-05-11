import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
  FooterContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: wp('3%'),
    justifyContent: 'space-between',

  },
  col1Footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  col1FooterItem: {
    paddingHorizontal: wp('3%'),
  },
  col2Footer: {
    // justifyContent: 'flex-end',
  },
});
export default Styles;

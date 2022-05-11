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
  containerMain: {
    flex: 1,
    marginHorizontal: wp('1%'),
    paddingVertical: hp('1%'),
    alignItems: 'center',
    // backgroundColor:'red',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: hp('2%'),
    // backgroundColor: 'yellow',
  },
  searchItem: {
    position: 'absolute',
    zIndex: 1,
    paddingLeft: wp('5%'),
  },
  searchInput: {
    width: wp('90%'),
    borderRadius: 30,
    paddingLeft: wp('15%'),
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: wp('3.5%'),
    backgroundColor: '#edf9ff',
  },
  searchItem2: {
    position: 'absolute',
    zIndex: 1,
    right: wp('15%'),
    // paddingLeft: wp('7%'),
  },
  imgStyle: {
    width: wp('8%'),
    height: hp('4%'),
    borderRadius: wp('4%'),
    position: 'absolute',
    zIndex: 1,
    right: wp('4%'),
    top: hp('-2%'),
  },
  listContainer: {
    // flex: 1,
    marginHorizontal: wp('1%'),
  },

  mapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
  },
  dataLabel: {
    marginHorizontal: wp('3%'),
    paddingVertical: hp('1.5%'),
    // backgroundColor:'red',
  },

  renderContainer: {
    // backgroundColor: 'red',
    borderWidth: 0.5,
    borderRadius: 6,
    borderColor: '#7ed0fc',
    width: wp('47%'),
    minHeight: hp('5%'),
    paddingVertical: hp('2%'),
    marginHorizontal: wp('0%'),
    marginVertical: hp('0.5%'),
    paddingRight: wp('5%'),
  },
  titleContainer: {
    paddingBottom: hp('1%'),
    paddingLeft: wp('3%'),
  },
  textContainer: {
    paddingLeft: wp('3%'),
    paddingRight: wp('2%'),
  },
  titleText: {
    fontFamily: 'Poppins',
    color: '#000',
    fontWeight: '600',
    fontSize: wp('4%'),
  },
  noteText: {
    fontFamily: 'Poppins',
    color: '#000',
    fontWeight: '300',
    fontSize: wp('3.5%'),
  },
  labelText: {
    fontFamily: 'Poppins',
    color: '#858585',
    fontWeight: '700',
    fontSize: wp('3%'),
  },
  FooterView: {
    // flex: 1,
    positon: 'absolute',
    zIndex: 1000,
    flexDirection: 'row',
    backgroundColor:  'rgba(255, 255, 255, 0.2)',
  },
});
export default Styles;

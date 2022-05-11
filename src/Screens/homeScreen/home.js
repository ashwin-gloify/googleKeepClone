import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Styles from './styles';
import FooterTab from '../../components/footerTab/FooterTab';
import {useSelector} from 'react-redux';


const Home = ({navigation}) => {
  const [search, setSearch] = useState('');
  const notes = useSelector((state)=> state.NoteReducer);

  //dummmy data is the initial mockup data coming through store
  const [dummyData, setDummyData] = useState([]);
  //dummy data into Pinned and others - to use with map 
  const [pinnedData, setPinnedData] = useState([]);
  const [otherData, setOtherData] = useState([]);

  //setting mockup dummy data
  useEffect(()=>{
   setDummyData(notes);
  },[notes])

  //classifying mockup data into Pinned and Others 
  useEffect(() => {
    let pin = [];
    let other = [];
    dummyData.map(item => {
      if (item.pinned) {
        pin.push(item);
      } else {
        other.push(item);
      }
    });
    setPinnedData(pin);
    setOtherData(other);
  }, [dummyData]);

  //setting search data - *****functionality in progress***
  const updateSearch = text => {
    setSearch(text);
  };

  //responsible for rendering both lists with the data(array) as a parameter
  const renderList = (dataName)=>{
   return(  
     dataName.map( (item, index) =>{
      return (
        <View style={Styles.renderContainer} key={index}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.titleText}>{item.title}</Text>
          </View>
          <View style={Styles.textContainer}>
            <Text style={Styles.noteText}>{item.text}</Text>
          </View>
        </View>
      );
    })
   )
  }

  return (
    <View style={Styles.containerWrap}>
      <ScrollView>
        <View style={Styles.containerMain}>
          <View style={Styles.searchContainer}>
            <View style={Styles.searchItem}>
              <Ionicons
                name="ios-menu"
                size={30}
                color="#000"
                onPress={() => navigation.openDrawer()}
              />
            </View>
            <View>
              <TextInput
                placeholder="Search your notes"
                onChangeText={updateSearch}
                Value={search}
                style={Styles.searchInput}
                placeholderTextColor="#858585"
              />
            </View>
            <View style={Styles.searchItem2}>
              <MaterialIcons name="table-rows" size={20} color="#000" />
            </View>
            <View style={Styles.searchItem3}>
              <Image
                style={Styles.imgStyle}
                source={require('../../../assets/pic1.jpg')}
              />
            </View>
          </View>
          {/* Scroll : Pinned & Others*/}
          <View style={Styles.listContainer}>
            <View style={Styles.dataLabel}>
              <Text style={Styles.labelText}>Pinned</Text>
            </View>
            <View style={Styles.mapContainer}>
              {/* rendering pinned list  */}
              {renderList(pinnedData)}
            </View>
          </View>
          <View style={Styles.listContainer}>
            <View style={Styles.dataLabel}>
              <Text style={Styles.labelText}>Others</Text>
            </View>
            <View style={Styles.mapContainer}>
              {/* rendering Others list */}
              {renderList(otherData)}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={Styles.FooterView}>
        <FooterTab navigation={navigation} />
      </View>
    </View>
  );
};

export default Home;

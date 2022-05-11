import React, {useState} from 'react';
import {View, TextInput,ScrollView, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AddNoteAction from '../../redux/actions/AddNoteAction';
import uuid from 'react-native-uuid';
import Styles from './Styles';
import FooterNote from '../../components/footerTab/footerNote/FooterNote';
const NewNote = ({navigation}) =>{
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const [pinned, setPinned] = useState(false);
    const dispatch = useDispatch();
 
    return (
      <SafeAreaProvider>
        <View style={Styles.containerWrap}>
          <View style={Styles.headerMain}>
            <View style={Styles.Col1}>
              <Ionicons
                name="arrow-back"
                size={25}
                color="#000"
                onPress={() => {
                  if (noteTitle.length === 0 && noteText.length === 0) {
                    alert('empty post discarded');
                    return navigation.goBack();
                  } else {
                    //dispatching the addNote action
                    dispatch(
                      AddNoteAction([
                        {
                          id: uuid.v4(),
                          createdAtDate: '11-05-2022',
                          createdAtTime: '15:22',
                          text: noteText,
                          title: noteTitle,
                          pinned: pinned,
                        },
                      ]),
                    );
                    // resetting the Note text, title and pin then navigating to home
                    setNoteText('');
                    setNoteTitle('');
                    setPinned(false);
                    return navigation.goBack();
                  }
                }}
              />
            </View>
            <View style={Styles.Col2}>
              <TouchableOpacity
                style={Styles.col2Item}
                onPress={() => setPinned(!pinned)}>
                <MaterialCommunityIcons
                  name="pin"
                  size={25}
                  color={pinned ? '#000' : '#807f7d'}
                />
              </TouchableOpacity>
              <View style={Styles.col2Item}>
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={25}
                  color="#000"
                />
              </View>
              <View style={Styles.col2Item}>
                <Foundation name="archive" size={25} color="#000" />
              </View>
            </View>
          </View>
          <View style={Styles.notesTextView}>
            <TextInput
              value={noteTitle}
              onChangeText={text => setNoteTitle(text)}
              placeholder="Title"
              placeholderTextColor={'#a8a7a7'}
              style={Styles.inputTitle}
            />
          </View>
          <ScrollView>
            <View style={Styles.notesTextView}>
              <TextInput
                value={noteText}
                onChangeText={text => setNoteText(text)}
                placeholder="Note"
                placeholderTextColor={'#a8a7a7'}
                style={Styles.inputText}
                autoFocus={true}
                multiline={true}
              />
            </View>
          </ScrollView>
          <View style={Styles.FooterView}>
            <FooterNote />
          </View>
        </View>
      </SafeAreaProvider>
    );
}
export default NewNote;
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {Colors, Fonts, Images} from '../constants';
import {Separator} from '../components';
import {Display} from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StaticImageService} from '../services';

const RegisterPhoneScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          color={Colors.DEFAULT_BLACK}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Register Phone</Text>
      </View>
      <Text style={styles.title}>Register Phone</Text>
      <Text style={styles.content}>
        Enter your registered phone number to login.
      </Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.countryListContainer}>
          <Image
            source={{uri: StaticImageService.getFlagIcon()}}
            style={styles.flatIcon}
          />
          <Text></Text>
          <MaterialIcons />
        </TouchableOpacity>
        <View style={styles.phoneInputContainer}>
          <TextInput />
        </View>
      </View>
    </View>
  );
};

export default RegisterPhoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
    color: Colors.DEFAULT_BLACK,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 25,
    marginBottom: 10,
    marginHorizontal: 27,
    color: Colors.DEFAULT_BLACK,
  },
  content: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 27,
    color: Colors.DEFAULT_BLACK,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 50,
  },
  countryListContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    width: Display.setWidth(22),
    marginRight: 10,
    borderRadius: 8,
    height: Display.setHeight(6),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    flexDirection: 'row',
  },
  phoneInputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    height: Display.setHeight(6),
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center',
    flex: 1,
  },
  flatIcon: {
    height: 20,
    width: 20,
  },
});

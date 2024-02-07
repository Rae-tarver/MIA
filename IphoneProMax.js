import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style'; // Import styles from the external stylesheet

const IphoneProMax = () => {
  return (
    <View style={styles.iphoneProMax}>
      <View style={styles.div}>
        <View style={styles.overlap}>
          <Image source={require('./assets/loginpage.png')} style={styles.maskGroup} />
          <Text style={styles.textWrapper}>Meter Installation App</Text>
          <Image source={require('./assets/ecgtv_logoigg 1.png')} style={styles.ecgtvLogoigg} />
        </View>
        <Text style={styles.fieldOfficersMeter}>Field Officers, Meter Readers and Contractors</Text>
        <View style={styles.overlapGroup}>
          <View style={styles.overlap2}>
            <Image source={require('.assets/Rectangle 2.png')} style={styles.rectangle} />
            <View style={styles.component}>
              <View style={styles.overlapGroup2}>
                <Image source={require('./assets/icons8_user 1.svg')} style={styles.user} />
                <Text style={styles.textWrapper2}>Username</Text>
              </View>
            </View>
            <View style={styles.overlapWrapper}>
              <View style={styles.divWrapper}>
                <Text style={styles.textWrapper3}>Log In</Text>
              </View>
            </View>
            <View style={styles.overlapGroupWrapper}>
              <View style={styles.overlapGroup2}>
                <Text style={styles.user2}>Password</Text>
                <Image source={require('./assets/icons8_password 1.svg')} style={styles.password} />
                <Image source={require('./assets/icons8_invisible 1.svg')} style={styles.invisible} />
              </View>
            </View>
            <View style={styles.rectangle2} />
          </View>
          <View style={styles.rectangle3} />
        </View>
      </View>
    </View>
  );
};

export default IphoneProMax;

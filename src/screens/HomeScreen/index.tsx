import React from 'react';
import {ScrollView} from 'react-native';
import {Featured, List, Stories, CustomNavigationBar} from '../../components';
import {djData, bottomNavBar} from '../../services/DJdata';
import {styles} from './styles';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.viewContainer}>
      <Stories list={djData} />
      <Featured list={djData} />
      <List list={djData} />
      <CustomNavigationBar list={bottomNavBar} />
    </ScrollView>
  );
};
export {HomeScreen};

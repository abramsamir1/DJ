import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {FavouriteIcon} from 'native-base';
import {styles} from './styles';

type INavItem = {
  label: string;
};

type Props = {
  list: INavItem[];
};

const NavItem: React.FC<INavItem> = ({label}) => (
  <TouchableOpacity style={styles.navItem}>
    <View style={styles.iconStyle}>
      <FavouriteIcon size={3} color="#FFF" />
    </View>
    <Text style={styles.navText}>{label}</Text>
  </TouchableOpacity>
);

const CustomNavigationBar: React.FC<Props> = ({list}) => {
  return (
    <View style={styles.navBar}>
      {list.map(item => {
        return <NavItem label={item.label} />;
      })}
    </View>
  );
};

export {CustomNavigationBar};

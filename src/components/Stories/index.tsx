import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from './styles';

interface Story {
  id: number;
  name: string;
  image: string;
}

interface IStories {
  list: Story[];
}

const Stories = ({list}: IStories) => {
  return (
    <ScrollView style={styles.viewContainer} horizontal={true}>
      {list.length > 0 &&
        list.map(item => {
          return (
            <View key={item.id} style={styles.viewStory}>
              <Image source={{uri: item.image}} style={styles.imgStyle} />
              <Text style={styles.nameStyle}>{item.name}</Text>
            </View>
          );
        })}
    </ScrollView>
  );
};

export {Stories};

import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from './styles';
import {SearchIcon, ArrowUpIcon} from 'native-base';

interface DJ {
  id: number;
  image: string;
  name: string;
  rating: number;
  genres: string[];
}

interface Props {
  list: DJ[];
}

const List: React.FC<Props> = ({list}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewInfo}>
        <Text style={styles.titleStyle}>ALL DJs</Text>
        <View style={styles.viewIcons}>
          <View style={styles.viewIcon}>
            <SearchIcon size={5} color="#FFF" />
          </View>
          <View style={styles.viewIcon}>
            <ArrowUpIcon size={5} color="#FFF" />
          </View>
        </View>
      </View>
      {list.map(dj => (
        <TouchableOpacity key={dj.id} style={styles.item}>
          <View style={styles.upperView}>
            <Image
              source={{uri: dj.image}}
              style={[styles.image]}
              resizeMode="cover"
            />
            <View style={styles.infoUpperView}>
              <Text style={styles.name}>{dj.name}</Text>
              <Text style={styles.location}>{dj.name}</Text>
              <View style={styles.ratingView}>
                <Text style={styles.rating}>★ {dj.rating}</Text>
              </View>
            </View>
          </View>
          <FlatList
            horizontal
            data={dj.genres}
            keyExtractor={index => index.toString()}
            renderItem={({item}) => {
              return (
                <View style={styles.genreStyle}>
                  <Text style={styles.genreTextStyle}>{item}</Text>
                </View>
              );
            }}
            scrollEnabled={false}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export {List};

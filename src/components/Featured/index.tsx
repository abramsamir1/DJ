import React, {useRef} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {ArrowForwardIcon, ArrowBackIcon} from 'native-base';

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

const Featured: React.FC<Props> = ({list}) => {
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScrollLeft = () => {
    scrollViewRef.current?.scrollTo({x: 0, animated: true});
  };

  const handleScrollRight = () => {
    scrollViewRef.current?.scrollToEnd({animated: true});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>FEATURED DJS</Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {list.map((dj, index) => (
          <TouchableOpacity
            key={dj.id}
            style={[
              styles.item,
              {
                transform: [
                  {
                    scale: index != list.length && index % 2 === 1 ? 1.2 : 1,
                  },
                ],
              },
            ]}>
            <Image
              source={{uri: dj.image}}
              style={[styles.image]}
              resizeMode="cover"
            />
            <Text style={styles.name}>{dj.name}</Text>
            <Text style={styles.rating}>★{dj.rating}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleScrollLeft} style={styles.button}>
          <ArrowBackIcon style={styles.buttonText} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleScrollRight} style={styles.button}>
          <ArrowForwardIcon style={styles.buttonText} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {Featured};

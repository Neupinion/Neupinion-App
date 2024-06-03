import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rootStackParamList';
import { FlatList, StyleSheet, TouchableOpacity, View, Text, ListRenderItem, Image } from "react-native";
import theme from '../shared/styles/theme';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../shared/constants/display';
import Indicator from '../features/remakeissue/components/Indicator';
import { splashData } from '../features/splash/constants/splashData';
import { SplashDataItem } from "../features/splash/types/splashDataItem";

const SplashPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < splashData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current?.scrollToIndex({ animated: true, index: currentIndex + 1 });
    } else {
      navigation.navigate('LoginPage');
    }
  };

  const renderItem: ListRenderItem<SplashDataItem> = ({ item }) => (
    <View style={styles.page}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Indicator data={splashData} slideIndex={currentIndex} />
      <FlatList
        data={splashData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        ref={flatListRef}
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.background,
  },
  page: {
    display: 'flex',
    width: WINDOW_WIDTH,
    paddingHorizontal: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    height: 60,
    backgroundColor: theme.color.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default SplashPage;

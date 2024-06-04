import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rootStackParamList';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ListRenderItem,
  Image,
} from 'react-native';
import theme from '../shared/styles/theme';
import { WINDOW_WIDTH } from '../shared/constants/display';
import Indicator from '../features/remakeissue/components/Indicator';
import { splashData } from '../features/splash/constants/splashData';
import { SplashDataItem } from '../features/splash/types/splashDataItem';
import fontFamily from '../shared/styles/fontFamily';

const SplashPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < splashData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current?.scrollToIndex({ animated: true, index: currentIndex + 1 });
    } else {
      navigation.navigate('MainPage');
    }
  };

  const renderItem: ListRenderItem<SplashDataItem> = ({ item }) => (
    <View style={styles.page}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        <Indicator data={splashData} slideIndex={currentIndex} />
      </View>
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
  indicatorContainer: {
    width: WINDOW_WIDTH,
    display: 'flex',
    marginTop: 100,
    marginBottom: 40,
    alignItems: 'center',
  },
  page: {
    display: 'flex',
    width: WINDOW_WIDTH,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 48,
  },
  image: {
    position: 'absolute',
    top: -80,
    resizeMode: 'center',
    width: 295,
    height: 864,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    display: 'flex',
  },
  titleText: {
    fontSize: 22,
    color: theme.color.white,
    fontFamily: fontFamily.pretendard.bold,
    lineHeight: 33,
    letterSpacing: -0.66,
    textAlign: 'center',
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    width: 270,
    color: theme.color.gray6,
    fontFamily: fontFamily.pretendard.medium,
    lineHeight: 21,
    letterSpacing: -0.42,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: theme.color.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: fontFamily.pretendard.bold,
    lineHeight: 30,
    letterSpacing: -0.6,
    textAlign: 'center',
  },
});

export default SplashPage;

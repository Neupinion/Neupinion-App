import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import GlobalTextStyles from '../../../shared/styles/GlobalTextStyles';
import theme from '../../../shared/styles/theme';
import OpinionWriterSvg from '../../../assets/icon/opinionwrite.svg';
import { WithLocalSvg } from 'react-native-svg/css';
import Pin from '../../../assets/icon/pin.svg';
import fontFamily from '../../../shared/styles/fontFamily';
import useFetch from '../../../shared/hooks/useFetch';
import { getMyOpinionWrite } from '../remotes/opinionWrite';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../rootStackParamList';
import { useModal } from '../../../shared/hooks/useModal';
import OpinionWriteBottomSheet from '../../opinion/components/OpinionWriteBottomSheet';
import { OpinionWrite } from '../../../shared/types/news';
import { WINDOW_WIDTH } from '../../../shared/constants/display';

interface OpinionWriteSliderProps {
  navigation: StackNavigationProp<RootStackParamList>;
  issueId: number;
}

const OpinionWriteSlider = ({ navigation, issueId }: OpinionWriteSliderProps) => {
  const { openModal, closeModal } = useModal();

  const onClickOpinion = (opinionData: OpinionWrite) => {
    openModal(
      <OpinionWriteBottomSheet
        navigation={navigation}
        issueId={issueId}
        opinionWrite={opinionData}
        onClose={closeModal}
      />,
    );
  };

  const onClickOpinionPost = () => {
    navigation.navigate('OpinionPost', { issueId: issueId });
  };

  const fetchMyOpinionWrite = () => getMyOpinionWrite(issueId);
  const { data: myOpinionWrite, fetchData } = useFetch(fetchMyOpinionWrite, false);

  useEffect(() => {
    void fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={GlobalTextStyles.NormalText17}>의견 쓰기</Text>
      </View>
      {Array.isArray(myOpinionWrite) && myOpinionWrite.length === 0 ? (
        <>
          <View style={{ justifyContent: 'flex-start', marginLeft: -30 }}>
            <WithLocalSvg
              width={125.5}
              height={99.08478}
              asset={OpinionWriterSvg as ImageSourcePropType}
            />
          </View>
          <Text style={styles.textStyle}>아직 의견이 없어요!</Text>
        </>
      ) : (
        <FlatList
          horizontal
          data={myOpinionWrite}
          contentContainerStyle={styles.cardContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onClickOpinion(item)} style={styles.card}>
              <View style={styles.triangle} />
              <View style={styles.cardTop}>
                <View style={styles.pin}>
                  <WithLocalSvg width={20} height={20} asset={Pin as ImageSourcePropType} />
                </View>
                <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
                  {item.paragraphContent}
                </Text>
              </View>
              <View style={styles.dotLine} />
              <View>
                <Text style={styles.opinionText} numberOfLines={4} ellipsizeMode="tail">
                  {item.content}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      <TouchableOpacity style={styles.opinionButton} onPress={onClickOpinionPost}>
        <View>
          <Text style={styles.buttonText}>의견 남기기</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: WINDOW_WIDTH,
    marginTop: 30,
    marginBottom: 16,
  },
  opinionWriterContainer: {
    position: 'relative',
    backgroundColor: 'tomato',
  },
  opinionWriterSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  textStyle: {
    fontSize: 16,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.48,
    marginTop: 19.92,
  },
  opinionButton: {
    width: 131,
    height: 50,
    borderRadius: 10,
    backgroundColor: theme.color.gray3,
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: theme.color.white,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25.5,
    letterSpacing: -0.51,
  },
  pin: {
    marginTop: 2,
  },
  cardContainer: {
    width: WINDOW_WIDTH,
    gap: 16,
    marginLeft: 25,
  },
  card: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: theme.color.gray2,
    width: 160,
    height: 165,
    paddingVertical: 18,
    borderRadius: 5,
  },
  cardTop: {
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  titleText: {
    color: theme.color.white,
    width: 116,
    fontFamily: fontFamily.pretendard.medium,
    alignSelf: 'center',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22.5,
    letterSpacing: -0.45,
  },
  dotLine: {
    width: 128,
    height: 0,
    marginHorizontal: 16,
    marginTop: 11,
    marginBottom: 14,
    flexShrink: 0,
    backgroundColor: '#D1D3D8',
    borderWidth: 0.4,
    borderStyle: 'dashed',
  },
  opinionText: {
    display: 'flex',
    color: theme.color.white,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    marginHorizontal: 16,
  },
  buttonContainer: {
    marginTop: 28,
    marginBottom: 24,
    width: 280,
    height: 50,
    flexShrink: 0,
    gap: 16,
    flexDirection: 'row',
  },
  OpinionCardSvg: {
    width: 160,
    height: 165,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 18,
    borderBottomWidth: 18,
    borderLeftColor: 'transparent',
    borderBottomColor: theme.color.background,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default OpinionWriteSlider;

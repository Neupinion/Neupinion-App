import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import GlobalTextStyles from '../../../shared/styles/GlobalTextStyles';
import theme from '../../../shared/styles/theme';
import OpinionWriterSvg from '../../../assets/icon/opinionwrite.svg';
import { WithLocalSvg } from 'react-native-svg';
import Pin from '../../../assets/icon/pin.svg';
import fontFamily from '../../../shared/styles/fontFamily';
import useFetch from '../../../shared/hooks/useFetch';
import { getMyOpinionWrite } from '../remotes/opinionWrite';

const OpinionWriteSlider = ({ issueId }: { issueId: number }) => {
  const fetchMyOpinionWrite = () => getMyOpinionWrite(issueId);
  const {
    data: myOpinionWrite,
    isLoading,
    error,
    fetchData,
  } = useFetch(fetchMyOpinionWrite, false);
  const [noOpinion, setNoOpinion] = useState(true);

  useEffect(() => {
    fetchData()
      .then((data) => {
        if (Array.isArray(data) && data.length === 0) {
          setNoOpinion(true);
        } else {
          setNoOpinion(false);
        }
      })
      .catch((error) => {});
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={GlobalTextStyles.NormalText17}>의견 쓰기</Text>
      </View>
      {noOpinion ? (
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
            <View style={styles.card}>
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
            </View>
          )}
        />
      )}
      <TouchableOpacity style={styles.opinionButton} onPress={() => {}}>
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
    width: Dimensions.get('window').width,
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
    backgroundColor: theme.color.gray5,
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
    marginTop: 4,
  },
  cardContainer: {
    width: Dimensions.get('window').width,
    gap: 16,
    marginLeft: 25,
  },
  card: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: theme.color.gray7,
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
    fontFamily: fontFamily.pretendard.bold,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22.5,
    letterSpacing: -0.45,
  },
  dotLine: {
    width: 128,
    marginHorizontal: 16,
    marginTop: 11,
    marginBottom: 14,
    flexShrink: 0,
    backgroundColor: '#D1D3D8',
    borderWidth: 0.6,
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
    borderBottomColor: '#11111A',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default OpinionWriteSlider;

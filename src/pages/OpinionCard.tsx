import React, {useState} from "react";
import {Text, View, Button, StyleSheet, Image, TouchableOpacity, ImageSourcePropType} from "react-native";
import {formatDate} from "../features/remakeissue/constants/formatDate";
import {WithLocalSvg} from "react-native-svg/css";
import FavoriteFullSvg from "../assets/icon/favoritefull.svg";
import FavoriteSvg from "../assets/icon/favorite.svg";
import fontFamily from "../shared/styles/fontFamily";
import theme from "../shared/styles/theme";
import {WINDOW_WIDTH} from "../shared/constants/display";
import {ReprocessedIssueOpinion} from "../shared/types/news";
import updateFavorite from "../features/opinion/remotes/opinion";

interface OpinionCardProps{
    opinion: ReprocessedIssueOpinion;
    issueId: number;
}

const OpinionCard = ({opinion, issueId}:OpinionCardProps ) => {
    const [isLiked, setIsLiked] = useState(opinion.isLiked);
    const [likeCount, setLikeCount] = useState(opinion.likeCount);

    const updateLike = async (opinionId: number) => {
        const newIsLiked = !isLiked;
        await updateFavorite(issueId, opinionId, newIsLiked);
        setIsLiked(newIsLiked);
        setLikeCount((prevLikeCount) => (newIsLiked ? prevLikeCount + 1 : prevLikeCount - 1));
    };
    return (
        <View key={opinion.id}>
            <View style={styles.bigOpinionCard}>
                <View style={styles.bigOpinionCardTop}>
                    <Image source={{ uri: opinion.profileImageUrl }} style={styles.cardImage} />
                    <View style={{ flexDirection: 'column', marginLeft: 10, gap: 4 }}>
                        <Text style={styles.userNameText}>{opinion.nickname}</Text>
                        <Text style={styles.dateText}>{formatDate(opinion.createdAt)}</Text>
                    </View>
                </View>
                <View style={styles.bigOpinionCardMiddle}>
                    {opinion.isReliable ? (
                        <View style={styles.positivePosition}>
                            <Text style={styles.positionText}>신뢰</Text>
                        </View>
                    ) : (
                        <View style={styles.negativePosition}>
                            <Text style={styles.positionText}>의심</Text>
                        </View>
                    )}

                    <Text style={styles.userOpinionText}>{opinion.content}</Text>
                </View>
                <View style={styles.bigOpinionCardBottom}>
                    <TouchableOpacity
                        style={{ marginRight: 4 }}
                        onPress={() => updateLike(opinion.id)}
                    >
                        {isLiked ? (
                            <WithLocalSvg
                                width={18}
                                height={18}
                                asset={FavoriteFullSvg as ImageSourcePropType}
                            />
                        ) : (
                            <WithLocalSvg
                                width={18}
                                height={18}
                                asset={FavoriteSvg as ImageSourcePropType}
                            />
                        )
                        }

                    </TouchableOpacity>
                    <Text style={styles.favoriteText}>{likeCount}</Text>
                </View>
            </View>
            <View style={styles.headerUnderLine}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardImage: {
        width: 44,
        height: 44,
        borderRadius: 50,
    },
    nicknameText: {
        fontSize: 14,
        fontFamily: fontFamily.pretendard.medium,
        color: theme.color.gray5,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 21,
        letterSpacing: -0.42,
    },
    dateText: {
        fontSize: 12,
        fontFamily: fontFamily.pretendard.bold,
        color: theme.color.gray5,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 18,
        letterSpacing: -0.5,
    },
    userOpinionText: {
        fontSize: 14,
        fontFamily: fontFamily.pretendard.medium,
        color: theme.color.white,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 21,
        letterSpacing: -0.42,
        flexShrink: 1,
    },
    pinSentenceContainer: {
        width: WINDOW_WIDTH - 52,
        marginTop: 26,
        marginLeft: 26,
    },
    opinionContainer: {
        marginTop: 26,
        marginLeft: 68,
    },
    opinionTopContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
    },
    dropDownMainStyle: {
        width: 100,
        backgroundColor: theme.color.background,
    },
    arrowStyle: {
        width: 24,
        height: 24,
        tintColor: theme.color.white,
    },
    dropDownContainerStyle: {
        backgroundColor: theme.color.background,
    },
    listText: {
        fontFamily: fontFamily.pretendard.bold,
        color: theme.color.white,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 21,
        letterSpacing: -0.42,
    },
    activityIndicator: {
        flex: 1,
        alignSelf: 'center',
    },
    bigOpinionCard: {
        width: WINDOW_WIDTH - 52,
        marginLeft: 26,
        marginBottom: 25,
        marginTop: 24,
    },
    bigOpinionCardTop: {
        flexDirection: 'row',
        marginTop: 3,
    },
    userNameText: {
        fontSize: 15,
        fontFamily: fontFamily.pretendard.bold,
        color: theme.color.white,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 22.5,
        letterSpacing: -0.45,
    },
    bigOpinionCardMiddle: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 20,
    },
    positivePosition: {
        width: 40,
        height: 22,
        borderRadius: 85,
        backgroundColor: theme.color.reliable,
        alignItems: 'center',
        justifyContent: 'center',
    },
    negativePosition: {
        width: 40,
        height: 22,
        borderRadius: 85,
        backgroundColor: theme.color.unReliable,
        alignItems: 'center',
        justifyContent: 'center',
    },
    positionText: {
        fontFamily: fontFamily.pretendard.bold,
        color: theme.color.green1,
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 18,
        letterSpacing: -0.5,
    },
    favoriteText: {
        fontFamily: fontFamily.pretendard.bold,
        color: theme.color.gray6,
        textAlign: 'justify',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 18,
        letterSpacing: -0.5,
    },
    bigOpinionCardBottom: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 24,
    },
    headerUnderLine: {
        width: WINDOW_WIDTH,
        height: 1,
        backgroundColor: theme.color.gray6,
        opacity: 0.1,
    },
    subCategory: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 26,
        marginBottom: 6,
        marginTop: 20,
    },
    positionButton: {
        height: 30,
        borderRadius: 30,
        borderColor: theme.color.gray3,
        borderWidth: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        marginRight: 10,
    },
    activeButton: {
        height: 30,
        borderRadius: 30,
        backgroundColor: '#212A3C',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        marginRight: 10,
    },
    activeText: {
        fontFamily: fontFamily.pretendard.bold,
        color: theme.color.white,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 21,
        letterSpacing: -0.42,
    },
    dropdown: {
        width: 90,
        height: 40,
    },
    dropdownList: {
        backgroundColor: theme.color.black,
        borderColor: theme.color.black,
        marginRight: 40,
    },
    placeholderStyle: {
        fontFamily: fontFamily.pretendard.bold,
        color: theme.color.white,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 21,
        letterSpacing: -0.42,
    },
    selectedTextStyle: {
        fontFamily: fontFamily.pretendard.bold,
        color: theme.color.white,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 21,
        letterSpacing: -0.42,
    },
    subCategoryText: {
        fontFamily: fontFamily.pretendard.bold,
        color: theme.color.gray3,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 21,
        letterSpacing: -0.42,
    },
});
export default OpinionCard;
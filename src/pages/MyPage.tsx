import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import useAppNavigation from "../shared/utils/useAppNavigation";
import NavigatorTest from "../mocks/test/NavigatorTest";

interface MyPageProps {}
const MyPage:React.FC<MyPageProps> = () => {
    const navigation = useAppNavigation();
    return (
        <View>
            <Text>RegisterPage</Text>
            <NavigatorTest/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default MyPage;

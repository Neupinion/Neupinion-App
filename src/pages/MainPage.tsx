import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import useAppNavigation from "../shared/utils/useAppNavigation";

interface MainPageProps {}
const MainPage:React.FC<MainPageProps> = () => {
    const navigation = useAppNavigation();
    return (
        <View>
            <Text>MainPage</Text>
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

export default MainPage;

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import useAppNavigation from "../shared/utils/useAppNavigation";
import NavigatorTest from "../mocks/test/NavigatorTest";

interface LoginPageProps {}
const LoginPage:React.FC<LoginPageProps> = () => {
    const navigation = useAppNavigation();
    return (
        <View>
            <Text>LoginPage</Text>
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

export default LoginPage;

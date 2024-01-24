import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import useAppNavigation from "../shared/utils/useAppNavigation";

interface LoginPageProps {}
const LoginPage:React.FC<LoginPageProps> = () => {
    const navigation = useAppNavigation();
    return (
        <View>
            <Text>LoginPage</Text>
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

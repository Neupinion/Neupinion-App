import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import useAppNavigation from "../shared/utils/useAppNavigation";

interface RegisterPageProps {}
const RegisterPage:React.FC<RegisterPageProps> = () => {
    const navigation = useAppNavigation();
    return (
        <View>
            <Text>RegisterPage</Text>
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

export default RegisterPage;

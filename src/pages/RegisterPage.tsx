import React from 'react';
import {StyleSheet, View, Text} from "react-native";

interface RegisterPageProps {}
const RegisterPage:React.FC<RegisterPageProps> = () => {
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

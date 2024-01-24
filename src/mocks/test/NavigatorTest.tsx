import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { OnboardingStackParamList} from "../../navigation";
import useAppNavigation from "../../shared/utils/useAppNavigation";

const NavigatorTest: React.FC = () => {
    const navigation = useAppNavigation();

    const navigateToScreen = (screenName: keyof OnboardingStackParamList, buttonText: string) => {
        navigation.navigate("Onboarding", {
            screen: screenName,
        });
    };

    return (
        <>
            <TouchableOpacity onPress={() => navigateToScreen("MyPage", "Go to My Page")}>
                <Text>Go to My Page</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateToScreen("LoginPage", "Go to Login Page")}>
                <Text>Go to Login Page</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateToScreen("RegisterPage", "Go to Register Page")}>
                <Text>Go to Register Page</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateToScreen("MainPage", "Go to Main Page")}>
                <Text>Go to Main Page</Text>
            </TouchableOpacity>
        </>
    );
};

export default NavigatorTest;

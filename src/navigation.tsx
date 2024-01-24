import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import MyPage from "./pages/MyPage";
import {NavigatorScreenParams} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
}

export type OnboardingStackParamList = {
    LoginPage: undefined;
    MainPage: undefined;
    RegisterPage: undefined;
    MyPage: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
    return (
        <OnboardingStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <OnboardingStack.Screen name="LoginPage" component={LoginPage}/>
            <OnboardingStack.Screen name="RegisterPage" component={RegisterPage}/>
            <OnboardingStack.Screen name="MainPage" component={MainPage}/>
            <OnboardingStack.Screen name="MyPage" component={MyPage}/>
        </OnboardingStack.Navigator>
    )
}

const RootNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <RootStack.Screen name="Onboarding" component={OnboardingNavigator}/>
        </RootStack.Navigator>
    )
}

export default RootNavigator;

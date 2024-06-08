import { StackActions, NavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '../../../rootStackParamList';

let navigator: NavigationContainerRef<RootStackParamList> | null = null;

export const setNavigator = (nav: NavigationContainerRef<RootStackParamList> | null) => {
  navigator = nav;
};

export const navigateToLogin = () => {
  if (navigator) {
    navigator.dispatch(StackActions.replace('LoginPage'));
  }
};

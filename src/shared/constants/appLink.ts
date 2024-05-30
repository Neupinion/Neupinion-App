import { Platform } from "react-native";

export const appLink =
  Platform.OS === 'ios'
    ? 'https://apps.apple.com/us/app/kakaotalk/id362057947'
    : 'https://play.google.com/store/search?q=%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1%ED%86%A1&c=apps&hl=ko';

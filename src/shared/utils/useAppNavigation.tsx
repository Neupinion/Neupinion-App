import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation";

const useAppNavigation = (): NavigationProp<RootStackParamList> => {
    return useNavigation<NavigationProp<RootStackParamList>>();
}

export default useAppNavigation;

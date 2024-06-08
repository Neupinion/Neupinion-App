import { StackActions, NavigationContainerRef } from '@react-navigation/native';
import { navigateToLogin, setNavigator } from '../src/shared/utils/navigate/navigationService';
import { RootStackParamList } from '../src/rootStackParamList';

jest.mock('@react-navigation/native', () => ({
  StackActions: {
    replace: jest.fn().mockReturnValue({ type: 'replace', routeName: 'LoginPage' }),
  },
}));

describe('navigationService', () => {
  let mockNavigator: NavigationContainerRef<RootStackParamList>;

  beforeEach(() => {
    mockNavigator = {
      dispatch: jest.fn(),
    } as unknown as NavigationContainerRef<RootStackParamList>;
    setNavigator(mockNavigator);
  });

  it('로그인 페이지에 성공적으로 이동한다.', () => {
    navigateToLogin();
    expect(mockNavigator.dispatch).toHaveBeenCalledWith(StackActions.replace('LoginPage'));
  });
});

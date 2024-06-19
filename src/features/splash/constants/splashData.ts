import { SplashDataItem } from '../types/splashDataItem';

export const splashData: SplashDataItem[] = [
  {
    key: '1',
    title: '두 가지 입장으로 정리된 기사',
    text: '뉴피니언의 기사는, 뉴스레터의 형식으로 쉽고 빠르게 글을 읽고싶은 사람들을 위해 작성됩니다. 두 가지 입장을 모두 빠르게 접해보세요!',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    image: require('../../../assets/splash/first_splash.png'),
  },
  {
    key: '2',
    title: '문단에 근거한 논리적 의견 쓰기',
    text: '기사를 읽은 뒤, 의견 쓰기 기능을 통해 해당 문장에 대한 의견을 작성할 수 있어요!',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    image: require('../../../assets/splash/second_splash.png'),
  },
  {
    key: '3',
    title: '다른 사람의 의견 확인하기',
    text: '다른 사람들이 어떻게 의견을 작성하였는지 확인해보세요! 뉴피니언 기사를 확인하러 가볼까요?',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    image: require('../../../assets/splash/third_splash.png'),
  },
];

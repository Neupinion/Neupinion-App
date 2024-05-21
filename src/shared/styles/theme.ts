interface ColorPalette {
  main: string;
  background: string;
  sub: string;
  reliable: string;
  unReliable: string;
  black: string;
  gray: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  white: string;
  green1: string;
}

interface TrustPalette {
  fullyTrust: string;
  fullyDoubt: string;
  littleTrust: string;
  littleDoubt: string;
}
interface GradientPalette {
  gradient1: string[];
  gradient2: string[];
}

interface Theme {
  color: ColorPalette;
  gradient: GradientPalette;
  trustColor: TrustPalette;
}

const theme: Theme = {
  color: {
    main: '#7E58E9',
    background: '#11111A',
    sub: '#FF5730',
    reliable: '#1C64ED',
    unReliable: '#FF75AB',
    black: '#0A0A0A',
    gray: '#191926',
    gray1: '#191926',
    gray2: '#212A3C',
    gray3: '#394358',
    gray4: '#4E5867',
    gray5: '#71788F',
    gray6: '#D1D3D8',
    gray7: '#EBECF1',
    white: '#FFFFFF',
    green1: '#E0FFE5',
  },
  gradient: {
    gradient1: ['#1D1E27', '#7A7B86'],
    gradient2: ['#22222E', '#12121E'],
  },
  trustColor: {
    fullyTrust: '#1C64ED',
    fullyDoubt: '#FF75AB',
    littleTrust: '#1CD9D3',
    littleDoubt: '#9682A3',
  },
};

export default theme;

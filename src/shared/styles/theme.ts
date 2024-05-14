interface ColorPalette {
  main: string;
  background: string;
  sub: string;
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
}

interface GradientPalette {
  gradient1: string[];
  gradient2: string[];
}

interface Theme {
  color: ColorPalette;
  gradient: GradientPalette;
}

const theme: Theme = {
  color: {
    main: '#7E58E9',
    background: '#11111A',
    sub: '#FF5730',
    black: '#0A0A0A',
    gray: '#191926',
    gray1: '#191926',
    gray2: '#7E7D7A',
    gray3: '#394358',
    gray4: '#4E5867',
    gray5: '#394358',
    gray6: '#D1D3D8',
    gray7: '#EBECF1',
    white: '#FFFFFF',
  },
  gradient: {
    gradient1: ['#1D1E27', '#7A7B86'],
    gradient2: ['#22222E', '#12121E'],
  },
};

export default theme;

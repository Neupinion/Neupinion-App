interface ColorPalette {
  main: string;
  sub: string;
  black: string;
  gray: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
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
    sub: '#FF5730',
    black: '#0A0A0A',
    gray: '#191926',
    gray1: '#4A4A5A',
    gray2: '#7E7D7A',
    gray3: '#D3D3D3',
    gray4: '#4E5867',
    white: '#FFFFFF',
  },
  gradient: {
    gradient1: ['#1D1E27', '#7A7B86'],
    gradient2: ['#22222E', '#12121E'],
  },
};

export default theme;

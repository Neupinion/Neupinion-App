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
  gradient: string;
}

interface Theme {
  color: ColorPalette;
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
    gray4: '#EFEFEF',
    white: '#FFFFFF',
    gradient: 'rgba(34, 34, 46, 1)',
  },
};

export default theme;

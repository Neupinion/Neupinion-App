interface PretendardFont {
  bold: string;
  extraBold: string;
  extraLight: string;
  light: string;
  medium: string;
}

interface FontFamily {
  pretendard: PretendardFont;
}

const fontFamily: FontFamily = {
  pretendard: {
    bold: 'pretendard-bold',
    extraBold: 'pretendard-extrabold',
    extraLight: 'pretendard-extralight',
    light: 'pretendard-light',
    medium: 'pretendard-medium',
  },
};

export default fontFamily;

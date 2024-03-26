import {View,Text, StyleSheet} from "react-native";
import React from 'react';
import Markdown from "react-native-markdown-display";
import theme from "../shared/styles/theme";

const copy = '# 내 프로젝트\n' +
  '\n' +
  '이 프로젝트는 리액트 네이티브를 사용하여 모바일 애플리케이션을 개발하는 데 목적이 있습니다.\n' +
  '\n' +
  '## 주요 기능\n' +
  '\n' +
  '- 사용자는 로그인하여 개인화된 콘텐츠를 볼 수 있습니다.\n' +
  '- 사용자는 카테고리별로 콘텐츠를 검색할 수 있습니다.\n' +
  '- 사용자는 즐겨찾기 기능을 사용하여 콘텐츠를 저장할 수 있습니다.\n' +
  '\n' +
  '## 기술 스택\n' +
  '\n' +
  '- React Native\n' +
  '- Redux\n' +
  '- React Navigation\n' +
  '- Axios (또는 다른 HTTP 클라이언트)';
const MarkDownPage = () => {
  return (
    <View style={styles.container}>
      <Markdown style={markdownStyles}>{copy}</Markdown>
    </View>
  );
};
const markdownStyles = StyleSheet.create({
  heading1: {
    fontSize: 32,
    backgroundColor: '#000000',
    color: theme.color.main,
  },
  heading2: {
    fontSize: 24,
  },
  heading3: {
    fontSize: 18,
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default MarkDownPage;
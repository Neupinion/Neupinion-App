import React from 'react';
import { render } from '@testing-library/react-native';
import AfterIssueSlider from './AfterIssueSlider';

describe('AfterIssueSlider component', () => {
  it('afterNews 배열이 empty 자료형일 때 item 이 하나만 랜더링 되는가', () => {
    // null 일 때
    // react-native 컴포넌트를 @testing-library/react-native 패키지의 render 함수를 통해 렌더링함
    const screen = render(<AfterIssueSlider afterNews={null} />);
    const text1 = screen.getByText('내가 투표한 기사의 새소식을 알려드려요!');
    const text2 = screen.getByText('이슈에 투표를 하면, 관련 기사를 빠르게 전해드려요');
    expect(text1).toBeDefined();
    expect(text2).toBeDefined();
  });
  it('afterNews 배열이 empty 자료형일 때 item 이 하나만 랜더링 되는가', () => {
    // empty 자료형일 떄
    const screen = render(<AfterIssueSlider afterNews={[]} />);
    const text1 = screen.getByText('내가 투표한 기사의 새소식을 알려드려요!');
    const text2 = screen.getByText('이슈에 투표를 하면, 관련 기사를 빠르게 전해드려요');
    expect(text1).toBeDefined();
    expect(text2).toBeDefined();
  });

  it('renders "더 많은 후속보도 확인하기" as the titleText of the last item when afterNews is not null and not an empty array', () => {
    // Render component with non-empty afterNews
    const afterNews = [
      {
        id: 1,
        title: 'First Item Title',
        voted: false,
        createdAt: '',
        reprocessedIssueTitle: '',
      },
      {
        id: 2,
        title: 'Second Item Title',
        voted: false,
        createdAt: '',
        reprocessedIssueTitle: '',
      },
    ];
    const screen = render(<AfterIssueSlider afterNews={afterNews} />);
    const titleText = screen.getByText('더 많은 후속보도 확인하기');
    expect(titleText).toBeDefined();
  });
});

import React from 'react';
import { render } from '@testing-library/react-native';
import AfterIssueSlider from './AfterIssueSlider';

describe('AfterIssueSlider component', () => {
  it('renders only one item with correct text when afterNews is null or empty array', () => {
    // Render component with empty afterNews
    const { queryByText } = render(<AfterIssueSlider afterNews={null} />);

    // Expect FlatList to render only one item
    expect(queryByText('내가 투표한 기사의 새소식을 알려드려요!')).toBeDefined();
    expect(queryByText('이슈에 투표를 하면, 관련 기사를 빠르게 전해드려요')).toBeDefined();
    expect(queryByText('더 많은 후속보도 확인하기')).toBeNull();

    // Render component with afterNews array of length 0
    const { queryAllByText } = render(<AfterIssueSlider afterNews={[]} />);

    // Expect FlatList to render only one item
    expect(queryAllByText('내가 투표한 기사의 새소식을 알려드려요!').length).toBe(1);
    expect(queryAllByText('이슈에 투표를 하면, 관련 기사를 빠르게 전해드려요').length).toBe(1);
    expect(queryByText('더 많은 후속보도 확인하기')).toBeNull();
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
    const { queryAllByText } = render(<AfterIssueSlider afterNews={afterNews} />);

    // Find all titleText elements in the FlatList
    const titleTextElements = queryAllByText('더 많은 후속보도 확인하기');

    // Expect the length of titleTextElements to be 1
    expect(titleTextElements.length).toBe(1);
  });
});

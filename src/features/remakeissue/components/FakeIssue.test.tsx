import React from 'react';
import { render, screen } from '@testing-library/react-native';
import FakeIssueSlider from './FakeIssueSlider';
import reProcessedIssueDummy from '../../../dummy/ReProcessedIssueDummy';
import { ReProcessedIssue } from '../../../shared/types/news';

describe('가짜뉴스 카드뉴스 : 재가공 이슈 컨텐츠', () => {
  it('정상적인 데이터가 들어왔을때의 ui를 테스트한다..', () => {
    const reprocessedIssue = reProcessedIssueDummy;

    render(<FakeIssueSlider fakeNews={reprocessedIssue} />);

    //슬라이더가 정상적으로 렌더링 되는지
    expect(screen.getByTestId('FlatList')).toBeTruthy();

    //인디케이터 갯수와 데이터의 갯수가 일치하는지
    const allElementsIndicator = screen.queryAllByTestId(/indicator_/);
    expect(reprocessedIssue.length === allElementsIndicator.length);

    //데이터 갯수와 카드 갯수가 일치하는지
    const allElementsCard = screen.queryAllByTestId(/Animation_Card_/);
    expect(reprocessedIssue.length === allElementsCard.length);
  });

  it('데이터가 들어오지 않았을때의 ui를 테스트한다..', () => {
    const reprocessedIssue: ReProcessedIssue[] = [];

    render(<FakeIssueSlider fakeNews={reprocessedIssue} />);

    //데이터가 없다는 ui가 정상적으로 렌더링 되는지
    expect(screen.getByTestId('EmptyData')).toBeTruthy();
  });
});

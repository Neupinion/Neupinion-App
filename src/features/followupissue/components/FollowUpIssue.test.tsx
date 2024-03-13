import React from 'react';
import followUpIssueDummy from '../../../dummy/FollowUpIssueDummy';
import { render, screen } from '@testing-library/react-native';
import FollowUpIssueSlider from './FollowUpIssueSlider';

describe('후속 이슈 메인페이지 하단 : 후속 이슈 컨텐츠', () => {
  it('정상적인 데이터가 들어왔을때의 ui를 테스트한다..', () => {
    const followupIssue = followUpIssueDummy;

    render(<FollowUpIssueSlider followUpIssue={followupIssue} />);

    //슬라이더가 정상적으로 렌더링 되는지
    expect(screen.getByTestId('FlatList')).toBeTruthy();

    //인디케이터 갯수와 데이터의 갯수가 일치하는지
    const allElementsIndicator = screen.queryAllByTestId(/indicator_/);
    expect(followupIssue.length === allElementsIndicator.length);

    //데이터 갯수와 카드 갯수가 일치하는지
    const allElementsCard = screen.queryAllByTestId(/Animation_Card_/);
    expect(followupIssue.length === allElementsCard.length);
  });
});

import React from 'react';
import { render } from '@testing-library/react-native';
import AfterIssueItem from './AfterIssueItem';

describe('AfterIssueItem component', () => {
  it('correctly applies numberOfLines={1} and ellipsizeMode="tail" to titleText when title is longer than one line', () => {
    // Define a long title that spans across multiple lines
    const longTitle =
      'This is a very long title that will span across multiple lines when rendered';

    // Render AfterIssueItem with a long title
    const { queryAllByText } = render(
      <AfterIssueItem
        item={{
          id: 1,
          title: longTitle,
          voted: false,
          reprocessedIssueTitle: '재가공 이슈 제목',
          createdAt: '2024-01-08T11:44:30.327959',
        }}
      />,
    );
    const titleTextElements = queryAllByText(longTitle);

    // Expect titleText not to be found in the component
    // expect(titleTextElements).toHaveLength(0);

    // Check if the titleText has numberOfLines={1} and ellipsizeMode="tail" applied
    titleTextElements.forEach((titleText) => {
      expect(titleText.props.numberOfLines).toBe(1);
      expect(titleText.props.ellipsizeMode).toBe('tail');
    });
  });
});

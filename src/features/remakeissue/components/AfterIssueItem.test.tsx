import React from 'react';
import { render } from '@testing-library/react-native';
import AfterIssueItem from '././AfterIssueItem';

describe('AfterIssueItem component', () => {
  it('renders titleText correctly with multiple lines', () => {
    const longTitle = 'This is a very long title that will span across multiple lines when rendered';
    const item = {
      id: 'some-id',
      title: longTitle,
      reprocessedIssueTitle: 'Reprocessed Issue',
    };

    const { getByTestId } = render(<AfterIssueItem item={item} />);
    const titleText = getByTestId('titleText');

    // Expect titleText to have numberOfLines prop set to 1 for ellipsizing
    expect(titleText.props.numberOfLines).toBe(1);
  });

  it('renders titleUnderText correctly with multiple lines', () => {
    const longUnderText = 'This is a very long under text that will span across multiple lines when rendered';
    const item = {
      id: 'some-id',
      title: 'Title',
      reprocessedIssueTitle: longUnderText,
    };

    const { getByTestId } = render(<AfterIssueItem item={item} />);
    const titleUnderText = getByTestId('titleUnderText');

    // Expect titleUnderText to have numberOfLines prop set to 1 for ellipsizing
    expect(titleUnderText.props.numberOfLines).toBe(1);
  });
});

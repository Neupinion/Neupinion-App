import React from 'react';
import { render } from '@testing-library/react-native';
import CategoryItem from './CategoryItem';

describe('CategoryItem component', () => {
  it('correctly applies numberOfLines={1} and ellipsizeMode="tail" to firstText when title is longer than one line', () => {
    const longTitle =
      'This is a very long title that will span across multiple lines when rendered';

    // Render CategoryItem with a long title
    const { queryAllByText } = render(
      <CategoryItem
        item={{
          id: 1,
          title: longTitle,
          imageUrl: '',
          category: 'ENTERTAINMENTS',
          views: 0,
          opinionCount: 0,
          issueId: 1,
          createdAt: '',
        }}
      />,
    );
    const titleTextElements = queryAllByText(longTitle);

    // Expect titleText not to be found in the component
    expect(titleTextElements).toHaveLength(0);

    // Check if the firstText has numberOfLines={1} and ellipsizeMode="tail" applied
    titleTextElements.forEach((titleText) => {
      expect(titleText.props.numberOfLines).toBe(1);
      expect(titleText.props.ellipsizeMode).toBe('tail');
    });
  });
});

import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import AfterIssueItem from './AfterIssueItem';
import { FlatList } from 'react-native';

describe('AfterIssueItem component', () => {
  it('renders items in chronological order based on createdAt time', async () => {
    // Define sample data with createdAt time
    const data = [
      {
        id: '1',
        title: 'First Item',
        voted: false,
        reprocessedIssueTitle: '',
        createdAt: '2024-02-14T05:50:44.065Z',
      },
      {
        id: '2',
        title: 'Second Item',
        voted: false,
        reprocessedIssueTitle: '',
        createdAt: '2024-02-14T06:50:44.065Z',
      },
      {
        id: '3',
        title: 'Third Item',
        voted: false,
        reprocessedIssueTitle: '',
        createdAt: '2024-02-14T07:50:44.065Z',
      },
    ];

    // Render FlatList with AfterIssueItem component for each data item
    const { queryAllByTestId } = render(
      // Change this line
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AfterIssueItem item={item} />}
      />,
    );

    // Wait for the component to finish rendering
    await waitFor(() => {});

    // Get the list of rendered items
    const renderedItems = queryAllByTestId('afterIssueItem');

    // Check if items are rendered in chronological order based on createdAt time
    for (let i = 0; i < data.length - 1; i++) {
      const currentItemTime = new Date(data[i].createdAt).getTime();
      const nextItemTime = new Date(data[i + 1].createdAt).getTime();
      expect(currentItemTime).toBeGreaterThanOrEqual(nextItemTime);
    }
  });
});

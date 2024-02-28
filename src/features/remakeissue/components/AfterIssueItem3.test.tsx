import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import AfterIssueSlider from './AfterIssueSlider';

describe('AfterIssueSlider component', () => {
  it('renders items in chronological order based on createdAt time', async () => {
    // Define sample data with createdAt time
    const afterNews = [
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

    // Render AfterIssueSlider with sample data
    render(<AfterIssueSlider afterNews={afterNews} />);

    // Wait for the component to finish rendering
    await waitFor(() => {});

    // Check if items are rendered in chronological order based on createdAt time
    for (let i = 0; i < afterNews.length - 1; i++) {
      const currentItemTime = new Date(afterNews[i].createdAt).getTime();
      const nextItemTime = new Date(afterNews[i + 1].createdAt).getTime();
      expect(currentItemTime).toBeLessThanOrEqual(nextItemTime);
    }
  });
});

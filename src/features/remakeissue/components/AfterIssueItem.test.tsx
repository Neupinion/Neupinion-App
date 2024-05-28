// import React from 'react';
// import { render } from '@testing-library/react-native';
// import AfterIssueItem from './AfterIssueItem';
//
// describe('AfterIssueItem component', () => {
//   it('titleText 가 한줄울 넘어갈 때 numberOfLines={1} and ellipsizeMode="tail"을 랜더링 하는가', () => {
//     const longTitle =
//       'This is a very long title that will span across multiple lines when rendered';
//
//     // Render AfterIssueItem with a long title
//     const { getByText } = render(
//       <AfterIssueItem
//         item={{
//           issueId: 1,
//           title: longTitle,
//           voted: false,
//           reprocessedIssueTitle: '재가공 이슈 제목',
//           createdAt: '2024-01-08T11:44:30.327959',
//         }}
//       />,
//     );
//     const titleText = getByText(longTitle);
//     expect(titleText.props.numberOfLines).toBe(1);
//     expect(titleText.props.ellipsizeMode).toBe('tail');
//   });
// });

import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import { DateProvider } from '../provider/DateProvider';
import DateModal from './DateModal';
import { cvtParamDate } from '../constants/cvtParamDate';

describe('DateModal', () => {
  it('open과 close되는 과정이 알맞게 이루어져야한다.', async () => {
    const handleClose = jest.fn();

    render(
      <DateProvider>
        <DateModal closeModal={handleClose} />
      </DateProvider>,
    );

    //isOpen을 true로 설정하여 모달이 열리는지 확인한다.
    expect(screen.getByText('날짜 선택')).toBeTruthy();

    //dim화면을 눌렀을 때, 모달이 닫히는지 확인한다.
    fireEvent.press(screen.getByTestId('dim-button'));

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    });

    //날짜를 눌렀을 때, 모달이 닫히는지 확인한다.
    fireEvent.press(screen.getByTestId('undefined.day_' + cvtParamDate(new Date())));

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    });
  });
});

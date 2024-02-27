import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { DateProvider } from '../provider/DateProvider';
import DateModal from './DateModal';

describe('DateModal', () => {
  it('open과 close되는 과정이 알맞게 이루어쟈아한다.', () => {
    const handleClose = jest.fn();
    render(
      <DateProvider>
        <DateModal isOpen={true} onClose={handleClose} />
      </DateProvider>,
    );

    //isOpen을 true로 설정하여 모달이 열리는지 확인한다.
    expect(screen.getByText('날짜 선택')).toBeTruthy();

    //dim화면 클릭 시 모달이 닫히는지 확인

    // 날짜 선택 시 모달이 닫히는지 확인
  });
});

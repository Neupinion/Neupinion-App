import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../shared/styles/theme';
import OpinionPostItPopup from '../features/opinionpost/popup/OpinionPostItPopup';

const TestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const titleProps: string =
    '    블룸버그통신 등에 따르면 22일(현지 시간) 오전 9시를 전후 로 미 워싱턴DC에 있는 펜타곤으로 보이는 건물에서 검은 연기가 피어오르는 사진이 트위터를 통해 국내외로 빠르게 확산했다.';

  const opinionProps: string =
    '최초로 게시된 곳이 공신력 있는 매체가 아니고 트위터라서 신뢰도가 떨어지는 듯. 계정도 그냥 개인 계정인 것 같아서 추가적인 확인이 필요할 것 같다. 최초로 게시된 곳이 공신력 있는 매체가 아니고 트위터라서 신뢰도가 떨어지는 듯. 계정도 그냥 개인 계정인 것 같아서 추가적인 확인이 필요할 것 같다. 최초로 게시된 곳이 공신력 있는 매체가 아니고 트위터라서 신뢰도가 떨어지는 듯. 계정도 그냥 개인 계정인 곳이 공신력 있는 매체가 아니고 트위터라서 신뢰도가 떨어지는 듯. 계정도 그냥 개인 계정인 곳이 공신력 있는 매체가 아니고 트위터.';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ width: 200, height: 100, backgroundColor: 'white' }}
        onPress={onCloseModal}
      >
        <Text style={{ color: 'black' }}>팝업 Open</Text>
      </TouchableOpacity>
      {isModalOpen && (
        <OpinionPostItPopup closeModal={onCloseModal} title={titleProps} opinion={opinionProps} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TestPage;

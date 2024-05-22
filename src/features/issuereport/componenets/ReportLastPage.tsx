import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ReportLastPageProps {
  onClose: () => void;
}

const ReportLastPage = ({ onClose }: ReportLastPageProps) => {
  return (
    <View>
      <TouchableOpacity onPress={onClose}>
        <Text>기사 보러가기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportLastPage;

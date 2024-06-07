import React from 'react';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import CheckSvg from '../../../assets/icon/opinionpurplecheck.svg';
import { WithLocalSvg } from 'react-native-svg/css';
import { useRecoilValue } from 'recoil';
import { opinionPostActivityState, opinionPostState } from '../../../recoil/opinionPostState';
import { patchReprocessedIssueOpinion, postReprocessedIssueOpinion } from '../remotes/opinion';
import useFetch from '../../../shared/hooks/useFetch';

interface OpinionCheckButtonProps {
  onPress: () => void;
  activity: string;
}

const OpinionCheckButton = ({ onPress, activity }: OpinionCheckButtonProps) => {
  const opinionPost = useRecoilValue(opinionPostState);
  const opinionPostActivity = useRecoilValue(opinionPostActivityState);
  const submitOpinion = () => {
    const { editMode, opinionId, sentenceIndex, text, isReliable, issueId } = opinionPost;

    if (editMode) {
      return patchReprocessedIssueOpinion(opinionId, sentenceIndex, text, isReliable);
    } else {
      return postReprocessedIssueOpinion(sentenceIndex, issueId, text, isReliable);
    }
  };

  const { isLoading, fetchData } = useFetch(submitOpinion, false);

  const onClickConfirmButton = async () => {
    if (activity == 'OpinionPost' && !isLoading) {
      if (
        opinionPostActivity.sentenceDefined &&
        opinionPostActivity.reliableDefined &&
        opinionPost.text.length
      ) {
        await fetchData().then(() => {
          onPress();
        });
      }
    }

    if (activity == 'OpinionPin') {
      if (opinionPostActivity.sentenceDefined) {
        onPress();
      }
    }
  };

  return (
    <TouchableOpacity onPress={onClickConfirmButton} key="check">
      <WithLocalSvg height={20} asset={CheckSvg as ImageSourcePropType} />
    </TouchableOpacity>
  );
};

export default OpinionCheckButton;

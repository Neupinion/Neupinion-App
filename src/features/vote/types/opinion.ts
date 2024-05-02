export interface Opinion {
  id: number;
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  isReliable: boolean;
  paragraphId: number;
  paragraphContent: string;
  content: string;
  likeCount: number;
  isLiked: boolean;
}

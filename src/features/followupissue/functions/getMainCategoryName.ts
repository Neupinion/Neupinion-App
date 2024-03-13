export enum MainCategory {
  All = 0,
  Voted = 1,
}

export function getMainCategoryName(mainCategoryId: MainCategory): string {
  switch (mainCategoryId) {
    case MainCategory.All:
      return '전체';
    case MainCategory.Voted:
      return '내가 투표한 이슈';
    default:
      return '알 수 없는 카테고리';
  }
}

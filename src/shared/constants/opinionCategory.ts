export const mainCategories = ['전체', '문단별 보기'];
export const subCategories = ['전체', '신뢰', '의심'];

export const getSortType = (dropDownCategory: string) => {
  switch (dropDownCategory) {
    case '인기순':
      return 'POPULAR';
    case '최신순':
      return 'RECENT';
    default:
      return 'RECENT';
  }
};

export const getCategoryType = (reliabilityCategory: string) => {
  switch (reliabilityCategory) {
    case '전체':
      return 'ALL';
    case '신뢰':
      return 'TRUST';
    case '의심':
      return 'DOUBT';
    default:
      return 'ALL';
  }
};

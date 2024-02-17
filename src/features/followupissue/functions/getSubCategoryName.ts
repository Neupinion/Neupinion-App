export enum SubCategory {
  Entertainment = 0,
  Politics = 1,
  Economy = 2,
  Society = 3,
  World = 4,
  Sports = 5,
  IT = 6,
}

export function getSubCategoryName(subCategoryId: SubCategory): string {
  switch (subCategoryId) {
    case SubCategory.Entertainment:
      return '연예';
    case SubCategory.Politics:
      return '정치';
    case SubCategory.Economy:
      return '경제';
    case SubCategory.Society:
      return '사회';
    case SubCategory.World:
      return '세계';
    case SubCategory.Sports:
      return '스포츠';
    case SubCategory.IT:
      return 'IT';
    default:
      return '알 수 없는 카테고리';
  }
}

export function getSubCategoryNameApi(subCategoryId: SubCategory): string {
  switch (subCategoryId) {
    case SubCategory.Entertainment:
      return 'ENTERTAINMENTS';
    case SubCategory.Politics:
      return 'POLITICS';
    case SubCategory.Economy:
      return 'ECONOMY';
    case SubCategory.Society:
      return 'SOCIETY';
    case SubCategory.World:
      return 'WORLD';
    case SubCategory.Sports:
      return 'SPORTS';
    case SubCategory.IT:
      return 'IT';
    default:
      return '알 수 없는 카테고리';
  }
}

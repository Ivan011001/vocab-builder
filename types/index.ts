export interface ICategory {
  id: string;
  name: string;
}

export interface IRecommend {
  id: string;
  word: string;
  translation: string;
  category: string;
}

export interface IDictionary {
  id: string;
  word: string;
  translation: string;
  category: string;
  progress: number;
}

export interface IMetaPagination {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

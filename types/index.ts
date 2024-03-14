import { VerbType } from "@prisma/client";

export interface ICategory {
  id: string;
  name: string;
}

export interface IRecommend {
  id: string;
  word: string;
  translation: string;
  category: string;
  verbType: VerbType | null;
}

export interface IDictionary {
  id: string;
  word: string;
  translation: string;
  category: string;
  verbType: VerbType | null;
  progress: number;
}

export interface IMetaPagination {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

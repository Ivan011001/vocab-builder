export interface ICategorie {
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

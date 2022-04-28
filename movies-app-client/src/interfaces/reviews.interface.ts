export interface IReviewResponse {
  id: number;
  results: IReview[];
}

export interface IReview {
  author: string;
  content: string;
  created_at: string;
  id: number;
}

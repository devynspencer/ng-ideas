export interface Comment {
  id: string;
  created: Date;
  body: string;
}

export interface CommentDto {
  comment: string;
}

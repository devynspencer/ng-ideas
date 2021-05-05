import { User } from '@app/models/user.model';

export interface Idea {
  id: string;
  created: Date;
  updated: Date;
  idea: string;
  description: string;
  author: User;
  upvotes?: number;
  downvotes?: number;
}

export interface IdeaDto {
  id?: string;
  idea: string;
  description: string;
}

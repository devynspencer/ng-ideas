import { Idea } from '@app/models/idea.model';

export interface User {
  id: string;
  username: string;
  created: Date;
  token?: string;
  bookmarks?: Idea[];
}

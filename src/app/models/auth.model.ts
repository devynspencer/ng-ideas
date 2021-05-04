export type AuthType = 'login' | 'register';

export interface AuthDto {
  username: string;
  password: string;
}

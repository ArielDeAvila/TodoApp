export type UserRequestDto = {
  email: string | null;
  userName: string | null;
  password: string | null;
  verifyPassword: string | null;
};

export type LoginRequestDto = {
  email: string | null;
  password: string | null;
};
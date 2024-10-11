import { User } from "src/database/user.entity";
export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
];
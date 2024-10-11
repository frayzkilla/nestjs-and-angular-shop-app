import { Sequelize } from 'sequelize-typescript';
import { User } from './user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '',
        database: 'coursework',
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
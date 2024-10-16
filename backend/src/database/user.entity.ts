import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {

  @Column
  name: string;

  @Column
  password: string;

  @Column
  role: string;
}
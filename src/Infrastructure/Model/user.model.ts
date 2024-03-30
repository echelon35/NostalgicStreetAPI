import {
  DataType,
  Model,
  Table,
  Column,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Role } from './role.model';
import { Memory } from './memory.model';

@Table({
  tableName: 'users',
  freezeTableName: true
})
export class User extends Model {
  @Column({ type: DataType.STRING })
  firstname: string;

  @Column(DataType.STRING)
  lastname: string;

  @Column(DataType.STRING)
  username: string;

  @Column(DataType.STRING)
  password: string;

  @Column(DataType.TEXT)
  biography: string;

  @BelongsTo(() => Role)
  @Column(DataType.INTEGER)
  roleId: number;

}

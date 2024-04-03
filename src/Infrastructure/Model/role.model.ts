import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';

@Table({
  tableName: 'roles',
  freezeTableName: true
})
export class Role extends Model {
  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => User)
  users: User[];
}

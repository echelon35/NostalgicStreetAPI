import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'roles',
  freezeTableName: true
})
export class Role extends Model {
  @Column({ type: DataType.STRING })
  name: string;
}

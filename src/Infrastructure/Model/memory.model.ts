import { Point } from 'geojson';
import {
  DataType,
  Model,
  Table,
  Column,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table({
  tableName: 'memories',
  freezeTableName: true
})
export class Memory extends Model {
  @Column({ type: DataType.GEOMETRY })
  point: Point;

  @Column(DataType.DATE)
  start_period: Date;

  @Column(DataType.DATE)
  end_period: Date;

  @Column(DataType.STRING(255))
  picture_path: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.ARRAY(DataType.STRING))
  keywords: string[];

  @BelongsTo(() => User)
  @Column(DataType.INTEGER)
  userId: number;
}

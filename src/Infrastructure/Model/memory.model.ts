import { Point } from 'geojson';
import {
  DataType,
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Comment } from './comment.model';
import { IMemory } from 'src/Memory/Interfaces/memory.interface';

@Table({
  tableName: 'memories',
  freezeTableName: true
})
export class Memory extends Model<IMemory> {
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

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Comment)
  comments: Comment[]
}

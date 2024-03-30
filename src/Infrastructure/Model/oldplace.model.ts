import { Point } from 'geojson';
import { DataType, Model, Table, Column } from 'sequelize-typescript';

@Table({
  //Ne pas créer les colonnes CreatedAt et UpdatedAt
  tableName: 'old-place',
})
export class OldPlace extends Model {
  @Column({ type: DataType.GEOMETRY })
  point: Point;

  @Column(DataType.STRING(255))
  legend: string;

  @Column(DataType.BOOLEAN)
  disponible: boolean;

  @Column(DataType.ARRAY(DataType.STRING))
  keywords: string[];
}

import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { Memory } from "./memory.model";

@Table({
    tableName: 'comments',
    freezeTableName: true
})
export class Comment extends Model {
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId: number;
    @ForeignKey(() => Memory)
    @Column(DataType.INTEGER)
    memoryId: number;
    @Column(DataType.STRING)
    content: string;
}
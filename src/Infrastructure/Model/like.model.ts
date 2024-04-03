import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { Memory } from "./memory.model";

@Table({
    tableName: 'likes',
    freezeTableName: true
})
export class Like extends Model {
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId: number;
    @ForeignKey(() => Memory)
    @Column(DataType.INTEGER)
    memoryId: number;
}
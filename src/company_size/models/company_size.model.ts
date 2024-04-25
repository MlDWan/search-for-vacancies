import { Column, DataType, IsUUID, Model, Table } from 'sequelize-typescript';

@Table
export class CompanySize extends Model {
  @IsUUID(4)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column
  size: string;
}

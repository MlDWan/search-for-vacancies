import { Column, DataType, IsUUID, Model, Table } from 'sequelize-typescript';

@Table
export class Company extends Model {
  @IsUUID(4)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column
  name: string;

  @Column
  location: string;

  @Column
  indastry: string;

  @Column
  company_size: string;

  @Column
  company_description: string;

  @Column
  owner_id: string;

  ///добавить открытые вакансии
}

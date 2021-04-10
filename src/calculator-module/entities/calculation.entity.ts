import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum CalculationStatus {
  done = 'DONE',
  pending = 'PENDING',
  cancel = 'CANCEL',
}

@Entity({ name: 'calculation' })
export class CalculationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: null,
  })
  result: string;

  @Column({
    default: CalculationStatus.pending
  })
  status: CalculationStatus;
}
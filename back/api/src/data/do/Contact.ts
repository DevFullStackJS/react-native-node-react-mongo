import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('contact')
export class ContactDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  icon: string;

  @Column({nullable: true, unique: false})
  name: string;

  @Column({nullable: true, unique: false})
  active: boolean;

  @Column({nullable: true, unique: false})
  range: number;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}


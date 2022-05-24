import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('detail')
export class DetailDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  produit: string;

  @Column({nullable: true, unique: false})
  utilisateur: string;

  @Column({nullable: true, unique: false})
  nb: string;

  @Column({nullable: true, unique: false})
  status: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}


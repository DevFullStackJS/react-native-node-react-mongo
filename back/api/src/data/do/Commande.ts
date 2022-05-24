import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('commande')
export class CommandeDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  produits: string;

  @Column({nullable: true, unique: false})
  sous_total: number;

  @Column({nullable: true, unique: false})
  frais: number;

  @Column({nullable: true, unique: false})
  date_livraison: string;

  @Column({nullable: true, unique: false})
  code_promo: string;

  @Column({nullable: true, unique: false})
  type_payment: string;

  @Column({nullable: true, unique: false})
  user: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}


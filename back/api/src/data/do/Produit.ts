import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('produit')
export class ProduitDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  name: string;

  @Column({nullable: true, unique: false})
  size: string;

  @Column({nullable: true, unique: false})
  color: string;

  @Column({nullable: true, unique: false})
  image: string;

  @Column({nullable: true, unique: false})
  description: string;

  @Column({nullable: true, unique: false})
  price: string;

  @Column({nullable: true, unique: false})
  categorie: string;

  @Column({nullable: true, unique: false})
  info: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}


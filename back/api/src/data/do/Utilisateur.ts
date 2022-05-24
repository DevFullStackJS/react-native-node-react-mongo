import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('utilisateur')
export class UtilisateurDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  nom: string;

  @Column({nullable: true, unique: false})
  prenom: string;

  @Column({nullable: false, unique: true})
  email: string;

  @Column({nullable: true, unique: false})
  role: number;

  @Column({nullable: true, unique: false})
  password: string;

  @Column({nullable: true, unique: false})
  phone: string;

  @Column({nullable: true, unique: false})
  imageUrl: string;

  @Column({nullable: true, unique: false})
  adresse: string;

  @Column({nullable: true, unique: false})
  ville: string;

  @Column({nullable: true, unique: false})
  dateInscription: string;

  @Column({nullable: true, unique: false})
  dateNaissance: string;

  @Column({nullable: true, unique: false})
  dateDerniereConnexion: string;

  @Column({nullable: true, unique: false})
  dateModification: string;

  @Column({nullable: true, unique: false})
  actif: boolean;

  @Column({nullable: true, unique: false})
  socketId: string;

  @Column({nullable: true, unique: false})
  nomPrenom: string;

  @Column({nullable: true, unique: false})
  code: string;

  @Column({nullable: true, unique: false})
  googleId: string;

  @Column({nullable: true, unique: false})
  facebookId: string;

  @Column({nullable: true, unique: false})
  appleId: string;

  @Column({nullable: true, unique: false})
  online: boolean;

  @Column({nullable: true, unique: false})
  lague: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}


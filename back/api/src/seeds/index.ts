import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import * as bcrypt from 'bcryptjs';
import { UtilisateurRepository } from '../repository/Utilisateur';

export class InitSeeds implements Seeder {
  // eslint-disable-next-line class-methods-use-this
  async run(factory: Factory, connection: Connection): Promise<void> {
    const user = connection.getCustomRepository(UtilisateurRepository);
    const user_count = await user.find({ email: "fullstackadmin@test.com" });
    console.log({ user_count });
    if (!(user_count.length > 0)) {
      await user.save([
        {
          password: await bcrypt.hashSync('123@fullstack', 10),
          nom: "User",
          prenom: "Fullstack",
          telephone: "",
          email: "fullstauser@test.com",
          ville: "Ville",
          adresse: "Adresse",
          // dateInscription: new Date(),
          imageUrl: "",
          role: 1,
          actif: false,
        },
      ]);

      await user.save([
        {
          password: await bcrypt.hashSync('admin@fullstack', 10),
          nom: "User",
          prenom: "Fullstack",
          telephone: "",
          email: "fullstackadmin@test.com",
          ville: "Ville",
          adresse: "Adresse",
          // dateInscription: new Date(),
          imageUrl: "",
          role: 4,
          actif: true,
        },
      ]);
    }
  }
}

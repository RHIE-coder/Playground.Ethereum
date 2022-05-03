import { DataSource } from "typeorm";
import { Lorem } from "../entity/Lorem";
import { User } from "../entity/User";

export async function run() {
  const AppDataSource = new DataSource({
    type: "sqlite",
    database: "sample.db",
    synchronize: true,
    logging: false,
    entities: [Lorem],
    migrations: [],
    subscribers: [],
  });

  // AppDataSource.initialize()
  //   .then(async () => {
  //     const userRepository = AppDataSource.getRepository(User);
  //     const allUsers = await userRepository.find();
  //     console.log(allUsers);
  //   })
  //   .catch((error) => console.log(error));
  // success code

  // Entity "Lorem" does not have a primary column. Primary column is required to have in all your entitie
  await AppDataSource.initialize();
  const userRepository = AppDataSource.getRepository(Lorem);
  const allUsers = await userRepository.find();
  console.log(allUsers);

  // const AppDataSource = new DataSource({
  //   type: "sqlite",
  //   database: "sample.sqlite",
  //   synchronize: true,
  //   logging: false,
  //   entities: [Lorem],
  //   migrations: [],
  //   subscribers: [],
  // });
  // // await AppDataSource.initialize();
  // const lorem = new Lorem();
  // lorem.info = "tester";
  // await AppDataSource.manager.save(lorem);
  // const allUsers = await AppDataSource.manager.find(Lorem);
  // console.log(allUsers);
  // fail code

  // const loremRepository = AppDataSource.getRepository(Lorem);
  // const lorem = new Lorem();
  // lorem.info = "tester";
  // loremRepository.save(lorem);
  // const allUsers = await loremRepository.find();
  // console.log(allUsers);
  // fail code
}

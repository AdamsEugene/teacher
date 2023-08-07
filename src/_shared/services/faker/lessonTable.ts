import { faker } from "@faker-js/faker";

interface Lesson {
  id: string;
  name: string;
  weekId: number;
  avatar: string;
  rating: number;
  progress: number;
}

export function createRandomLesson(): Lesson {
  return {
    id: faker.string.uuid(),
    name: faker.internet.userName(),
    weekId: faker.number.int(100),
    avatar: faker.image.avatar(),
    rating: faker.number.int(5),
    progress: faker.number.int(100),
  };
}

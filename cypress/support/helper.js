import { faker } from '@faker-js/faker';

export const randomUserData = {
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  username: faker.internet.userName(),
  password: Cypress.env('password'),
  confirmPassword: Cypress.env('password'),
  gender: 'Female',
};
import { text, password, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const User = list({
  // access:
  // ui:
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    // eslint-disable-next-line prettier/prettier
    password: password()
    // TODO: Add roles, cart and orders
    // eslint-disable-next-line prettier/prettier
  }
});

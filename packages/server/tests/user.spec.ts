import axios from 'axios';

const user = {
  email: 'jest3@example.com',
  name: 'jest',
  password: 'supersecret',
};

describe('User resolves', () => {
  test.skip('should register a user', async () => {
    const {
      data: { data },
    } = await axios.post('http://localhost:4000/graphql', {
      query: `
      mutation {
        register(options: { email: "${user.email}", password: "${user.password}", name: "${user.name}" }) {
          errors {
            field
            message
          }
          user {
            id
            name
            email
          }
        }
      }
      `,
    });
    expect(data.register.errors).toBeNull();
    ['id', 'name', 'email'].forEach((field) =>
      expect(data.register.user).toHaveProperty(field)
    );
  });
  test('should login a user', async () => {
    const {
      data: { data },
    } = await axios.post('http://localhost:4000/graphql', {
      query: `
      mutation {
        login(options: { email: "${user.email}", password: "${user.password}" }) {
          errors {
            field
            message
          }
          user {
            id
            name
            email
          }
        }
      }
      `,
    });
    expect(data.login.errors).toBeNull();
    ['id', 'name', 'email'].forEach((field) =>
      expect(data.login.user).toHaveProperty(field)
    );
  });
  test('should return a user', async () => {
    const {
      data: { data },
    } = await axios.post('http://localhost:40000/graphql', {
      query: `
      {
        me {
          id
          name
          email
        }
      }
      `,
    });
    expect(data.me.errors).toBeNull();
  });
});

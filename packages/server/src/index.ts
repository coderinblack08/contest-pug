import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import { port } from './constants';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/HelloResolver';

const main = async () => {
  await createConnection();

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.get('/', (_req, res) => res.redirect('/graphql'));

  app.listen(port, () =>
    console.log(`Graphql server lisenting on port ${port}`)
  );
};

main().catch((err) => console.error(err));

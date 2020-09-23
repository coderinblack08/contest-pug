import 'dotenv/config';
import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import { createConnection } from 'typeorm';
import { cookie_name, port, __prod__ } from './constants';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/HelloResolver';
import { UserResolver } from './resolvers/UserResolver';
import session from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';

const main = async () => {
  await createConnection();

  const app = express();

  app.use(
    cors({
      origin: __prod__
        ? 'https://contestpug.vercel.app'
        : 'http://localhost:3000',
      credentials: true,
    })
  );

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.use(
    session({
      name: cookie_name,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        secure: __prod__,
        sameSite: 'lax',
      },
      saveUninitialized: false,
      secret: process.env.SECRET as string,
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver],
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

import 'dotenv/config';
import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import { createConnection, getConnectionOptions } from 'typeorm';
import { graphqlUploadExpress } from 'graphql-upload';
import { cookie_name, port, __prod__ } from './constants';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/HelloResolver';
import { UserResolver } from './resolvers/UserResolver';
import session from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';
import { ProfilePictureResolver } from './resolvers/ProfilePictureResolver';
import path from 'path';
import { ContestResolver } from './resolvers/ContestResolver';
import { ProblemsResolvers } from './resolvers/ProblemsResolvers';
import { ShortAnswerResolver } from './resolvers/ShortAnswerResolver';
import { AnswersResolver } from './resolvers/ScoreResolver';

const main = async () => {
  const connectionOptions = await getConnectionOptions();

  Object.assign(connectionOptions, {
    database: process.env.TYPEORM_DATABASE ? 'test-contest-pug' : 'contest-pug',
  });

  const connection = await createConnection();
  await connection.runMigrations();

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
      secret: process.env.SESSION_SECRET as string,
      resave: false,
    })
  );

  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  app.use('/images', express.static(path.join(__dirname, '../images')));

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        UserResolver,
        HelloResolver,
        ContestResolver,
        AnswersResolver,
        ProblemsResolvers,
        ShortAnswerResolver,
        ProfilePictureResolver,
      ],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res, redis }),
    // extensions: [() => new BasicLogging()],
    uploads: false,
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.get('/', (_req, res) => res.redirect('/graphql'));

  app.listen(port, () =>
    console.log(`Graphql server lisenting on port ${port}`)
  );
};

main().catch((err) => console.error(err));

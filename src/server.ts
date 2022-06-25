import 'reflect-metadata';

import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import path from 'path';

import PingResolver from './resolvers/PingResolver'

async function main() {
    const schema = await buildSchema({
        resolvers: [
            PingResolver,
        ],
        emitSchemaFile: path.resolve(process.cwd(), 'schema.graphql'),
    });

    const server = new ApolloServer({
        schema,
    });

    const { url } = await server.listen();

    console.log(`Server running on ${url}`);
}

main();
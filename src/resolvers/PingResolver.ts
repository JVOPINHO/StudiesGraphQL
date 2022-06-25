import { Query, Resolver } from 'type-graphql';

@Resolver()
class PingResolver {
    @Query(() => String)
    async ping() {
        return 'pong!'
    }
}

export default PingResolver;
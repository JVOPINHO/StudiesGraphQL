import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import User from '../models/User';

const users: Array<User> = [
    {
        id: '001',
        username: 'Bea',
    },
    {
        id: '002',
        username: 'Bae',
    }
];


@Resolver(User)
class UsersResolver {

    @Query(() => [User])
    async Users() {
        return users;
    }

    @Query(() => User)
    async User(@Arg('id') id: string) {
        const user = users.find(user => user.id == id);

        if(!user) { 
            throw new Error('Invalid User')
        }

        return user
    }

    @Mutation(() => User)
    async ModifyUser(
        @Arg('id') id: string,
        @Arg('username') username: string,
    ) {
        const user = await this.User(id);

        user.username = username;

        return user;
    }
}

export default UsersResolver;
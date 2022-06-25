import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
class User {
    @Field(_type => ID)
    id: string;

    @Field()
    username: string;

    @Field()
    message?: string;
}

export default User;
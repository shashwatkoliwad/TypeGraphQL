import { MyContext } from "src/types/MyContext";
import { Resolver, Query, Ctx } from "type-graphql";
import { User } from "../../entities/User";

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true, complexity: 5 })
  async me(@Ctx() ctx: MyContext): Promise<User | undefined> {
    if (!ctx.req.session!.userId) {
      return undefined;
    }
    return User.findOne(ctx.req.session!.userId);
  }
}
  
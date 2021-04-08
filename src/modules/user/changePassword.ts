import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import bcrypt from "bcryptjs";
import { forgotPasswordPrefix } from "../constants/redisPrefixes";
import { redis } from "../../redis";
import { User } from "../../entities/User";
import { changePasswordInput } from "./changePassword/changePasswordInput";
import { MyContext } from "src/types/MyContext";

@Resolver()
export class changePasswordResolver {
  @Mutation(() => User, { nullable: true })
  async changePassword(
    @Arg("data") { token, password }: changePasswordInput,
    @Ctx() ctx: MyContext
  ): Promise<User | null> {
    const userId = await redis.get(forgotPasswordPrefix + token);

    if (!userId) {
      return null;
    }

    const user = await User.findOne(userId);

    if (!user) {
      return null;
    }
    await redis.del(forgotPasswordPrefix + token);
    user.password = await bcrypt.hash(password, 12);
    await user.save();

    ctx.req.session.userId = user.id;

    return user;
  }
}

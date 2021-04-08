import { changePasswordResolver } from "../modules/user/changePassword";
import { ConfirmUserResolver } from "../modules/user/confirmUser";
import { ForgotPasswordResolver } from "../modules/user/forgotPassword";
import { buildSchema } from "type-graphql";
import { LoginResolver } from "../modules/user/Login";
import { LogoutResolver } from "../modules/user/Logout";
import { MeResolver } from "../modules/user/Me";
import { RegisterResolver } from "../modules/user/Register";
import { CreateProductResolver, CreateUserResolver } from "../modules/user/CreateUser";
import { ProfilePictureResolver } from "../modules/user/ProfilePicture";

export const createSchema = () =>
  buildSchema({
    resolvers: [
        changePasswordResolver,
        ConfirmUserResolver,
        ForgotPasswordResolver,
        LoginResolver,
        LogoutResolver,
        MeResolver,
        RegisterResolver,
        CreateUserResolver,
        CreateProductResolver,
        ProfilePictureResolver
    ],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    },
  });

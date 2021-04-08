import { IsEmail, Length } from "class-validator";
// import { PasswordInput } from "../../../modules/shared/passwordInput";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExists";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1,255)
  firstName: string;

  @Field()
  @Length(1,255)
  lastName: string;

  @Field() 
  @IsEmail()
  @IsEmailAlreadyExist({message: "email alredy in use"})
  email: string;

  @Field()  
  // @Min(5)
  password: string;
}

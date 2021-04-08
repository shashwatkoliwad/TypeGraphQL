// import { PasswordInput } from "../../../modules/shared/passwordInput";
import { Field, InputType } from "type-graphql";

@InputType()
export class changePasswordInput {
 
  @Field()
  token: string;

  @Field()  
  // @Min(5)
  password: string;

}

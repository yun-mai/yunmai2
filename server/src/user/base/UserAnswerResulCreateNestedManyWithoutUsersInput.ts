/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserAnswerResulWhereUniqueInput } from "../../userAnswerResul/base/UserAnswerResulWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserAnswerResulCreateNestedManyWithoutUsersInput {
  @Field(() => [UserAnswerResulWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAnswerResulWhereUniqueInput],
  })
  connect?: Array<UserAnswerResulWhereUniqueInput>;
}

export { UserAnswerResulCreateNestedManyWithoutUsersInput as UserAnswerResulCreateNestedManyWithoutUsersInput };
/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsOptional,
  IsJSON,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { UserPointInfo } from "../../userPointInfo/base/UserPointInfo";
import { UserAnswerResul } from "../../userAnswerResul/base/UserAnswerResul";

@ObjectType()
class User {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => [UserPointInfo],
  })
  @ValidateNested()
  @Type(() => UserPointInfo)
  @IsOptional()
  userPointInfos?: Array<UserPointInfo>;

  @ApiProperty({
    required: false,
    type: () => [UserAnswerResul],
  })
  @ValidateNested()
  @Type(() => UserAnswerResul)
  @IsOptional()
  userAnswerResuls?: Array<UserAnswerResul>;
}

export { User as User };

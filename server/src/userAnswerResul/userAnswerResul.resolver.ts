import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserAnswerResulResolverBase } from "./base/userAnswerResul.resolver.base";
import { UserAnswerResul } from "./base/UserAnswerResul";
import { UserAnswerResulService } from "./userAnswerResul.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserAnswerResul)
export class UserAnswerResulResolver extends UserAnswerResulResolverBase {
  constructor(
    protected readonly service: UserAnswerResulService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserPointInfoResolverBase } from "./base/userPointInfo.resolver.base";
import { UserPointInfo } from "./base/UserPointInfo";
import { UserPointInfoService } from "./userPointInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserPointInfo)
export class UserPointInfoResolver extends UserPointInfoResolverBase {
  constructor(
    protected readonly service: UserPointInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

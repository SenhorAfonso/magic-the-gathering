import { JwtService } from '@nestjs/jwt';
import { GetUserByEmailUseCase } from '../users/get-user-by-email.usecase';
import { CreateUserUseCase } from '../users/create-user.usecase';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class AuthBaseUseCase {
  constructor(
    protected readonly getUserByEmailUseCase: GetUserByEmailUseCase,
    protected readonly jwtService: JwtService,
    protected readonly createUserUseCase: CreateUserUseCase,
  ) {}

  abstract execute(...args: any): any;
}

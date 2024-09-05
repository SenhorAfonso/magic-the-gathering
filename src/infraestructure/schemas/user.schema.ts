import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsString } from 'class-validator';

export enum UserRoles {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

@Schema()
export class User {
  @Prop()
  @IsString()
  first_name: string;

  @Prop()
  @IsString()
  last_name: string;

  @Prop()
  @IsString()
  username: string;

  @Prop()
  @IsString()
  email: string;

  @Prop()
  @IsString()
  password: string;

  @Prop({ enum: Object.values(UserRoles) })
  role: UserRoles;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = HydratedDocument<User>;

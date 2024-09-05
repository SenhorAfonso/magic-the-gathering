import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { RegisterUserDto } from 'src/application/dtos/users/register-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(payload: RegisterUserDto) {
    const user = await this.userModel.create(payload);
    return user;
  }

  async getUserByEmail(email: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async getUserById(id: string) {
    const user = await this.userModel.findById({ _id: id });
    return user;
  }

  async getAllUsers() {
    const users = await this.userModel.find({});
    return users;
  }

  async deleteUserById(id: string) {
    const user = await this.userModel.findByIdAndDelete({ _id: id });
    return user;
  }

  async updateUserUsername(id: string, payload: { username: string }) {
    const user = await this.userModel.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return user;
  }
}

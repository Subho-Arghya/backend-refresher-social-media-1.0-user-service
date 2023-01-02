/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body()user) {
    try {
      console.log("In create user method " , user)
    }
    catch(err) {
      console.log(err)
      return err
    }
  }
}
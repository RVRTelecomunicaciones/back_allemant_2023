import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { TokensService } from '../tokens/tokens.service';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { IToken } from '../tokens/interfaces/token.interface';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import { EmailService } from '@app/processors/helper/mail/helper.service.email';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UserNotFoundException } from '@app/exceptions/user-not-found.exception';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private tokenService: TokensService,
    private mailService: EmailService
  ) {}
  async login(user: User) {
    const tokens: IToken = await this.tokenService.generateJwtTokens(user);
    await this.tokenService.updateOrCreate(user.id, tokens.refreshToken);
    return {
      user,
      ...tokens,
    };
  }
  async validateUser(userLoginDto: LoginUserDto): Promise<User> {
    /* const user = await this.userService.findByCondition({
      select: ['id', 'name', 'email', 'password', 'isActivated'],
      where: { email: dto.email },
    }); */
    const user = await this.userService.findOne({
      email: userLoginDto.email,
    });

    if (!user) return null;

    const isPassEqual = await bcrypt.compare(userLoginDto.password, user.password);
    console.log(isPassEqual);

    if (!isPassEqual) {
      throw new UserNotFoundException();
    }

    return user;
  }

  async validateRefreshToken(refreshToken: string) {
    const payload = await this.tokenService.verifyJwtRefresh(refreshToken);
    console.log('payload');
    console.log(payload);

    const user = await this.getUserByRefresh(refreshToken, payload.email);

    console.log('validateRefreshToken');

    const token = await this.tokenService.generateAccessJwtTokens(user);
    return {
      email: user.email,
      ...token,
    };

    /* 
    const token = this.tokenService.findOneRefreshToken({ validateRefreshToken });
    console.log(token);
    if (!token) throw new UnauthorizedException();

    const tokens: IToken = this.tokenService.generateJwtTokens(user);
    await this.tokenService.updateOrCreate(user.id, tokens.refreshToken);

    return {
      ...tokens,
    }; */
  }

  async getUserByRefresh(refresh_token, email) {
    const user = await this.findByEmail(email);

    console.log('user');
    console.log(user);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    const token = await this.tokenService.findOne(user.id);
    console.log('user refreshtoken');
    console.log(token.refreshToken);
    console.log(refresh_token);
    /*  const is_equal = await bcrypt.compare(this.reverse(refresh_token), token.refreshToken);
    console.log('user is_equal');
    console.log(is_equal);
    if (!is_equal) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    } */

    return user;
  }

  async findByEmail(email: string) {
    console.log('user');
    console.log(email);
    return await this.userService.findOne({
      email: email,
    });
  }
  private reverse(s) {
    return s.split('').reverse().join('');
  }

  async register(createUserDto: CreateUserDto) {
    const userExist = await this.userService.getUserEntityByEmail(createUserDto.email);

    if (userExist) {
      throw new ConflictException('Un usuario con este correo electrónico ya existe');
    }

    /*     const activationLink = v4();
     */ const hashPassword = await bcrypt.hash(createUserDto.password, 10);

    const { password, ...userData } = await this.userService.signUp({
      ...createUserDto,
      password: hashPassword,
    });

    const tokens: IToken = this.tokenService.generateJwtTokens(userData);

    console.log(tokens);

    await this.tokenService.create(userData.id, tokens.refreshToken);

    /*     await this.mailService.sendVerifyEmailSendGrid(createUserDto.username, createUserDto.email, activationLink);
     */
    return {
      ...tokens,
    };

    /*   const user = new User();
    user.name = name;
    user.email = email;
    user.password = hashPassword;
    user.activationLink = activationLink;

    try {
      const createdUser = this.userService.signUp(user);

      const tokens: IToken = this.tokenService.generateJwtTokens(createdUser);
    console.log(tokens);
    await this.tokenService.create(createdUser., tokens.refreshToken);

      return {
        accessToken,
        email,
        emailValidationCode: user.emailValidationCode,
      };
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    } */
  }

  async activation(activationLink: string) {
    const user = await this.userService.findByCondition({ activationLink });

    console.log('1er Acticación');
    console.log(user);

    if (!user) {
      throw new BadRequestException('Enlace de activación no válido');
      console.log(user);
    }

    user.isActivated = true;
    this.userService.update(user.id, user);
  }

  /*  async verifyEmail(refreshtoken: string): Promise<void> {
    const refreshtokenVerification =
      await this.tokenService.findOneRefreshToken({
        refreshToken: refreshtoken,
      });
    console.log('LLEGO');

    console.log(refreshtokenVerification);
  } */
}

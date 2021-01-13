import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';
import User from '../models/user';

interface Request {
  email: string;
  password: string;
}

interface Response {
  token: string,
}

class AuthenticateUserService {
  public async execute({ email, password}: Request): Promise<Response>{
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email }});

    if(!user) {
      throw new Error('Email ou senha incorretos');
    }

    const passwordMatched = await compare(password, user.password);

    if(!passwordMatched) {
      throw new Error('Email ou senha incorretos');
    }

    const { secret, expiresIn} = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })

    return {
      token,
    }
  }
}

export default AuthenticateUserService;

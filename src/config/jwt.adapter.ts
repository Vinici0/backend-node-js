import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { envs } from "./envs";

const JWT_SEED = envs.JWT_SEED;

export class JwtAdapter {
  static generateToken(
    payload: object,
    duration: jwt.SignOptions['expiresIn'] = "2h"
  ): Promise<string | null> {
    return new Promise((resolve) => {
      const options: SignOptions = { expiresIn: duration };
      
      jwt.sign(
        payload,
        JWT_SEED as Secret,
        options,
        (err, token) => {
          if (err) return resolve(null);
          resolve(token || null);
        }
      );
    });
  }
}
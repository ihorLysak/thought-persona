import { JWTPayload, jwtVerify, JWTVerifyResult, SignJWT } from "jose";

type Constructor = {
  alorithm: string;
  secret: Uint8Array;
};

class BaseToken<T extends JWTPayload> {
  private alorithm: string;
  private secret: Uint8Array;

  constructor({ alorithm, secret }: Constructor) {
    this.alorithm = alorithm;
    this.secret = secret;
  }

  public async create({
    expirationTime,
    payload,
  }: {
    expirationTime: string;
    payload: T;
  }): Promise<string> {
    return await new SignJWT(payload)
      .setProtectedHeader({
        alg: this.alorithm,
      })
      .setIssuedAt()
      .setExpirationTime(expirationTime)
      .sign(this.secret);
  }

  public async decode(token: string): Promise<JWTVerifyResult<T>> {
    return await jwtVerify<T>(token, this.secret);
  }
}

export { BaseToken };

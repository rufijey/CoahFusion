export class TokensDto {
    readonly accessToken: string;
    readonly refreshToken: string;

    constructor(
        accessToken: string,
        refreshToken: string,
    ) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
    }
}
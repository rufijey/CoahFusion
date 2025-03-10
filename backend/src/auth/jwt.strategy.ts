import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.PRIVATE_KEY || 'secret',
        });
    }

    async validate(payload: any) {
        return {
            email: payload.email,
            id: payload.id,
            role: payload.role,
            coachProfileId: payload.coachProfileId,
        };
    }
}

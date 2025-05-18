import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../../models/User.js"

export default passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        },
        async (jwt_payload,done) =>{
            try {
                let user = await User.findOne({email: jwt_payload.email, online: true, role:3})
                if (user) {
                    return done(null,user)
                }else{
                    return done(null,null)
                }
            } catch (error) {
                return done(error,null)
            }
        }
    )
)


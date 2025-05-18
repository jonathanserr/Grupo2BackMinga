import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/User.js";


export default passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        },
        async (jwt_payload,done) =>{
            try {
                let user = await User.findOne({email: jwt_payload.email, online: true})
                if (user) {
                    return done(null,user)
                }else{
                    console.log(done)
                    return done(null,null)
                }
            } catch (error) {
                console.log(error)
                return done(error,null)
            }
        }
    )
)


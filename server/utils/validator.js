import Joi from '@hapi/joi';

export default {
    storeUser:
        Joi.object({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        }),

    storeProduct:
        Joi.object({
            title: Joi.string().required(),
            text: Joi.string().required()
        }),
        
    updateUser: Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    }),

    login:
        Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required()
        })

};
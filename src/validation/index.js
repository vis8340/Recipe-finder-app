import joi from "joi";
import { createAccountSchema, searchRecipeSchema, loginAccountSchema } from "./schemas";

export const validate = async (payload, type) => {
    let r;
    switch (type) {
        case "createAccount":
            r = joi.object(createAccountSchema);
            break;
        case "searchRecipe":
            r = joi.object(searchRecipeSchema);
            break;
        case "login":
            r = joi.object(loginAccountSchema);
            break;
        default:
            break;
    }

    try {
        await r.validateAsync(payload);
        return null;
    } catch (errors) {
        const errorsMod = {};
        errors.details.forEach((error) => {
            errorsMod[error.context.key] = error.message
        });
        return errorsMod;
    }


};
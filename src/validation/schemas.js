import joi from "joi";

//define schema for joi validation

// Search recipe form
export const searchRecipeSchema = {
    searchInput: joi.string().required().max(32).allow(''),
}

// Create account form
export const createAccountSchema = {
    email: joi.string().required().email({ tlds: { allow: false } }),
    password: joi.string().required().min(8).max(32),

}

//login form
export const loginAccountSchema = {
    email: joi.string().required().email({ tlds: { allow: false } }),
    password: joi.string().required().min(8).max(32),

}
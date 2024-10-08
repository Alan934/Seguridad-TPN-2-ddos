import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars{
    PORT: number;
    POSTGRES_PRISMA_URL: string;
    SECRET_KEY: string;
    OPENWEATHER_API_KEY: string;
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
    POSTGRES_PRISMA_URL: joi.string().required(),
    SECRET_KEY: joi.string().required(),
    OPENWEATHER_API_KEY: joi.string().required(),
})
.unknown(true);

const {error, value } = envsSchema.validate(process.env);

if(error){
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars:EnvVars = value;

export const envs = {
    port: envVars.PORT,
    postgres_prisma_url: envVars.POSTGRES_PRISMA_URL,
    secret_key: envVars.SECRET_KEY,
    openweather_api_key: envVars.OPENWEATHER_API_KEY
}
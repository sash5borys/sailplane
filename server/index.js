import fastify from 'fastify'
import autoLoad from '@fastify/autoload'
import jwt from '@fastify/jwt'
import { join } from "./utils/desm.js";

const app = fastify()

app.register(jwt, {
  secret: 'CHANGEME',
  sign: {
    expiresIn: 3600
  }
})

app.decorate('authenticate', async function (req, res) {
  try {
    await req.jwtVerify()
  } catch (err) {
    res.send(err)
  }
})

app.register(autoLoad, {
  dir: join(import.meta.url, 'routes'),
  options: { }
})

app.addHook('preSerialization', async (req, res, payload) => {
  const result = await payload;
  return result.rows;
});

app.listen({ host: '0.0.0.0', port: 3000})
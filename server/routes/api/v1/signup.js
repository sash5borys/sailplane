import S from 'fluent-json-schema';
import errors from 'http-errors';
import controller from '../../../controllers/user.js';

export default async function signup(app, opts) {
  app.post(
    '/signup',
    {
      schema: {
        body: S.object()
          .prop('login', S.string().required())
          .prop('password', S.string().required())
      }
    },
    async (req) => {
      const { login, password } = req.body;
      const {
        rows: [user]
      } = await controller.find(login);
      if (user.login === login) {
        throw new errors.Conflict();
      }
      return await controller.create({ login, password });
    }
  );
}

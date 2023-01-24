import S from 'fluent-json-schema';
import errors from 'http-errors';
import controller from '../../../controllers/user.js';

export default async function signin(app, opts) {
  app.post(
    '/signin',
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
      if (!(user.login === login && user.password === password)) {
        throw new errors.Unauthorized();
      }
      const token = app.jwt.sign({ login });
      return { token };
    }
  );
}

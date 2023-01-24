import S from 'fluent-json-schema';
import controller from '../../../controllers/user.js';

export default async function user(app, opts) {
  app.addHook('onRequest', app.authenticate);

  app.get(
    '/user/:id',
    {
      schema: {
        params: S.object().prop('id', S.number().required())
      }
    },
    (req) => controller.read(req.params.id)
  );
  app.post(
    '/user',
    {
      schema: {
        body: S.object()
          .prop('login', S.string().required())
          .prop('password', S.string().required())
      }
    },
    (req) => controller.create(req.body)
  );
  app.put(
    '/user/:id',
    {
      schema: {
        params: S.object().prop('id', S.number().required()),
        body: S.object()
          .prop('login', S.string().required())
          .prop('password', S.string().required())
      }
    },
    (req) => controller.update(req.params.id, req.body)
  );
  app.delete(
    '/user/:id',
    {
      schema: {
        params: S.object().prop('id', S.number().required())
      }
    },
    (req) => controller.update(req.params.id)
  );
}

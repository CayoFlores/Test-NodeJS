import express from "express";
import { AppRoutes } from "../allRoutes";


// Create express app instance
const app = express();


app.use(express.json());

AppRoutes.forEach((route) => {
  app[route.method](
    route.path,
    (
      request: express.Request,
      response: express.Response,
      next: express.NextFunction
    ) => {
      route
        .action(request, response)
        .then(() => next)
        .catch((err) => next(err));
    }
  );
});

export { app };

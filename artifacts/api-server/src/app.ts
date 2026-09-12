import express, { type Express } from "express";
import cors from "cors";
import helmet from "helmet";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

// Do not advertise the framework in responses
app.disable("x-powered-by");

// Baseline security headers (CSP, HSTS, nosniff, frameguard, ...)
app.use(helmet());

// Allowlist for CORS. Set CORS_ORIGINS to a comma separated list of origins.
// When it is empty no cross origin browser request is accepted.
const allowedOrigins = (process.env.CORS_ORIGINS ?? "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

// Maximum accepted request body size
const bodyLimit = process.env.BODY_LIMIT ?? "100kb";

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("Origin not allowed by CORS"));
    },
    credentials: false,
  }),
);
app.use(express.json({ limit: bodyLimit }));
app.use(express.urlencoded({ extended: true, limit: bodyLimit }));

app.use("/api", router);

export default app;

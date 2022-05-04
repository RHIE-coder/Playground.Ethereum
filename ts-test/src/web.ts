import { Request, Response, NextFunction } from "express";
import * as express from "express";
import * as path from "path";
import * as swaggerUi from "swagger-ui-express";
import * as YAML from "yamljs";

const app = express();
const swaggerYAML = YAML.load(path.join(__dirname, "../swagger.yaml"));

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerYAML));

app.get("/welcome", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome!");
});

app.listen("1234", () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});

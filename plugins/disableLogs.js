export function disableLogs() {
  console.log = () => {};
}

process.env.NODE_ENV == "production" && process.env.ENVIROMENT_SERVER == "production" ? disableLogs() : null;

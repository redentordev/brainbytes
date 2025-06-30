/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app() {
    return {
      name: "brainbytes",
      removal: "remove",
      home: "aws",
      providers: { cloudflare: "6.3.1" },
    };
  },
  async run() {
    const secret = {
      DatabaseUrl: new sst.Secret("DatabaseUrl", process.env.DATABASE_URL),
      BetterAuthSecret: new sst.Secret(
        "BetterAuthSecret",
        process.env.BETTER_AUTH_SECRET
      ),
      GithubClientId: new sst.Secret(
        "GithubClientId",
        process.env.GITHUB_CLIENT_ID
      ),
      GithubClientSecret: new sst.Secret(
        "GithubClientSecret",
        process.env.GITHUB_CLIENT_SECRET
      ),
      GoogleClientId: new sst.Secret(
        "GoogleClientId",
        process.env.GOOGLE_CLIENT_ID
      ),
      GoogleClientSecret: new sst.Secret(
        "GoogleClientSecret",
        process.env.GOOGLE_CLIENT_SECRET
      ),
      OpenaiApiKey: new sst.Secret("OpenaiApiKey", process.env.OPENAI_API_KEY),
      CloudflareApiToken: new sst.Secret(
        "CloudflareApiToken",
        process.env.CLOUDFLARE_API_TOKEN
      ),
      CloudflareAccountId: new sst.Secret(
        "CloudflareAccountId",
        process.env.CLOUDFLARE_DEFAULT_ACCOUNT_ID
      ),
    };

    const allSecrets = Object.values(secret);

    const api = new sst.aws.Function("BrainbytesApi", {
      handler: "packages/function/src/api/index.handler",
      url: true,
      link: allSecrets,
    });

    const web = new sst.aws.Nextjs("BrainbytesApp", {
      path: "packages/app",
      link: [api, ...allSecrets],
      domain: {
        dns: sst.cloudflare.dns(),
        name: "brainbytes.redentor.dev",
      },
      dev: {
        command: "bun run dev",
      },
      environment: {
        NEXT_PUBLIC_API_URL:
          $app.stage === "dev"
            ? "http://localhost:3000"
            : "https://brainbytes.redentor.dev",
      },
    });

    return {
      web: web.url,
      api: api.url,
    };
  },
});

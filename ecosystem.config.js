require("dotenv").config({
  path: ".env",
});

module.exports = {
  apps: [
    {
      name: "eva-tellier",
      script: "npm",
      args: "start",
      watch: false,
      env: {
        NODE_ENV: "development",
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
        CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
        ENABLE_GATSBY_REFRESH_ENDPOINT: process.env.ENABLE_GATSBY_REFRESH_ENDPOINT,
      },
    },
  ],

  deploy: {
    development: {
      key: "~/.ssh/evatellier.pem",
      user: "ubuntu",
      host: "ec2-34-229-205-99.compute-1.amazonaws.com",
      ref: "origin/preview",
      repo: "git@github.com:jackgeorge11/eva-tellier.git",
      path: "/home/ubuntu/evatellier",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env development && npm install -g gatsby-cli",
      "pre-setup": "",
    },
  },
}
const { Marp } = require("@marp-team/marp-core");
const kroki = require("@kazumatu981/markdown-it-kroki");

module.exports = class CustomEngine extends Marp {
  constructor(opts) {
    super({ ...opts, html: true });

    this.use(kroki, {
      entrypoint: "https://kroki.io",
      containerClass: "mermaid",
    });
  }
};

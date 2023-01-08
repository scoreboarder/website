module.exports = {
  experimental: {
    appDir: true,
    runtime: "experimental-edge", // 'node.js' (default) | 'experimental-edge'
  },
  async rewrites() {
    return [
      {
        source: "/js/script.outbound-links.js",
        destination: "https://plausible.io/js/script.outbound-links.js",
      },
      {
        source: "/api/event",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
};

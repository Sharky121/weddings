module.exports = {
  apps: [{
    name: "weddings",
    script: "npm",
    args: "start -- -H 127.0.0.1",
    env: {
      NODE_ENV: "production",
      PORT: 3001 
    }
  }]
};

module.exports = {
  apps: [{
    name: "weddings",
    script: "npm",
    args: "start",
    env: {
      NODE_ENV: "production",
      PORT: 3001 
    }
  }]
};

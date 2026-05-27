const swaggerSpec = {
  openapi: "3.0.0",

  info: {
    title: "AgroVision AI API",

    version: "1.0.0",

    description:
      "Satellite-based Crop Disease Intelligence Platform"
  },

  servers: [
    {
      url:
        "http://localhost:5000"
    }
  ]
};

export default swaggerSpec;
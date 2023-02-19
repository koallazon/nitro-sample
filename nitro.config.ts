import { defineNitroConfig } from 'nitropack'
export default defineNitroConfig({
  routeRules: {
    '/*': {
      cors: true,
      headers: {
        'access-control-allow-methods': 'GET',
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
})

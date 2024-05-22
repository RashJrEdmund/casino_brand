// import * as nextPWA from 'next-pwa';

const withPWA = require('next-pwa')({ // see package https://www.npmjs.com/package/next-pwa
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  // disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    disableDevLogs: true,
  },

  cacheStartUrl: true, // weather to cache start url or not
  dynamicStartUrlRedirect: true,
  register: true,
  // scope: '/app',
  sw: 'service-worker.js', // an alias for service worker file outputs.
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...withPWA,
  env: {
    //
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 'example.com'
        port: '',
        pathname: '**', // '/casino/image1/**'
      }
    ]
  }
};

module.exports = nextConfig;
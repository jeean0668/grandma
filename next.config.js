/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "grandma";

const nextConfig = {
    output: 'export',
    assetPrefix: !debug ? `/${repository}/` : "",
    trailingSlash: true, 
}

module.exports = nextConfig

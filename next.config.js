// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
}

const compose = (initial, fns) => fns.reduce((acc, fn) => fn(acc), initial)

module.exports = () => {
  const plugins = []
  const config = compose(nextConfig, plugins)

  return config
}

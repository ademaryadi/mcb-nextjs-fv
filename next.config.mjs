/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/front-pages/landing-page',
        permanent: true,
        locale: false
      },
      {
        source: '/:lang(id|en|fr|ar)',
        destination: '/:lang/dashboards/crm',
        permanent: true,
        locale: false
      },
      {
        source: '/((?!(?:id|en|fr|ar|front-pages|favicon.ico)\\b)):path',
        destination: '/id/:path',
        permanent: true,
        locale: false
      }
    ]
  }
}

export default nextConfig

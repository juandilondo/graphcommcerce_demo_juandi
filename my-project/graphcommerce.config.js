// @ts-check

/**
 * Docs: https://graphcommerce.org/docs/framework/config
 *
 * @type {import('@graphcommerce/next-config/src/generated/config').GraphCommerceConfig}
 */
const config = {
    hygraphEndpoint: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clqmsc018lj6l01uk9r829d39/master',
    magentoEndpoint: 'https://backend.reachdigital.dev/graphql',
    canonicalBaseUrl: 'https://graphcommerce.vercel.app',
    storefront: [{ locale: 'en', magentoStoreCode: 'en_US' }],
  }
  
  module.exports = config
  
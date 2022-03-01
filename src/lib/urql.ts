import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql'

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
  url: 'https://api-sa-east-1.graphcms.com/v2/cl08db9a73i7e01z36xukc169/master',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange]
})

export { client, ssrCache }

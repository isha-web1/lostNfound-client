import { MeiliSearch } from 'meilisearch'

const client = new MeiliSearch({
  host: 'http://localhost:7700',
  apiKey: 'aSampleMasterKey'
})
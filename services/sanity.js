import {
  groq,
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity'

class Sanity {
  config = {
    dataset: 'production',
    projectId: '5sfxruy2',
    useCdn: 'production',
    apiVersion: '2021-03-25',
  }

  previewMode = false
  setPreviewMode = (previewMode) => this.previewMode = previewMode

  sanityClient = createClient(this.config)

  previewClient = createClient({
    ...this.config,
    useCdn: false,
    token: "sk2u9wmjcn0Jsk6of5kAoXafud3l6fXFShtNOGmQmKED8I6PPYvuU9uiKraeLgWpmxHL3YupBpFC3cVJPj1cYsAmTC1PqPU75Dxs0QHRJLJRqPoGAk39VJmOaUflBPo1t7lxHRAdVRlVClFLWzeuBuKDls3Bnb9KRw4dYyUdmhX77AaIiz29",
  })

  urlFor = source => createImageUrlBuilder(this.config).image(source)
  
  // PortableText = createPortableTextComponent({
  //   ...this.config,
  //   serializers: {},
  // })
  
  useCurrentUser = createCurrentUserHook(this.config)
  usePreviewSubscription = createPreviewSubscriptionHook(this.config)

  get client() {
    return this.previewMode ? this.previewClient : this.sanityClient
  }

  async fetchQuery({ query = '', params }) {
    const res = await this.client.fetch(groq`${query}`, params)
    if (!res) throw new Error(`Nothing was returned from the query: ${query}, with params: ${JSON.stringify(params)}`)
    return res
  }

  async checkIfSlugExists(slug) {
    const query = `*[slug.current == $slug]`
    try {
      const res = await this.fetchQuery({ query, params: { slug }})
      return !!res
    } catch (e) {
      return false
    }
  }
}

export default new Sanity()
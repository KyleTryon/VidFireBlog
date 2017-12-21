<template>
  <vf-article/>
</template>

<script>
import vfArticle from '~/components/global/vfArticle.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  asyncData ({env, params}) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(entries => {
      return {
        post: entries.items[0]
      }
    })
      .catch(console.error)
  },
  components: {
    vfArticle
  }
}
</script>

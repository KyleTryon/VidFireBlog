<template>
    <main class="wrapper">
        <section class="CTA">
            <h1>
                <strong>Content</strong> created <strong>for and by YouTubers</strong> <br />to help you grow your channel to <strong>success</strong>
            </h1>
            <form class="form" data-netlify="true">
                <input type="email" placeholder="Email@example.com">
                <button class="btn" type="submit">Get Tips</button>
            </form>
            <small>Only quality posts. No spam, no nonsense. That's a promise!</small>
        </section>
        <section class="blogFeed">
            <vf-blog-card v-for="post in posts" :key="post.sys.id" v-bind:article="post" />
        </section>
    </main>
</template>

<style lang="scss" scoped>
    main {
        display: flex;
        flex-direction: column;
        &.wrapper {
            flex: 1;
        }
    }
    section.CTA {
        text-align: center;
        padding: 0.5em;
        margin: 0em 0em 1em 0em;

        h1 {
            font-size: 1.5em;
            color: $color-main;
            font-weight: normal;
            margin: 0.5em 0em;
        }

        .form {
            display: flex;
            text-align: center;

            input {
                margin: 0 1em;
                flex: 1;                
            }
        }
    }

    .blogFeed {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

</style>


<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import vfBlogCard from '~/components/global/vfBlogCard'

  import {createClient} from '~/plugins/contentful.js'
  const client = createClient()

  export default {
    asyncData ({ env, params }) {
      return client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      }).then(entries => {
        // console.dir(entries.items[0].fields.headerImage['fields'].file.url)
        return {
          posts: entries.items
        }
      })
    },
    components: {
      FontAwesomeIcon,
      vfBlogCard
    }
  }
</script>
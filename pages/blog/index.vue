<template>
    <main class="wrapper">
        <section class="CTA">
            <h1>
                <strong>Content</strong> created <strong>for and by YouTubers</strong> <br />to help you grow your channel to <strong>success</strong>
            </h1>
            <div class="form">
                <input type="text" placeholder="Email">
                <a href="#" class="btn">Get Tips</a>
            </div>
            <small>Only quality posts. No spam, no nonsense. That's a promise!</small>
        </section>
        <section class="blogFeed">
            <vf-blog-card v-for="post in posts" :key="post.sys.id" v-bind:article="post"/>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    main {
        display: flex;
        flex-direction: column;
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
            input {
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
        'content_type': env.CTF_BLOG_TYPE_ID,
        order: '-sys.createdAt'
      }).then(entries => {
        console.log(entries.items[0].contentType)
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
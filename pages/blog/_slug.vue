<template>
  <div class="wrapper articleWrapper">

    <aside class="shareCol">
      <div class="shareBar">
        <ul>
          <li>
            <a href="#">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
          </li>
          <li>
            <a href="#">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
          </li>
          <li>
            <a href="#">
              <font-awesome-icon :icon="['fab', 'pinterest']" />
            </a>
          </li>
          <li>
            <a href="#">
              <font-awesome-icon :icon="['fab', 'get-pocket']" />
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <article class="blogArticle" itemscope itemtype="http://schema.org/BlogPosting">
      <meta itemscope itemprop="mainEntityOfPage" itemType="https://schema.org/Blog" />

      <header>
        <div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
          <img class="blogImg" :src="post.fields.headerImage.fields.file.url" itemprop="url">
        </div>
        <div class="blogTitle">
          <h1 itemprop="headline"> {{post.fields.title}} </h1>
        </div>
        <div class="timeRow">
          <time itemprop="datePublished" :content="( new Date(post.fields.published).toString() )">
            <font-awesome-icon icon="calendar-alt" size="xs" /> {{ ( new Date(post.fields.published).toDateString() )}}
          </time>
          <time itemprop="timeRequired" datetime="1m">
            <font-awesome-icon :icon="['far', 'clock']" size="xs" /> 1m
          </time>
        </div>
      </header>

      <main class="blogContent">
        <vue-markdown :html="true">{{post.fields.body}}</vue-markdown>
      </main>

      <section class="blogAuthor" itemprop="author" itemscope itemtype="https://schema.org/Person">

        <div itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
          <img class="authorAvatar" :src="post.fields.author.fields.avatar.fields.file.url" itemprop="url" width="150px" height="150px" alt="author picture">
        </div>
        <div class="authorBio">
          <h2 itemprop="name">{{post.fields.author.fields.name}}</h2>
          <a href="#" class="btn"> Subscribe </a>
          <p itemprop="description">{{post.fields.author.fields.bio}}</p>
          <div class="social">
            <ul>
              <li v-if="post.fields.author.fields.facebook">
                <a :href="post.fields.author.fields.facebook">
                  <font-awesome-icon :icon="['fab', 'facebook']" />
                </a>
              </li>
              <li v-if="post.fields.author.fields.twitter">
                <a :href="post.fields.author.fields.twitter">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
              </li>
              <li v-if="post.fields.author.fields.instagram">
                <a :href="post.fields.author.fields.instagram">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
              </li>
              <li v-if="post.fields.author.fields.linkedin">
                <a :href="post.fields.author.fields.linkedin">
                  <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
              </li>
              <li v-if="post.fields.author.fields.website">
                <a :href="post.fields.author.fields.website">
                  <font-awesome-icon :icon="['fab', 'chrome']" />
                </a>
              </li>
            </ul>

          </div>
        </div>
      </section>

      <footer class="articleFooter">
        <div class="articlePublisher" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
          Article published by:
          <div itemprop="logo" itemscope itemtype="http://schema.org/ImageObject">
            <img src="~/static/VidFireTV.svg" width="32px" height="32px" itemprop="url">
          </div>
          <span itemprop="name">VidFireTV</span>

        </div>
        <div v-if="post.fields.credits > 0" class="blogCredits">
          <span>credits</span>
          <ul>
            <li v-for="credit in post.fields.credits">
              {{post.fields.credits}}
            </li>
          </ul>
        </div>
      </footer>
    </article>
  </div>
</template>

<style lang="scss">
  .articleWrapper {
    display: flex;
    flex-direction: row;
  }

  .shareCol {
    width: 100px;
    padding: 1em;
    display: none;
  }

  .shareBar {
    background-color: $color-grayLight;
    height: 16em;

    ul {
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      list-style-type: none;
      justify-content: space-around;
      padding: 0px;

      li,
      a {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
      }

      a {
        @include resetLinks;
      }

      a :hover {
        @include floatLinks;
      }
    }
  }

  .blogArticle {
    flex: 1;
  }

  .blogTitle {
    text-align: center;
    padding: 1.5em;

    h1 {
      font-size: 2.5em;
    }
  }

  .timeRow {
    display: flex;
    justify-content: space-between;
  }

  .blogContent {
    margin-top: 2em;

    h1, h2 {
      font-size: 2.5em;
    }

    a {
      @include resetLinks;
      font-weight: bold;
      font-size: 1.05em;
      margin: 0.5em 0em;
      color: $color-main;
    }

    a:hover {
      @include floatLinks;
    }

    p {
      line-height: 1.4em;
      margin: 1em;

      img {
        width: 60%;
        height: auto;
        margin: auto;
      }
    }
  }

  .articleFooter {
    font-size: 0.8em;
    display: flex;
    flex-direction: column;
  }

  .articlePublisher {
    display: flex;
    align-items: center;
    margin: auto;
  }

  .blogAuthor {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 1em;
    margin-top: -2em;
    
  }

  .social {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 0.5em;

    ul {
      flex: 1;
      padding: 0px;
      list-style-type: none;
      text-decoration: none;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }

  .authorBio {
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    border: solid 1px $color-grayLight;
    padding-top: 75px;
    background-color: $color-white;
    
    h2 {
      margin: 0.5em;
    }
  }

  .authorAvatar {
    border-radius: 50%;
    margin: auto;
    box-shadow: $box-shadow;
    border: solid 0.4em $color-white;
    position: relative;
    top: 75px;
  }

  @media only screen and (min-width: $devDesktop) {
    .shareCol {
      display: block;
    }
  }

</style>


<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import {createClient} from '~/plugins/contentful.js'
  import VueMarkdown from 'vue-markdown'

  const client = createClient()

  export default {
    asyncData ({env, params}) {
      return client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug': params.slug
      }).then(entries => {
        // console.log(entries.items[0])
        return {
          post: entries.items[0]
        }
      })
        .catch(console.error)
    },
    components: {
      FontAwesomeIcon,
      VueMarkdown
    }
  }
</script>

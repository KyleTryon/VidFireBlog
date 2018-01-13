<template>
  <div class="blogCardContainer">
    <div class="blogCard">
      <div class="header">
        <div class="articleImage">
          <img class="blogImg" itemprop="url" :src="article['fields'].headerImage['fields']['file'].url">
        </div>
        <div class="info">
          <img class="authorAvatar" :src="article['fields'].author['fields']['avatar']['fields'].file.url" width="100px" height="100px" alt="author picture">
          <div class="meta">
            <span>by:
              <a href="#" class="blogAuthorLink">RoboSquidTV</a>
            </span>
            <time itemprop="datePublished" :content="( new Date(article['fields'].published).toISOString() )">
              {{( new Date(article['fields'].published).toDateString() )}}
            </time>
          </div>
          <time class="blogTime" itemprop="timeRequired" :datetime="time + 'm'">
            <font-awesome-icon :icon="['far', 'clock']" /> {{time}}m
          </time>
        </div>
      </div>
      <div class="body">
        <h1>{{article['fields'].title}}</h1>
      </div>
      <nuxt-link :to="{ name: 'blog-slug', params: { slug: article['fields'].slug }}" class="btn btnReadMore">READ MORE</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .blogCardContainer {
    padding: 1em;
    display: flex;

    .blogCard {
      display: flex;
      flex-direction: column;
      width: 300px;
      box-shadow: $box-shadow;
      border-radius: $border-radius;
      flex: 1;
      background-color: $color-white;

      h1 {
        margin: 0em;
      }

      .btnReadMore {
        justify-self: flex-end;
        margin: 1em;
      }

      .authorAvatar {
        border-radius: 50%;
        box-shadow: $box-shadow;
        border: solid 0.4em $color-white;
        position: relative;
        top: -50px;
      }

      .body {
        display: flex;
        text-align: center;
        padding: 0.4em;
        align-items: center;
        flex: 1;

        h1 {
            position: relative;
            top: -1em;
        }
      }

      .header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100px;

        .info {
            padding: 1em;
            display: flex;
            justify-content: space-between;
            font-size: 0.8em;
        }

        .meta,
        .blogTime {
          display: flex;
          flex-direction: column;
        }

        .meta {
            text-align: center;
        }
      }
    }
  }

</style>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  /* I think the API is not always returning the full image.
 And it may be hard to tell because it may work from one build
 but not the next. Modify this comment to refetch heroImage.
 fields which seems to have stopped working after previously working.
 edit: 08
 */
  export default {
    props: ['article'],
    components: {
      FontAwesomeIcon
    },
    computed: {
      time: function () {
        let count = this.article.fields.body.toString().split(' ').length
        let time = Math.ceil(count / 200)
        return time
      }
    }
  }
</script>
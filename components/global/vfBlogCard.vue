<template>
  <div class="blogCardContainer">
    <div class="blogCard">
      <div class="header">
        <div class="articleImage">
          <img class="blogImg" itemprop="url" :src="article['fields'].headerImage['fields']['file'].url">
        </div>
        <div class="info">
          <img class="authorAvatar" src="https://i.imgur.com/ieOYJmd.png" width="100px" height="100px" alt="author picture">
          <div class="meta">
            <span>by:
              <a href="#" class="blogAuthorLink">RoboSquidTV</a>
            </span>
            <time itemprop="datePublished" content="2018-03-09">
              {{( new Date(article['fields'].published).toDateString() )}}
            </time>
          </div>
          <time class="blogTime" itemprop="timeRequired" datetime="1m">
            <font-awesome-icon :icon="['far', 'clock']" /> 1m
          </time>
        </div>
      </div>
      <div class="body">
        <h1>{{article['fields'].title}}</h1>
        <span> {{article['fields'].headerImage['fields']['file'].url}} </span>
        <a href="#" class="btn btnReadMore">READ</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .blogCardContainer {
    padding: 1em;

    .blogCard {
      display: block;
      width: 300px;
      box-shadow: $box-shadow;
      border-radius: $border-radius;

      .authorAvatar {
        border-radius: 50%;
        box-shadow: $box-shadow;
        border: solid 0.4em $color-white;
        position: relative;
        top: -50px;
      }

      .body {
        min-height: 200px;
        text-align: center;
        padding: 0.4em;

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
            padding: 0.4em;
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
 edit: 06
 */
  export default {
    props: ['article'],
    components: {
      FontAwesomeIcon
    }
  }
</script>
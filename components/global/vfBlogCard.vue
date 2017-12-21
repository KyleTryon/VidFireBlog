<template>
  <div class="blogCardContainer">
    <div class="blogCard">
      <div class="header">
        <div class="articleImage">
          <img class="blogImg" src="https://i.imgur.com/tDGbXRR.jpg" itemprop="url">
        </div>
        <div class="info">
          <img class="authorAvatar" src="https://i.imgur.com/ieOYJmd.png" width="100px" height="100px" alt="author picture">
          <div class="meta">
            <span>by:
              <a href="#" class="blogAuthorLink">RoboSquidTV</a>
            </span>
            <time itemprop="datePublished" content="2018-03-09">
              March 9, 2018
            </time>
          </div>
          <time class="blogTime" itemprop="timeRequired" datetime="1m">
            <font-awesome-icon :icon="['far', 'clock']" /> 1m
          </time>
        </div>
      </div>
      <div class="body">
        <h1>5 Tricks To Improve Your Camera Quality. feat. YOUTUBER</h1>
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
  export default {
    components: {
      FontAwesomeIcon
    }
  }
</script>
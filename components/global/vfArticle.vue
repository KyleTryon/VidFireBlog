<template>
  <div class="wrapper">

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
          <img class="blogImg" src="https://i.imgur.com/acwq7f7.png" itemprop="url">
        </div>
        <div class="blogTitle">
          <h1 itemprop="headline">BLOG TITLE</h1>
        </div>
        <div class="timeRow">
          <time itemprop="datePublished" content="2018-03-09">
            <font-awesome-icon icon="calendar-alt" size="xs" /> March 9, 2018
          </time>
          <time itemprop="timeRequired" datetime="1m">
            <font-awesome-icon icon="clock" size="xs" /> 1m
          </time>
        </div>
      </header>

      <main class="blogContent">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente voluptate nisi nam Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quod sapiente voluptate nisi nam inventore tempora veritatis rem commodi? Quibusdam
          veniam numquam corporis blanditiis possimus incidunt obcaecati in sunt nihil culpa. lorem inventore tempora veritatis
          rem commodi? Quibusdam veniam numquam corporis blanditiis possimus incidunt obcaecati in sunt nihil culpa. lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente voluptate nisi nam in sunt nihil culpa. lorem
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente voluptate nisi nam inventore tempora veritatis
          rem commodi? Quibusdam veniam numquam corporis blanditiis possimus incidunt obcaecati in sunt nihil culpa. lorem
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente voluptate nisi nam inventore tempora veritatis
          rem commodi? Quibusdam veniam numquam corporis blanditiis possimus incidunt obcaecati in sunt nihil culpa. lorem
          </p>
        <p> obcaecati in sunt nihil culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente voluptate nisi
          nam inventore tempora veritatis rem commodi? Quibusdam veniam numquam corporis blanditiis possimus incidunt obcaecati
          in sunt nihil culpa. lorem lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. veritatis rem commodi? lorem lorem Quibusdam veniam numquam
          corporis blanditiis possimus incidunt obcaecati in sunt nihil culpa. lorem lorem Quibusdam veniam numquam corporis
          blanditiis possimus incidunt obcaecati in sunt nihil culpa. lorem lorem</p>
      </main>

      <section class="blogAuthor" itemprop="author" itemscope itemtype="https://schema.org/Person">

        <div itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
          <img class="authorAvatar" src="https://i.imgur.com/ieOYJmd.png" itemprop="url" width="150px" height="150px" alt="author picture">
        </div>
        <div class="authorBio">
          <h2 itemprop="name">John Doe</h2>
          <a href="#">
            <button class="btn">Subscribe</button>
          </a>
          <p itemprop="description">A YouTuber and blogger, making content online</p>
          <div class="social">
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
                  <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
              </li>
              <li>
                <a href="#">
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
            <img src="https://i.imgur.com/PeKLIH0.png" width="32px" height="32px" itemprop="url">
          </div>
          <span itemprop="name">VidFireTV</span>

        </div>
        <div class="blogCredits">
          <span>credits</span>
          <ul>
            <li>credit 1</li>
            <li>credit 2</li>
          </ul>
        </div>
      </footer>
    </article>
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  export default {
    components: {
      FontAwesomeIcon
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
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

  .blogContent p {
    text-indent: 1em;
    line-height: 1.4em;
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

    a {
      @include resetLinks;
    }

    a :hover {
      @include floatLinks;
    }
  }

  .authorBio {
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    border: solid 1px $color-grayLight;
    padding-top: 75px;
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
<template>

    <article class="blogArticle wrapper" itemscope itemtype="http://schema.org/BlogPosting">
    <meta itemscope itemprop="mainEntityOfPage"  itemType="https://schema.org/Blog"/>
    <header>
      <div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
        <img class="blogImg" src="https://i.imgur.com/acwq7f7.png" itemprop="url">
      </div>
      <div class="blogTitle">
        <h1 itemprop="headline">BLOG TITLE</h1>
      <div class="timeRow">
        <time itemprop="datePublished" content="2018-03-09">March 9, 2018</time>
        <time itemprop="timeRequired" datetime="1m">1m</time>
     </div>
    </div> 
  </header>

  <main class="blogContent">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente voluptate nisi nam  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente voluptate nisi nam inventore tempora veritatis rem commodi? Quibusdam veniam numquam corporis blanditiis possimus incidunt obcaecati in sunt nihil culpa. lorem inventore tempora veritatis rem commodi? Quibusdam veniam numquam corporis blanditiis possimus incidunt obcaecati in sunt nihil culpa. lorem</p> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente voluptate nisi nam  in sunt nihil culpa. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente voluptate nisi nam inventore tempora veritatis rem commodi? Quibusdam veniam numquam corporis blanditiis possimus incidunt obcaecati in sunt nihil culpa. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente voluptate nisi nam inventore tempora veritatis rem commodi? Quibusdam veniam numquam corporis blanditiis possimus incidunt obcaecati in sunt nihil culpa. lorem </p> 
    <p> obcaecati in sunt nihil culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente voluptate nisi nam inventore tempora veritatis rem commodi? Quibusdam veniam numquam corporis blanditiis possimus incidunt obcaecati in sunt nihil culpa. lorem lorem</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. veritatis rem commodi?  lorem lorem Quibusdam veniam numquam corporis blanditiis possimus incidunt obcaecati in sunt nihil culpa. lorem lorem Quibusdam veniam numquam corporis blanditiis possimus incidunt obcaecati in sunt nihil culpa. lorem lorem</p>
    <font-awesome-icon :icon="['fab', 'facebook']" />
  </main>

  <section class="blogAuthor" itemprop="author" itemscope itemtype="https://schema.org/Person">

    <div itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
        <img class="authorAvatar" src="https://i.imgur.com/ieOYJmd.png" itemprop="url" width="150px" height="150px" alt="author picture">
    </div>
    <div class="authorBio">
      <h2 itemprop="name">John Doe</h2>
      <button class="btn">Subscribe</button>
      <p itemprop="description">A YouTuber and blogger, making content online</p>
      <div class="social">
        <ul>
          <li> <a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a> </li>
          <li> <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a> </li>
          <li> <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a> </li>
          <li> <a href="#"><font-awesome-icon :icon="['fab', 'chrome']" /></a> </li>
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

  
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  components: {
    FontAwesomeIcon
  }
}
</script>


<style lang="scss">

.blogArticle {
  flex: 1;
}

  .blogTitle {
    text-align: center;
    padding: 1.5em;
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
  }

  .blogAuthor {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .social {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 0.5em;

    ul {
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
}

.authorAvatar{
    border-radius: 50%;
    margin: auto;
    box-shadow: $box-shadow;
    border: solid 0.4em $color-white;
    position: relative;
    top: 75px;
}

</style>

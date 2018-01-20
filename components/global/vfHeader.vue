<template>
  <header itemscope itemtype="http://schema.org/WebSite">
    <div class="wrapper">
      <div class="logoContainer">
        <!--logo svg -->
        <img itemprop="logo" id="siteLogo" src="~/static/VidFireTV.svg" alt="VidFireTV Logo" height="75px" width="auto"/>
        <h1 id="siteTitle" itemprop="name">VidFireTV</h1>
        <h2>BLOG</h2>
      </div>
      <a href="https://discord.gg/VrrYcPT">
        <div class="btn btnCTA">
          COMMUNITY
        </div>
      </a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    background-color: $color-main;
    color: $color-white;
    padding: 0.4em;
    min-height: 6em;
    display: flex;
  }

  #siteLogo {
      padding: 0.2em;
  }



  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  #siteTitle:after {
    content: "|";
    padding: 0px 10px;
    font-size: 0.8em;
    font-weight: normal;
  }

  .logoContainer {
    display: flex;
    align-items: center;

    h2 {
      font-size: 1em;
    }
  }

</style>

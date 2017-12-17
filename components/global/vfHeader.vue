<template>
  <header>
      <div class="wrapper">
          <div class="logoContainer">
              <!--logo svg -->
              <h1 id="siteTitle" >VidFireTV</h1>
              <h2>BLOG</h2>
          </div>
          <a href="#">
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

    a {
        @include resetLinks;
    }

    .wrapper{
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

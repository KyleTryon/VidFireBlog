<template>
  <header>
      <div class="wrapper">
          <div class="logoContainer">
              <!--logo svg -->
              <h1 id="siteTitle" >VidFireTV</h1>
              <h2>BLOG</h2>
          </div>
          <div class="btn btnCTA">
              COMMUNITY
          </div>
      </div>
  </header>
</template>

<style lang="scss" scoped>
    header {
        background-color: $color-main;
        color: $color-white;
        padding: 0.4em;
    }

    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
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

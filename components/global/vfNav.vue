<template>
  <nav>
      <ul class="wrapper">
          <div class="nav">
            <nuxt-link to="/"><li>HOME</li></nuxt-link>
            <nuxt-link to="/blog"><li>BLOG</li></nuxt-link>
            <a href="#"><li>GUIDES</li></a>
            <a href="#"><li>CONTACT</li></a>
          </div>
          
      </ul>
  </nav>
</template>

<style lang="scss" scoped>

    nav {
        border-bottom: solid 1px $color-grayLight;
        margin-bottom: 0.5em;
    }

    .nav {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
        padding: 1em;
        font-weight: bold;      
    }

    a {
        @include resetLinks;
        flex: 1;
        padding: 0.5em 1em;
    }

    a :hover {
        @include floatLinks;
    }

    ul {
        padding: 0px;
        list-style-type: none;
        display: flex;
        justify-content: space-around;
    }

    /* Media Queries */

    @media only screen and (min-width: $devDesktop) {
        .nav {
            flex-direction: row;
        }
    }
</style>

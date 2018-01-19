<template>
  <nav>
      <div class="wrapper">
          <ul class="nav">
            <li><nuxt-link to="/">HOME</nuxt-link></li>
            <li><nuxt-link to="/blog">BLOG</nuxt-link></li>
            <li><a href="#">GUIDES</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
      </div>
  </nav>
</template>

<style lang="scss" scoped>

    nav {
        border-bottom: solid 1px $color-grayLight;
        margin-bottom: 0.5em;
        background-color: $color-white;
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
        flex: 1;
        padding: 0.5em 1em;
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

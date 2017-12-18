<template>
  <nav>
      <ul class="wrapper">
          <div class="nav">
            <a href="#"><li>HOME</li></a>
            <a href="#"><li>BLOG</li></a>
            <a href="#"><li>GUIDES</li></a>
            <a href="#"><li>CONTACT</li></a>
          </div>
          
      </ul>
  </nav>
</template>

<style lang="scss" scoped>

    nav {
        border-bottom: solid 1px $color-grayLight;
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

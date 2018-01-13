<template>
  <div id="app-container">
    <vf-header />
    <vf-nav />
    <nuxt />
    <vf-footer />
  </div>
</template>

<script>
  import vfHeader from '~/components/global/vfHeader'
  import vfNav from '~/components/global/vfNav'
  import vfFooter from '~/components/global/vfFooter'

  export default {
    components: {
      vfHeader,
      vfNav,
      vfFooter
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed|Lato');
  /*### Global  ###*/

  html {
    font-family: $font-main;
    font-size: 18px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    min-height: 100vh;
  }

  body {
    min-height: 100%;
    color: $color-text;
    background-color: #fafafa;
  }

  #__nuxt {
    min-height: 100%;
  }

  #app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: $font-title;
    font-weight: bold;
    margin: 1em 0em;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    line-height: 1.4em;
  }


  .wrapper {
    max-width: $wrapperSM;
    margin: auto;
    min-width: 400px;
    flex: 1;
  }
  /*### Styles  ###*/

  .blogImg {
    width: 100%;
    height: auto;
  }

  small, em {
    padding: 0.5em;
  }

  p {
    word-spacing: 0.3em;
    line-height: 1.2em;
    margin: 1em 0em;
  }

  .col {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  /*### UI  ###*/

  a {
    @include resetLinks;
  }

  .btn {
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: 500;
    border: none;
    padding: 0.5em 1.5em;
    box-shadow: $box-shadow;
    border-radius: $border-radius;
    background-color: $color-main;
    color: $color-white;
    text-shadow: 0px 0.1em 0px rgba(0, 0, 0, 0.05);
    text-align: center;
    line-height: 2em;
    margin: 0.4em 0em;
    transition: all 0.3s;
  }

  .btn:hover {
    transform: translateY(-1px);
  }

  .btnCTA {
    background-color: $color-CTA;
  }

  .btnReadMore {
    background-color: $color-white;
    color: $color-main;
    border: 3px solid $color-main;
    font-size: 1em;
    margin: 0.3em 0px;
    padding: 0.05em 2em;
  }

  .btnReadMore:hover {
    background-color:$color-main;
    color: $color-white;
  }

  input[type=text] {
    padding: 1.1em;
    text-align: center;
    border: none;
    box-shadow: $box-shadow;
    margin: 0.2em 0.5em;
  }
  /* ### Media Queries ### */
  /* Desktop */

  @media only screen and (min-width: $devDesktop) {
    .wrapper {
      width: $wrapperXL;
    }
    .shareCol {
      display: block;
    }
  }

  @media only screen and (max-width: $devSmall) {
    html {
      font-size: 14px;
    }
  }

</style>

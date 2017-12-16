<template>
  <div id="app-container">
    <vf-header/>
    <vf-nav/>
    <nuxt/>
    <vf-footer/>
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
  min-height: 100vh;
  color: $color-text;
  background-color: $color-white;
}

main {
  height: 100%;
}

#__nuxt {
  min-height: 100vh;
}

#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  font-family: $font-title;
  font-weight: bold;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  line-height: 1.4em;
}


.wrapper {
  max-width: 800px;
  margin: auto;
}

/*### Styles  ###*/
.blogImg {
  width: 100%;
  height: auto;
  padding: 0.2em;
}


p {
  padding: 1em;
  word-spacing: 0.3em;
  line-height: 1.2em;
}

.col {
  display: flex;
  flex-direction: column;
  flex: 1;
}

/*### UI  ###*/

.btn {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1em;
  border: none;
  padding: 0.2em 0.6em;
  box-shadow: $box-shadow;
  border-radius: $border-radius;
  background-color: $color-main;
  color: $color-white;
  text-shadow: 0px 0.1em 0px rgba(0, 0, 0, 0.05);
}

.btnCTA {
  background-color: $color-CTA;
}
</style>

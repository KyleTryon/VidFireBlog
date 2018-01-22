<template>
  <footer>
      <div class="wrapper">
          <div class="col">
              <p>VidFireTV was created by Kyle Tryon</p>
          </div>
          <div class="col">second column</div>
          <div class="col">
              <p>Copyright {{thisYear}} </p>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  computed: {
    thisYear () {
      return new Date().getFullYear()
    }
  }
}
</script>


<style lang="scss" scoped>
    footer {
        color: $color-white;
        background-color: $color-main;
        text-align: center;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
    }

        /* Media Queries */

    @media only screen and (min-width: $devDesktop ) {
        .wrapper {
            flex-direction: row;
        }
    }
</style>

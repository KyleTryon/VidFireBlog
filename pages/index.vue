<template>
<main id="homeMain">
  <section class="homeMainSection">
    <div class="wrapper">
      <h1>The Better YouTuber Community</h1>
    <img src="~/static/VidFireTV.svg" width="200px" height="auto" alt="vidfire logo">
    <p><strong>VidFireTV</strong> is a blog and community for video content creators, typically YouTubers. Get masterful tips on the blog, written by and for YouTubers.</p>
    <p>Join the community! Our semi private community for professional content creators is the best place online to connect with other creators without the mess and spam you'll often find. Enjoy truly quality discussion with other professionals</p>
    </div>
  </section>
  <section class="communityTab wrapper">
    <div class="left">
      <a href="https://community.vidfire.tv/" class="btn btnCTA">Join The Community</a>
    </div>
    <div class="right">
      <img src="~/static/Discord.jpg" alt="Discord Server">
    </div>
  </section>
  <section class="membersTab wrapper">
    <h1>Members</h1>
    <small>Check out some of our most active members</small>
    <div class="membersGroup">
      <a href="#">
        <img src="~/static/members/RoboSquidTV.jpg" alt="RoboSquidTV">
      </a>

      <a href="">
        <img src="~/static/members/citybeautiful.jpg" alt="City Beautiful">
      </a>

      <a href="">
        <img src="~/static/members/TechWizTime.jpg" alt="TechWizTime">
      </a>

      <a href="">
        <img src="~/static/members/itsbeeray.jpg" alt="Its BeeRay">
      </a>

      <a href="">
        <img src="~/static/members/Cogito.jpg" alt="Cogito">
      </a>

      <a href="">
        <img src="~/static/members/RoboSquidTV.jpg" alt="Placeholder">
      </a>
    </div>
  </section>
</main>
</template>

<style lang="scss">

  .homeMainSection {
    margin: 2em;
    font-size: 1.2em;
  }

  #homeMain {
    text-align: center;

    h1 {
      font-size: 2.5em;
      color: $color-main;
      font-weight: bold;
    }

    section {
      margin-top: 2em;
    }
  }

  .membersGroup {
    display: flex;
    justify-content: center;

    flex-wrap: wrap;

      a {
        margin: 1em;

        img {
          max-width: 120px;
          height: auto;
        }
      }
  }

  .communityTab {
    display: flex;
    flex-direction: row;

    .left, .right {
      flex: 1;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      padding: 0.5em;
    }
  }

  .membersTab {
    h1 {
      margin: 0;
    }
  }

</style>

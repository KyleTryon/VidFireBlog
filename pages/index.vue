<template>
<main class="wrapper" id="homeMain">
  <section>
    <h1>The Better YouTuber Community</h1>
    <img src="~/static/VidFireTV.svg" width="200px" height="auto" alt="vidfire logo">
    <p><strong>VidFireTV</strong> is a blog and community for video content creators, typically YouTubers. Get masterful tips on the blog, written by and for YouTubers.</p>
    <p>Join the community! Our semi private community for professional content creators is the best place online to connect with other creators without the mess and spam you'll often find. Enjoy truly quality discussion with other professionals</p>
  </section>
  <section class="communityTab">
    <div class="left">
      <a href="#"><h1 class="btn">Join The Community</h1></a>
    </div>
    <div class="right">
      <img src="~/static/Discord.jpg" alt="Discord Server">
    </div>
  </section>
</main>
</template>

<style lang="scss">

  #homeMain {
    text-align: center;
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
    }
  }

</style>

<template>
  <link href="https://fonts.googleapis.com/css?family=Cherry+Swash:700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Londrina+Shadow" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Creepster" rel="stylesheet">
  <link href="https://fonts.googleapis.com/earlyaccess/kokoro.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/earlyaccess/hannari.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet">
  <div>
    <header>
      <h1 class="headertitle">Aizu Aim</h1>
      <nav class="gnav">
        <ul class="menu">
          <li>
            <router-link to="/" class="menutitle">top</router-link>
          </li>
          <li>
            <router-link to="/sns" class="menutitle">sns</router-link>
          </li>
          <li>
            <router-link to="/activity" class="menutitle">Activity</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <img alt="back img" src="./assets/back3.jpg" class="backimg">
      <h1 class="maintitle">Aizu Aim</h1>
      <p class="subtitle">Be BAKA,Be AHO</p>
      <p class="Cinfo">私たちは会津大学に所属する天才６人のコミュニティです<br>6人の専門分野はそれぞれで,web,機械学習,低レイヤーなどです</p>
      <p class="topictitle">最近の出来事</p>
      <div class="newtopic">
        <p>2022/6/27<a href="" class="topicinfo">ホームページ開設</a></p>
      </div>
    </main>
    <footer>
      <h1>
      </h1>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import "./css/mainstyle.css"
</style>

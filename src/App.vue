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
    <router-view></router-view>
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

<template>
  <link rel="stylesheet" href="screen.css" type="text/css" media="screen">
  <link href="https://fonts.googleapis.com/css?family=Cherry+Swash:700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Londrina+Shadow" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Creepster" rel="stylesheet">
  <link href="https://fonts.googleapis.com/earlyaccess/kokoro.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/earlyaccess/hannari.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet">
  
  <div>
    <header>
      <a href="" class="mainpage">
        <router-link to="/" class="hedertitlelink"><h1 class="headertitle">Aizu Aim</h1></router-link>
      </a>
      <nav class="gnav">
        <ul class="menu">
          <li>
            <router-link to="/" class="menutitle">top</router-link>
          </li>
          <li>
            <router-link to="/members" class="menutitle">member</router-link>
          </li>
          <li>
            <router-link to="/activity" class="menutitle">Activity</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
    <footer>
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

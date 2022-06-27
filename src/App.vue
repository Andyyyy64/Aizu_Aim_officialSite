<template>
  <link href="https://fonts.googleapis.com/css?family=Cherry+Swash:700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Londrina+Shadow" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Creepster" rel="stylesheet">
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
      <p class="Cinfo"></p>
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
* {
  margin: 0 auto;
  height: 54px;
}

header {
  background-color: rgb(27, 27, 146);
  padding-left: 20px;
  color: aliceblue;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  z-index: 1;
}

.headertitle {
  font-family: 'Londrina Shadow', cursive;
  margin-left: 10px;
  font-size: 40px;
}

header .gnav .menu {
  display: flex;
  margin-top: 13px;
  margin-left: 700px;
}

header .gnav .menu li {
  list-style: none;

}

header .gnav .menu li+li {
  margin-left: 40px;

}

.menutitle {
  color: aliceblue;
  text-decoration: none;
  font-family: 'Londrina Shadow', cursive;
  font-size: 20px;
}

.menutitle:hover {
  text-decoration: underline rgb(76, 9, 9);
  opacity: 0.7;
}

.menutitle:active {
  opacity: 1;
}

main {
  position: relative;
  height: 520px;
  width: 100%;
  padding-top: 54px;
}

.maintitle {
  position: absolute;
  top: 40%;
  left: 50%;
  color: rgb(70, 76, 183);
  font-size: 170px;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: 'Creepster', cursive;
}

.subtitle {
  position: absolute;
  top:75%;
  left: 50%;
  color: rgb(255, 255, 255);
  font-size: 30px;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: "Cherry",cursive;
  font-weight: bold;
  
}

.backimg {
  width: 100%;
  height: 520px;
}
</style>

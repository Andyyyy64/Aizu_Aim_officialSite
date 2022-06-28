<template>
    <div>
        <main>
            <img alt="back img" src="../assets/back3.jpg" class="backimg">
            <h1 class="maintitle">member</h1>
            <p class="subtitle">The world's greatest geniuses</p>
            <p class="Cinfo">世界屈指の奇才6人の紹介</p>
            <router-link to="/andy" class="memberclick A">Andy</router-link>
            <router-link to="/ayato" class="memberclick S">Ayato</router-link>
            <router-link to="/tuchiya" class="memberclick T">Tuchiya</router-link>
            <router-link to="/jura" class="memberclick J">Jura</router-link>
            <router-link to="/sora" class="memberclick K">Sora</router-link>
            <router-link to="/mori" class="memberclick M">Mori</router-link>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: "TopPage"
}
</script>
<style>
.memberclick {
    text-decoration: none;
    font-family: "Cherry", cursive;
    font-size: 40px;
    color: black;
    margin-left: 10%;
    font-weight: bold;
    display: flex;
    margin-top: 20px;
}
.memberline{
}

.S:hover {
    text-decoration: underline rgb(218, 62, 62);
}

.A:hover {
    text-decoration: underline green;
}

.K:hover {
    text-decoration: underline rgb(97, 97, 251);
}

.T:hover {
    text-decoration: underline brown;
}

.J:hover {
    text-decoration: underline rgb(205, 205, 0);
}

.M:hover {
    text-decoration: underline orange;
}
</style>
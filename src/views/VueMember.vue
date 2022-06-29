<template>
    <link href="https://fonts.googleapis.com/css?family=Corben:700 " rel="stylesheet">
    <div>
        <main>
            <img alt="back img" src="../assets/back3.jpg" class="backimg">
            <h1 class="maintitle">member</h1>
            <p class="subtitle">The world's greatest geniuses</p>
            <p class="Cinfo">世界屈指の奇才6人の紹介</p>
            <div class="nameW">
                <router-link to="/members/andy" class="memberclick A">Andy</router-link>
                <p class="memberline AA"> Just stupid</p>
            </div>
            <div class="nameW">
                <router-link to="/members/ayato" class="memberclick S">Ayato</router-link>
                <p class="memberline SS"> Don't think I only think about sex.</p>
            </div>
            <div class="nameW">
                <router-link to="/members/tuchiya" class="memberclick T">Tuchiya</router-link>
                <p class="memberline TT"> The most old,But the most young.</p>
            </div>
            <div class="nameW">
                <router-link to="/members/jura" class="memberclick J">Jura</router-link>
                <p class="memberline JJ"> Don't let appearances deceive you.</p>
            </div>
            <div class="nameW">
                <router-link to="/members/sora" class="memberclick K">Sora</router-link>
                <p class="memberline KK"> Japanese SAMURAI</p>
            </div>
            <div class="nameW">
                <router-link to="/members/mori" class="memberclick M">Mori</router-link>
                <p class="memberline MM"> The best moody person</p>
            </div>
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
@import "../css/memberstyle.css"
</style>
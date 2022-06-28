<template>
    <div>
        <main>
            <img alt="back img" src="../assets/back3.jpg" class="backimg">
            <h1 class="maintitle">member</h1>
            <p class="subtitle">The world's greatest geniuses</p>
            <p class="Cinfo">世界屈指の奇才6人の紹介</p>
            <div class="nameW">
                <router-link to="/members/andy" class="memberclick A">Andy</router-link>
                <p class="memberline">- Stupid... but stupid</p>
            </div>
            <div class="nameW">
                <router-link to="/members/ayato" class="memberclick S">Ayato</router-link>
                <p class="memberline">- </p>
            </div>
            <div class="nameW">
                <router-link to="/members/tuchiya" class="memberclick T">Tuchiya</router-link>
                <p class="memberline">- The most old. The most unhealthy.</p>
            </div>
            <div class="nameW">
                <router-link to="/members/jura" class="memberclick J">Jura</router-link>
                <p class="memberline">- </p>
            </div>
            <div class="nameW">
                <router-link to="/members/sora" class="memberclick K">Sora</router-link>
                <p class="memberline">- </p>
            </div>
            <div class="nameW">
                <router-link to="/members/mori" class="memberclick M">Mori</router-link>
                <p class="memberline">- </p>
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
.nameW {
    position: relative;
}

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

.memberline {
    font-family: "Cherry", cursive;
    font-size: 40px;
    color: black;
    font-weight: bold;
    position: absolute;
    top: -10%;
    left: 25%;

}

.S{
    color: rgb(218, 62, 62);
}
.S:hover {
    color: black;
    text-decoration: underline rgb(218, 62, 62);
}

.A {
    color: green;
}

.A:hover {
    text-decoration: underline black;

}

.K {
    color: rgb(97, 97, 251);
}

.K:hover {
    text-decoration: underline black;
}
.T{
    color: brown;
}
.T:hover {
    text-decoration: underline black
}
.J{
    color: rgb(205, 205, 0);
}
.J:hover {
    text-decoration: underline black;
}
.M{
    color: orange;
}
.M:hover {
    text-decoration: underline black;
}
</style>
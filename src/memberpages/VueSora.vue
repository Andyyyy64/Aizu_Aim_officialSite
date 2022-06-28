<template>
    <div>
        <main>
            <img alt="back img" src="../assets/back3.jpg" class="backimg">
            <h1 class="maintitle">member</h1>
            <p class="subtitle">The world's greatest geniuses</p>
            <p class="Cinfo">児山 空</p>

            <div class="membercontainer">
                <h2 class="membername">Sora</h2>
                <a href=""><img src="../assets/Juralogo.jpg" class="membervio"></a>
                <p class="memberinfo">aaa</p>
            </div>
        </main>
    </div>

</template>

<script>
export default {
    name: "AndyPage"
}
</script>
<style>
.membercontainer {
    text-align: left;

}

.membername {
    font-family: 'Londrina Shadow', cursive;
    margin-left: 100px;
    padding-top: 10px;
    font-size: 40px;
}

.membervio {
    width: 300px;
    height: 300px;
    margin-left: 100px;
    border: 2px solid black;
}

.memberinfo {
    text-align: center;

}
</style>
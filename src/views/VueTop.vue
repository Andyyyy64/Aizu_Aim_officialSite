<template>
    <div>
        <main>
            <img alt="back img" src="../assets/back3.jpg" class="backimg">
            <h1 class="maintitle">Aizu Aim</h1>
            <p class="subtitle">Be Baka Be Aho, Be Someone</p>
            <p class="Cinfo">AizuAimは会津大学に所属する奇才６人のコミュニティである<br>6人の専門分野はさまざまで,web,機械学習,低レイヤーなどである</p>
            <TopicWrapper></TopicWrapper>
        </main>
    </div>
</template>
<script>
import TopicWrapper from '../components/TopicWrapper.vue'
export default {
    name: "TopPage",

    components: { TopicWrapper }
}

</script>
<style>
</style>
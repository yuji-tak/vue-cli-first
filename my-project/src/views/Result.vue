<template>
    <div>
        <!-- 以下、確認用アテ -->
        <span v-if="this.$store.state.selectedInfo[2]">
            <h1>Result</h1>

            <h2>{{ hogeNumber }}</h2>
        </span>
        <div class="mx-auto mb-3">
            <router-link to="/customer-content" tag="button" class="btn text-light bg-info border-0 rounded mr-5">
            前へ戻る
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        hogeNumber() {
            return this.$store.state.selectedInfo[2].consultationContent
        }
    },
    mounted() {
        console.log(this.$store.state.selectedInfo);
    }
}
</script>
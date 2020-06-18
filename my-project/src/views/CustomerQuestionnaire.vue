<template>
    <div>
        <h1>CustomerQuestionnaire</h1>

        <router-link to="/customer-info" tag="button" class="btn text-light bg-info border-0 rounded">
            前へ戻る
        </router-link>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$store.state.selectedInfo);
    }
}
</script>
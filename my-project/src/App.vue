<template>
  <div>
    <div class="container-fluid border-bottom border-dark bg-light py-3">
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <p class="h3 text-dark">Sample App</p>
          <p>
            <a class="text-muted">ログイン</a>
            <span> | </span>
            <a class="text-muted">新規登録</a>
          </p>
        </div>
      </div>
    </div>
    <div v-if="this.$route.path === '/'" class="container">
        <div class="row">
            <div class="col-12 text-center mt-5">
                <router-link to="/customer-info" tag="button" class="btn text-light bg-info border-0 rounded">
                    アンケートをはじめる
                </router-link>
            </div>
        </div>
    </div>
    <!-- vue-router -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
      return {
      }
  },
  mounted() {
  }
}
</script>

<template>
    <div>
        <div class="container bg-light mt-5">
            <div class="row">
                <div class="col-12 p-0">
                    <p class="customer_info_parent bg-info text-light text-center p-1">
                        <span class="customer_info bg-primary px-1">STEP-2</span>
                        <b-icon-card-list class="mr-1"></b-icon-card-list>以下にお答えください
                    </p>
                    <!-- form -->
                    <b-form>
                        <!-- 加入 -->
                        <b-form-group label="現在、生命保険に加入されていますか？" class="text-primary px-3 py-1">
                            <b-form-radio v-model="subscribe" value="はい" name="subscribe" class="text-dark d-inline mr-3">はい</b-form-radio>
                            <b-form-radio v-model="subscribe" value="いいえ" name="subscribe" class="text-dark d-inline">いいえ</b-form-radio>
                        </b-form-group>

                        <!-- 入院 -->
                        <transition name="fade">
                            <b-form-group v-if="subscribe" label="現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？" class="text-primary px-3 py-1">
                                <b-form-radio v-model="diagnosis" value="はい" name="diagnosis" class="text-dark d-inline mr-3">はい</b-form-radio>
                                <b-form-radio v-model="diagnosis" value="いいえ" name="diagnosis" class="text-dark d-inline">いいえ</b-form-radio>
                            </b-form-group>
                        </transition>
                        <!-- 病歴 -->
                        <transition name="fade">
                            <b-form-group v-if="diagnosis" label="過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？" class="text-primary px-3 py-1">
                                <b-form-radio v-model="history" value="はい" name="history" class="text-dark d-inline mr-3">はい</b-form-radio>
                                <b-form-radio v-model="history" value="いいえ" name="history" class="text-dark d-inline">いいえ</b-form-radio>
                            </b-form-group>
                        </transition>
                    </b-form>
                </div>
            </div><!-- /row -->
            <div class="row">
                <div class="mx-auto mb-3">
                    <router-link to="/customer-info" tag="button" class="btn text-light bg-info border-0 rounded mr-5">
                    前へ戻る
                    </router-link>
                    <router-link to="/customer-content" @click.native="addQuestionnaireInfo" tag="button" class="btn text-light bg-info border-0 rounded">
                        次へ進む
                    </router-link>
                </div>
            </div><!-- /row -->
        </div><!-- /container -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            subscribe: '',
            diagnosis: '',
            history: ''
        }
    },
    methods: {
        addQuestionnaireInfo: function() {
            const info = {
                subscribe: this.subscribe,
                diagnosis: this.diagnosis,
                history: this.history
            };
            this.$store.commit('addQuestionnaireInfo', info);
        }
    }
}
</script>
<style scoped>
/* fade */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
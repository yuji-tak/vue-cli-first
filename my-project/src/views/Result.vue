<template>
    <div>
        <div class="container bg-light mt-5">
            <div class="row">
                <div class="col-12 p-0">
                    <p class="customer_info_parent bg-info text-light text-center p-1">
                        <span class="customer_info bg-primary px-1">STEP-4</span>
                        <b-icon-card-list class="mr-1"></b-icon-card-list>以下の内容をご確認ください
                    </p>
                </div>
                <!-- 確認画面 -->
                <div class="col-12 mb-3"  v-if="this.$store.state.selectedInfo[2]">
                    <div>
                        <p class="text-primary">-性別-</p>
                        <p class="text-dark">{{ gender }}</p>
                    </div>
                    <div>
                        <p class="text-primary">-生年月日-</p>
                        <p class="text-dark">{{ birth }}</p>
                    </div>
                    <div>
                        <p class="text-primary">-現在、生命保険に加入されていますか？-</p>
                        <p class="text-dark">{{ subscribe }}</p>
                    </div>
                    <div>
                        <p class="text-primary">-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？？-</p>
                        <p class="text-dark">{{ diagnosis }}</p>
                    </div>
                    <div>
                        <p class="text-primary">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</p>
                        <p class="text-dark">{{ history }}</p>
                    </div>
                    <div>
                        <p class="text-primary">-ご相談内容-</p>
                        <p class="text-dark">{{ consultationContent }}</p>
                    </div>
                </div>
            </div><!-- /row -->
            <div class="row">
                <div class="mx-auto mb-3">
                    <router-link to="/customer-content" tag="button" class="btn text-light bg-info border-0 rounded mr-5">
                    前へ戻る
                    </router-link>
                    <router-link to="/" tag="button" class="btn text-light bg-info border-0 rounded">
                    送信
                    </router-link>
                </div>
            </div><!-- /row -->
        </div><!-- /container -->
    </div>
</template>
<script>
export default {
    computed: {
        gender() {
            return this.$store.state.selectedInfo[0].gender;
        },
        birth() {
            return `${this.$store.state.selectedInfo[0].birthYear}年${this.$store.state.selectedInfo[0].birthMonth}月${this.$store.state.selectedInfo[0].birthDay}日`;
        },
        subscribe() {
            return this.$store.state.selectedInfo[1].subscribe;
        },
        diagnosis() {
            return this.$store.state.selectedInfo[1].diagnosis;
        },
        history() {
            return this.$store.state.selectedInfo[1].history;
        },
        consultationContent() {
            return this.$store.state.selectedInfo[2].consultationContent;
        }
    }
}
</script>
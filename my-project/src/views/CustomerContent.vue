<template>
    <div>
         <div class="container bg-light mt-5">
            <div class="row">
                <div class="col-12 p-0">
                    <p class="customer_info_parent bg-info text-light text-center p-1">
                        <span class="customer_info bg-primary px-1">STEP-3</span>
                        <b-icon-card-list class="mr-1"></b-icon-card-list>ご相談内容をご記入ください
                    </p>
                </div>
                <div class="col-12 mb-3">
                    <!-- form -->
                    <p class="text-primary">-ご相談内容-</p>
                    <b-form-textarea v-model="consultationContent" value="consultationContent" rows="10" class=""></b-form-textarea>
                </div>
            </div><!-- /row -->
            <div class="row">
                <div class="mx-auto mb-3">
                    <router-link to="/customer-questionnaire" tag="button" class="btn text-light bg-info border-0 rounded mr-5">
                    前へ戻る
                    </router-link>
                    <router-link to="/result" @click.native="addConsultationContent" tag="button" class="btn text-light bg-info border-0 rounded">
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
        return{
            consultationContent: ''
        }
    },
    methods: {
        addConsultationContent: function() {
            const info = {
                consultationContent: this.consultationContent
            };
            this.$store.commit('addConsultationContent', info);
        }
    }
}
</script>
<template>
  <div>
    <div class="container bg-light mt-5">
      <div class="row">
        <div class="col-12 p-0">
          <p class="customer_info_parent bg-info text-light text-center p-1">
            <span class="customer_info bg-primary px-1">STEP-1</span>
            <b-icon-card-list class="mr-1"></b-icon-card-list>お客様の情報を入力してください
          </p>
          <!-- form -->
          <b-form>
            <!-- 性別 -->
            <b-form-group label="-性別-" class="text-primary px-3 py-1">
              <b-form-radio v-model="gender" value="男性" name="gender" class="text-dark d-inline mr-3">男性</b-form-radio>
              <b-form-radio v-model="gender" value="女性" name="gender" class="text-dark d-inline">女性</b-form-radio>
            </b-form-group>
            <!-- 生年月日 -->
            <b-form-group label="-生年月日-" class="text-primary px-3 py-1">
              <b-form-select v-model="selectedYear" :options="optionsYear" class="col-4 mb-3 ml-1"></b-form-select>
              <span class="text-dark">年</span>
              <b-form-select v-model="selectedMonth" :options="optionsMonth" class="col-2 mb-3 ml-1"></b-form-select>
              <span class="text-dark">月</span>
              <b-form-select v-model="selectedDay" :options="optionsDay" class="col-2 mb-3 ml-1"></b-form-select>
              <span class="text-dark">日</span>
            </b-form-group>
          </b-form>
        </div>
      </div><!-- /row -->
      <div class="row">
        <div class="mx-auto mb-3">
          <router-link to="/" tag="button" class="btn text-light bg-info border-0 rounded mr-5">
            前へ戻る
          </router-link>
          <router-link to="/customer-questionnaire" @click.native="addBasicInfo" tag="button" class="btn text-light bg-info border-0 rounded">
            次へ進む
          </router-link>
        </div>
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>
<script>
export default {
  data() { // オブジェクトのメソッド記法
    return {
      gender: '',
      selectedYear: 1990,
      selectedMonth: 1,
      selectedDay: 1,
      year: 1920,
      month: 1,
      day: 1,
      optionsYear: [],
      optionsMonth: [],
      optionsDay: []
    }
  },
  methods: {
    setYear: function() {
      while(this.year < 2001) {
          if ( this.year > 1988) {
              this.optionsYear.push( {value: this.year, text: this.year + '年' + '\n(平成' + (this.year - 1988) + ')'} );
          } else if ( this.year > 1925 ) {
              this.optionsYear.push( {value: this.year, text: this.year + '年' + '\n(昭和' + (this.year - 1925) + ')'} );
          } else if ( this.year > 1911 ) {
              this.optionsYear.push( {value: this.year, text: this.year + '年' + '\n(大正' + (this.year - 1911) + ')'} );
          }
          this.year++;
      }
    },
    setMonth: function() {
      while(this.month < 13) {
          this.optionsMonth.push( {value: this.month, text: this.month} );
          this.month++;
      }
    },
    setDay: function() {
      while(this.day < 32) {
          this.optionsDay.push( {value: this.day, text: this.day} );
          this.day++;
      }
    },
    // 取得した値をvuexへ保存：sessionStorage
    addBasicInfo: function() {
      const info = {
        gender: this.gender,
        birthYear: this.selectedYear,
        birthMonth: this.selectedMonth,
        birthDay: this.selectedDay 
      };
      this.$store.commit('addBasicInfo', info);
    },
  },
  created() {
    this.setYear(),
    this.setMonth(),
    this.setDay()
  }
}
</script>
<style>
.customer_info_parent {
  position: relative;
}
.customer_info {
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%)
}
</style>
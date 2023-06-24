<script>
import {reactive, ref} from "vue";

export default {
  setup(){
    const data = reactive({goodsRateList: []})
    let orderIsDes = ref(true)
    let goodsSoldIsDes = ref(true)
    let moneyIsDes = ref(true)
    return {
      data,
      orderIsDes,
      goodsSoldIsDes,
      moneyIsDes
    }
  },
  methods: {
    sort_by_goods_count_sold(){
      if(this.goodsSoldIsDes){
        this.data.goodsRateList.sort((a, b)=>{
          return a.goodsSoldCount - b.goodsSoldCount
        })
      }else{
        this.data.goodsRateList.sort((a, b)=>{
          return -(a.goodsSoldCount - b.goodsSoldCount)
        })
      }
      this.goodsSoldIsDes = !this.goodsSoldIsDes
    },
    sort_by_money_submit(){
      if(this.moneyIsDes){
        this.data.goodsRateList.sort((a, b)=>{
          return a.moneySubmit - b.moneySubmit
        })
      }else{
        this.data.goodsRateList.sort((a, b)=>{
          return -(a.moneySubmit - b.moneySubmit)
        })
      }
      this.moneyIsDes = !this.moneyIsDes
    },
    sort_by_order(){
      if(this.orderIsDes){
        this.data.goodsRateList.sort((a, b)=>{
          return a.orderCount - b.orderCount
        })
      }else{
        this.data.goodsRateList.sort((a, b)=>{
          return -(a.orderCount - b.orderCount)
        })
      }
      this.orderIsDes = !this.orderIsDes
    }
  },
  mounted() {
    this.$fetchWithIpPort('/delivery/get-allot-rate-list')
        .then(res => res.json())
        .then((res) => {
          this.data.goodsRateList = res.data
          console.log(res.data)
        }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<template>
  <h5>分站排行</h5>

  <div >
    <div class="card">
      <div class="container px-4 text-center">
        <div class="input-group mb-3">
          <span class="input-group-text">选择区间：</span>
          <input type="date" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
          <span class="input-group-text" id="basic-addon1">到</span>
          <input type="date" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </div>

      <!--展示信息的table-->
      <table class="table">
        <thead class="table-secondary">
        <tr>
          <th>序号</th>
          <th>分站名称</th>
          <th>分站订单数量<i class="bi bi-sort-numeric-down" @click="sort_by_order"></i></th>
          <th>分站销售商品数量<i class="bi bi-sort-numeric-down" @click="sort_by_goods_count_sold"></i></th>
          <th>财务汇缴<i class="bi bi-sort-numeric-down" @click="sort_by_money_submit"></i></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(goodsSell, index) of this.data.goodsRateList" class="table-primary" :key="goodsSell.id">
          <td v-text="index + 1"></td>
          <td>{{ goodsSell.name }}</td>
          <td>{{ goodsSell.orderCount }}</td>
          <td>{{ goodsSell.goodsSoldCount }}</td>
          <td>{{ goodsSell.moneySubmit }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- 分页 -->
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link">1</a></li>
        <li class="page-item"><a class="page-link">2</a></li>
        <li class="page-item"><a class="page-link">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>
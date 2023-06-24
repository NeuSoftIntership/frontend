<script>
import {reactive} from "vue";
import {BillBatchStatus} from "../../../assets/config.js";
import {nanoid} from "nanoid";

export default {
  computed: {
    BillBatchStatus() {
      return BillBatchStatus
    }
  },
  setup(){
    const data = reactive({merchantSettleDetail: undefined})
    return {
      data
    }
  },
  methods:{

  },
  mounted() {
    this.$fetchWithIpPort('/finance/get-merchant-settle-detail')
        .then(res => res.json())
        .then((res) => {
          this.data.merchantSettleList = res.data
        }).catch((e) => {
      console.log(e)
    })
  }

}
</script>

<template>
  <h5>供货商结算</h5>
  <div >
    <div class="card">
      <div class="container px-4 text-center _flex-space-between">
        <div class="input-group mb-3">
          <div class="col-auto">
            <label for="inputPassword6" class="col-form-label">日期：</label>
          </div>
          <div class="col-auto">
            <input type="date"  class="form-control">
          </div>
        </div>
        <div class="input-group mb-3" style="margin-left: 40px">
          <input type="text" class="form-control" placeholder="商品名" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">查询</button>
        </div>
      </div>

      <!--展示信息的table-->
      <table class="table">
        <thead class="table-secondary">
        <tr>
          <th>序号</th>
          <th>商品名</th>
          <th>单价</th>
          <th>结算数量</th>
          <th>结算金额</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(goods, index) of this.data.merchantSettleList" class="table-primary" :key="goods.id">
          <td v-text="index + 1"></td>
          <td>{{ goods.name }}</td>
          <td>{{ goods.price }}</td>
          <td>{{ goods.countSettle }}</td>
          <td>{{ goods.moneySettle }}</td>
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
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
    const data = reactive({allotSettleList: undefined})
    return {
      data
    }
  },
  methods:{

  },
  mounted() {
    this.$fetchWithIpPort('/finance/get-allot-settle')
        .then(res => res.json())
        .then((res) => {
          this.data.allotSettleList = res.data
        }).catch((e) => {
      console.log(e)
    })
  }

}
</script>

<template>
  <h5>分站结算</h5>
  <div >
    <div class="card">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="分站名" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">查询</button>
      </div>

      <!--展示信息的table-->
      <table class="table">
        <thead class="table-secondary">
        <tr>
          <th>序号</th>
          <th>分站编号</th>
          <th>分站名</th>
          <th>送货数量(全部)</th>
          <th>收款额(全部)</th>
          <th>退款数量</th>
          <th>退款额</th>
          <th>实收款</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(allotSettle, index) of this.data.allotSettleList" class="table-primary" :key="allotSettle.id">
          <td v-text="index + 1"></td>
          <td>{{ allotSettle.id }}</td>
          <td>{{ allotSettle.name }}</td>
          <td>{{ allotSettle.countTran }}</td>
          <td>{{ allotSettle.moneyReceive }}</td>
          <td>{{ allotSettle.countRefund }}</td>
          <td>{{ allotSettle.moneyRefund }}</td>
          <td>{{ allotSettle.moneyReal }}</td>
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
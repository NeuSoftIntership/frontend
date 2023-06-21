<script>
  // 发票 -> 任务单
  import {reactive} from "vue";
  import {BillStatusMap, OrderStatusMap} from "../../../assets/config.js";

  export default {
    computed: {
      OrderStatusMap() {
        return OrderStatusMap
      },
      BillStatusMap() {
        return BillStatusMap
      }
    },
    setup(){
      const data = reactive({billList: undefined})

      return {
        data
      }
    },
    methods:{
      history_to_dispatch_detail(){
        this.$router.push({
          name: "allot-dispatch-task-detail",
        });
      },
      history_to_receipt_record(){
        this.$router.push({
          name: "receipt-record",
        });
      },
    },
    mounted() {
      this.$fetchWithIpPort('/allot/get-allot-bill-list')
          .then(res => res.json())
          .then((res) => {
            this.data.billList = res.data
          }).catch((e) => {
        console.log(e)
      })
    }
  }
</script>

<template>
  <h6>XXX站发票列表</h6>
  <div style="height: 100%">
    <!--  搜索  -->
    <div class="input-group con" style="margin: 40px 0 40px 0">
      <input type="text" class="form-control" placeholder="Recipient's username"
             aria-label="Recipient's username with two button addons">
      <button class="btn btn-outline-secondary" type="button">搜索</button>
    </div>
    <!-- 展示数据的table -->
    <table class="table">
      <thead class="table-secondary">
      <tr>
        <th>序号</th>
        <th>订单ID</th>
        <th>发票号</th>
        <th>配送员</th>
        <th>应付款项</th>
        <th>订单状态</th>
        <th>发票状态</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(bill, index) of this.data.billList" class="table-primary" :key="bill.id">
        <td v-text="index + 1"></td>
        <td>{{ bill.orderId }}</td>
        <td>{{ bill.billId }}</td>
        <td>{{ bill.courier }}</td>
        <td>￥{{ bill.pay }}</td>
        <td>{{ OrderStatusMap[bill.orderStatus] }}</td>
        <td>{{ BillStatusMap[bill.billStatus] }}</td>
        <td>
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary" @click="history_to_dispatch_detail">订单详情</button>
            <button type="button" class="btn btn-outline-primary" @click="history_to_receipt_record">回执录入</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>

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
<script>
import Divide from "../../common/Divide.vue";
import {reactive} from "vue";
import Order from "../../client/sub/Order.vue";
import {OrderStatusMap} from "../../../assets/config.js";

export default {
  computed: {
    OrderStatusMap() {
      return OrderStatusMap
    },
    Order() {
      return Order
    }
  },
  setup() {
    const data = reactive({repDispatchRequestList: undefined})

    return {
      data
    }
  },
  methods: {
    history_to_dispatch_request_detail() {

    }
  },
  components: {Divide},
  mounted() {
    this.$fetchWithIpPort('/repository/get-rep-dispatch-request-list')
        .then(res => res.json())
        .then((res) => {
          this.data.repDispatchRequestList = res.data
          console.log(res.data)
        }).catch((e) => {
      console.log(e)
    })
  }

}
</script>

<template>
  <h5>调货请求列表</h5>
  <div style="height: 100%">
    <!--  搜索  -->
    <div class="input-group con" style="margin: 40px 0 40px 0">
      <span class="input-group-text" id="inputGroup-sizing-default">选择出库日期</span>
      <input type="date" class="form-control" aria-label="Sizing example input"
             aria-describedby="inputGroup-sizing-default">
      <Divide distance="20px" dir-is-v="false"></Divide>
      <span class="input-group-text" id="inputGroup-sizing-default">选择配货日期</span>
      <input type="date" class="form-control" aria-label="Sizing example input"
             aria-describedby="inputGroup-sizing-default">

      <Divide distance="20px" dir-is-v="false"></Divide>
      <input type="text" class="form-control" placeholder="Recipient's username"
             aria-label="Recipient's username with two button addons">
      <button class="btn btn-outline-secondary" type="button">搜索</button>
    </div>
    <!-- 展示数据的table -->
    <table class="table">
      <thead class="table-secondary">
      <tr>
        <th>序号</th>
        <th>收货人</th>
        <th>收货人地址</th>
        <th>调拨分站</th>
        <th>订单状态</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) of this.data.repDispatchRequestList" class="table-primary" :key="item.id">
        <td v-text="index + 1"></td>
        <td>{{ item?.receiver }}</td>
        <td>{{ item?.address }}</td>
        <td>{{ item?.allot }}</td>
        <td>{{ OrderStatusMap[item?.orderStatus] }}</td>
        <td>
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary" @click="history_to_dispatch_request_detail">详细信息
            </button>
            <button type="button" class="btn btn-outline-primary">出库</button>
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
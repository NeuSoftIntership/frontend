<script>
import {OrderStatusMap} from "../../assets/config.js";
import {reactive} from "vue";

export default {
  setup(){
    const data = reactive({allot_order_list: []})

    return {
      data
    }
  },
  computed: {
    OrderStatusMap() {
      return OrderStatusMap
    }
  },
  methods:{// dispatch-task
    history_to_dispatch_task(){
      this.$router.push({
        name: "dispatch-task",
      });
    },
    history_to_dispatch_detail(){
      this.$router.push({
        name: "allot-dispatch-task-detail",
      });
    },
  },
  mounted() { // task -> order
    this.$fetchWithIpPort('/allot/get-allot-order')
        .then(res => res.json())
        .then((res) => {
          this.data.allot_order_list = res.data
        }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<template>
  <h5>任务单列表</h5>
  <div >
    <div class="card">
      <!--  搜索  -->
      <div class="input-group con" style="margin: 40px 0 40px 0">
        <input type="text" class="form-control" placeholder="请输入订单ID"
               aria-label="Recipient's username with two button addons">
        <button class="btn btn-outline-secondary" type="button" @click="history_to_add_order">新建订单</button>
      </div>
      <!--展示信息的table-->
      <table class="table">
        <thead class="table-secondary">
        <tr>
          <th>序号</th>
          <th>送货地址</th>
          <th>收货人</th>
          <th>接收电话</th>
          <th>订单状态</th>
          <th>配送员</th>
          <th>配送员联系电话</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(order, index) of this.data.allot_order_list" class="table-primary" :key="order.id">
          <td v-text="index + 1"></td>
          <td>{{ order.address }}</td>
          <td>{{ order.receiver }}</td>
          <td>{{ order.phone }}</td>
          <td>{{OrderStatusMap[order.orderStatus]}}</td>
          <td>{{order.courier}}</td>
          <td>{{order.courierPhone}}</td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" class="btn btn-outline-primary" @click="history_to_dispatch_task">分配任务</button>
              <button type="button" class="btn btn-outline-primary" @click="history_to_dispatch_task">重新分配</button>
              <button type="button" class="btn btn-outline-primary" @click="history_to_dispatch_detail">详细信息</button>
            </div>
          </td>
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
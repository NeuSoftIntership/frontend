<script>
import {reactive, ref} from "vue";
import {OrderStatusMap} from '../../assets/config.js'

  export default {
    setup(){
      const orderStatusMap = OrderStatusMap
      let clientName = ref(undefined)
      let orders = reactive([])

      return {
        clientName,
        orders,
        orderStatusMap
      }
    },
    methods:{
      history_to_details(){
        this.$router.push({
          name: "order-details"
        })
      },
      history_to_add_order(){
        this.$router.push({
          name: "add-order"
        })
      }
    },
    mounted() {
      this.clientName = this.$route.query.clientName
      this.$fetchWithIpPort('/client/get-client-orders')
          .then(res => res.json())
          .then((res) => {
            this.orders.push(...res.data)
          }).catch((e) => {
        console.log(e)
      })
    }
  }
</script>

<template>
  <div >
    <h2><span v-text="clientName"></span>的所有订单</h2>
    <div class="card">
      <!--  搜索  -->
      <div class="input-group con" style="margin: 40px 0 40px 0">
        <input type="text" class="form-control" placeholder="请输入订单ID"
               aria-label="Recipient's username with two button addons">
        <button style="margin: 0 20px 0 20px" class="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          搜索
        </button>
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
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(order, index) of this.orders" class="table-primary" :key="order.id">
          <td v-text="index + 1"></td>
          <td>{{ order.address }}</td>
          <td>{{ order.receiver }}</td>
          <td>{{ order.phone }}</td>
          <td>{{orderStatusMap[order.orderStatus]}}</td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" class="btn btn-outline-primary" @click="history_to_details">详细信息</button>
              <button type="button" class="btn btn-outline-primary" @click="history_to_modify">退货</button>
              <button type="button" class="btn btn-outline-primary">换货</button>
              <button type="button" class="btn btn-outline-primary">取消</button>
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
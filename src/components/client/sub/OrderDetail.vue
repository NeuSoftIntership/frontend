<script>
  import {reactive} from "vue";
  import {OrderStatusMap} from "../../../assets/config.js";

  export default {
    computed: {
      OrderStatusMap() {
        return OrderStatusMap
      }
    },
    setup(){
      let data = reactive({orderDetail: undefined})

      return{
        data
      }
    },
    mounted() {
      this.$fetchWithIpPort('/client/get-order-detail')
          .then(res => res.json())
          .then((res) => {
            console.log(res);
            this.data.orderDetail = res.data
          }).catch((e) => {
        console.log(e)
      })
    }
  }
</script>

<template>
  <h5>XXX ID姓名 订单</h5>
  <div class="card">
    <div class="align-content-center">
      <h5>基本信息</h5>
      <ul class="list-group list-group-horizontal-md _li-quarter">
        <li class="list-group-item">客户姓名</li>
        <li class="list-group-item">
          {{this.data.orderDetail?.clientName}}
        </li>
        <li class="list-group-item">发票选项</li>
        <li class="list-group-item">
          {{this.data.orderDetail?.billNeed?'需要':'不需要'}}
        </li>
      </ul>
      <ul class="list-group list-group-horizontal _li-quarter">
        <li class="list-group-item">下单日期</li>
        <li class="list-group-item">
          {{ this.data.orderDetail?.orderDate }}
        </li>
        <li class="list-group-item">送货地址</li>
        <li class="list-group-item">{{ this.data.orderDetail?.address }}</li>
      </ul>
      <ul class="list-group list-group-horizontal-sm _li-quarter">
        <li class="list-group-item">订单状态</li>
        <li class="list-group-item">{{ OrderStatusMap[this.data.orderDetail?.orderStatus] }}</li>
        <li class="list-group-item">收货人</li>
        <li class="list-group-item">{{this.data.orderDetail?.receiver}}</li>
      </ul>
      <ul class="list-group list-group-horizontal-md _li-quarter">
        <li class="list-group-item">备注信息</li>
        <li class="list-group-item">{{this.data.orderDetail?.remark}}</li>
        <li class="list-group-item">收货人电话</li>
        <li class="list-group-item">{{this.data.orderDetail?.phone}}</li>
      </ul>

    </div>

    <div>
      <h5>订单详情</h5>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">序号</th>
          <th scope="col">分类1</th>
          <th scope="col">分类2</th>
          <th scope="col">商品名</th>
          <th scope="col">单价</th>
          <th scope="col">数量</th>
          <th scope="col">总价</th>
        </tr>
        </thead>
        <tbody>
        <!--商品的名字就是ID，必须是唯一的表示-->
        <tr v-for="(order, index) in data.orderDetail?.goodsMap.order_list" :key="order.name">
          <th scope="row" v-text="index + 1"></th>
          <!--          分类1-->
          <td v-text="order.class1">

          </td>
          <!--          分类2-->
          <td v-text="order.class2">

          </td>
          <!--          具体商品的列表-->
          <td v-text="order.name">

          </td>
          <td v-text="order.price">

          </td>
          <td>
            100
          </td>
          <td v-text="order.perTotalPrice"></td>
        </tr>
        </tbody>
      </table>

      <div style="float: right">
        总价：<span v-text="data.orderDetail?.goodsMap.total"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<script>
import {reactive} from "vue";
import {GoodsRequestEnterStatus} from "../../../assets/config.js";

export default {
  computed: {
    GoodsRequestEnterStatus() {
      return GoodsRequestEnterStatus
    }
  },
  setup(){
    const data = reactive({enterDetail: undefined})

    return{
      data
    }
  },
  mounted() {
    this.$fetchWithIpPort('/repository/get-rep-request-enter-detail')
        .then(res => res.json())
        .then((res) => {
          this.data.enterDetail = res.data
          console.log(res.data);
        }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<template>
  <h5>请求入库详情</h5>

  <div class="card">
    <div class="align-content-center">
      <h5>基本信息</h5>
      <ul class="list-group list-group-horizontal-md _li-quarter">
        <li class="list-group-item">补货请求号</li>
        <li class="list-group-item">
          {{data.enterDetail?.lackId}}
        </li>
        <li class="list-group-item">补货日期</li>
        <li class="list-group-item">
          {{data.enterDetail?.requestDate}}
        </li>
      </ul>
      <ul class="list-group list-group-horizontal _li-quarter">
        <li class="list-group-item">所属订单号</li>
        <li class="list-group-item">
          {{data.enterDetail?.orderId}}
        </li>
        <li class="list-group-item">补货单状态</li>
        <li class="list-group-item">
          {{GoodsRequestEnterStatus[data?.enterDetail?.requestStatus]}}
        </li>
      </ul>
    </div>
    <span style="margin: 20px"></span>
    <div>
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
        <tr v-for="(order, index) in data.enterDetail?.goodsMap.order_list" :key="order.name">
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
          <td v-text="order.count">

          </td>
          <td v-text="order.perTotalPrice"></td>
        </tr>
        </tbody>
      </table>

      <div style="float: right">
        总价：<span v-text="data.enterDetail?.goodsMap.total" style="margin: 0 40px 0 0px"></span>
        <button type="button" class="btn btn-outline-warning">入库</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
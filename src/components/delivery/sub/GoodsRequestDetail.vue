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
    const data = reactive({goodsRequestDetail: {
        requestGoodsList: undefined
      }
    })

    return {
      data
    }
  },
  mounted() { // /delivery/get-goods-request-detail
    this.$fetchWithIpPort('/delivery/get-goods-request-detail')
        .then(res => res.json())
        .then((res) => {
          this.data.goodsRequestDetail = res.data
          console.log(res.data)
        }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<template>
  <div class="card">
    <div class="align-content-center">
      <h5>基本信息</h5>
      <ul class="list-group list-group-horizontal-md _li-quarter">
        <li class="list-group-item">补货请求单号</li>
        <li class="list-group-item">
          {{this.data.goodsRequestDetail?.id}}
        </li>
        <li class="list-group-item">所属订单</li>
        <li class="list-group-item">
          {{this.data.goodsRequestDetail?.idTarget}}
        </li>
      </ul>
      <ul class="list-group list-group-horizontal _li-quarter">
        <li class="list-group-item">补货日期</li>
        <li class="list-group-item">
          {{this.data.goodsRequestDetail?.requestDate}}
        </li>
        <li class="list-group-item">补货状态</li>
        <li class="list-group-item">
          {{GoodsRequestEnterStatus[this.data.goodsRequestDetail?.requestStatus]}}
        </li>
      </ul>
    </div>

    <div>
      <h5>补货订单商品详情</h5>
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
        <tr v-for="(order, index) in this.data.goodsRequestDetail.requestGoodsList" :key="order.name">
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
    </div>

    <div class="d-grid gap-2 d-md-block">
      <button class="btn btn-outline-primary"  type="button" style="float: right;margin-left: 20px">返回</button>
      <button class="btn btn-outline-primary"  type="button" style="float: right;">发送补货请求</button>
    </div>
  </div>
</template>

<style scoped>

</style>
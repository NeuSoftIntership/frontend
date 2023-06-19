<script>
  export default {

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
          李白
        </li>
        <li class="list-group-item">发票选项</li>
        <li class="list-group-item">
          需要
        </li>
      </ul>
      <ul class="list-group list-group-horizontal _li-quarter">
        <li class="list-group-item">下单日期</li>
        <li class="list-group-item" v-text="2022">

        </li>
        <li class="list-group-item">送货地址</li>
        <li class="list-group-item">？？？</li>
      </ul>
      <ul class="list-group list-group-horizontal-sm _li-quarter">
        <li class="list-group-item">订单状态</li>
        <li class="list-group-item">XXX</li>
        <li class="list-group-item">收货人</li>
        <li class="list-group-item">XXX</li>
      </ul>
      <ul class="list-group list-group-horizontal-md _li-quarter">
        <li class="list-group-item">备注信息</li>
        <li class="list-group-item">XXX</li>
        <li class="list-group-item">收货人电话</li>
        <li class="list-group-item">XXX</li>
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
        <tr v-for="(goods, index) in goods_order_list" :key="goods.name">
          <th scope="row" v-text="index + 1"></th>
          <!--          分类1-->
          <td>
            <select class="form-select" aria-label="Default select example" v-model="goods.class1" @change="change_class_or_goods(goods.class1)">
              <option :value="class1" v-for="(class1) in goodsShowListMap.zero" v-text="class1"></option>
            </select>
          </td>
          <!--          分类2-->
          <td>
            <select class="form-select" aria-label="Default select example" v-model="goods.class2" @change="change_class_or_goods(goods.class1, goods.class2)">
              <option :value="class2" v-for="(class2) in goodsShowListMap.one" v-text="class2"></option>
            </select>
          </td>
          <!--          具体商品的列表-->
          <td>
            <select class="form-select" aria-label="Default select example" v-model="goods.name" @change="change_class_or_goods(goods.class1, goods.class2, goods.name, index)">
              <option :value="goodsName" v-for="(goodsName) in goodsShowListMap.two" v-text="goodsName"></option>
            </select>
          </td>
          <td v-text="goods.price">

          </td>
          <td>
            <input type="number" class="form-control" value="0" @change="calEachTotal($event, goods)">
          </td>
          <td v-text="goods.perTotalPrice"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <div>
      <div class="align-content-end  justify-content-md-end" style="float: right" >
        <span>总价：XXX</span> <button type="button" class="btn btn-outline-primary me-md-2">确认</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
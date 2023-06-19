<script>
import {reactive} from "vue";

  export default {
    setup(){
      // 正在修改的某个商品订单仅仅为一个
      const isEdit = true
      // 现在的分类是三级
      const goods_classify_list = reactive([])
      // 相当于索引表
      // 表示已经选了几个分类
      const goodsShowListMap = reactive({
        "zero": {
          ref : goods_classify_list,
          arr: []
        },
        "one": {
          ref : undefined,
          arr: []
        },
        "two": {
          ref : undefined,
          arr: []
        },
      })
      const goods_order_list = reactive( [])
      const order = reactive({
        order_list: goods_order_list,
        total: 0
      })
      return {
        goods_order_list,
        goodsShowListMap,
        order,
        goods_classify_list,
        isEdit
      }
    },
    methods:{
      add_goods(){
        this.goods_order_list.forEach(goods=>{
          goods.isEdit = false
        })
        this.goods_order_list.push({perTotalPrice: 0, isEdit: true})
      },
      // 最多两个参数
      change_class_or_goods(...args){
        // 确定一级分类
        if (args.length === 0){

        }
        // 确定一级分类，得到二级分类的list
        else if (args.length === 1){
          console.log(1)
          for (let i = 0; i < this.goods_classify_list.length; i++) {
            if (this.goods_classify_list[i].type === args[0]){
              this.goodsShowListMap.one.ref = this.goods_classify_list[i].subList
              this.goodsShowListMap.one.arr = []
              this.goods_classify_list[i].subList.forEach((class1)=>{
                this.goodsShowListMap.one.arr.push(class1.type)
              })
              break
            }
          }
        }
        // 确定二级分类，确定商品的list
        else if (args.length === 2){
          console.log(2)
          const arr = this.goodsShowListMap.one.ref
          console.log("2",arr)
          for (let i = 0; i < arr.length; i++) {
            if (arr[i].type === args[1]){
              this.goodsShowListMap.two.ref = arr[i].subList
              this.goodsShowListMap.two.arr = []
              arr[i].subList.forEach((class2)=>{
                this.goodsShowListMap.two.arr.push(class2.name)
              })
              break
            }
          }
        }
        // 确定商品
        else {
          // console.log(4, args[2])
          const arr = this.goodsShowListMap.two.ref
          for (let i = 0; i < arr.length; i++) {
            if(arr[i].name == args[2]){
              this.goods_order_list[args[3]].price = arr[i].price
            }
          }
        }
      },
      calEachTotal($event, goods){
        goods.buyC = $event.target.value;
        console.log(this.goods_order_list);
        // 计算每个的总价
        goods.perTotalPrice = $event.target.value * goods.price
        this.order.total = 0
        // 计算全部的价格
        this.goods_order_list.forEach((goods)=>{
          // console.log(goods.perTotalPrice)
          this.order.total += goods.perTotalPrice
        })
      },
      removeGoods(index){
        this.goods_order_list.splice(index,1)
      },
      changeModifyGoodsStatus(index){
        this.goods_order_list[index].isEdit = !this.goods_order_list[index].isEdit
      }
    },
    mounted() { // add-order
      this.$fetchWithIpPort('/client/get-goods-class')
          .then(res => res.json())
          .then((res) => {
            this.goods_classify_list = res.data
            this.goods_classify_list.forEach(class1 => {
              this.goodsShowListMap.zero.arr.push(class1.type)
            })
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
      <ul class="list-group list-group-horizontal _li-quarter">
        <li class="list-group-item">收货地址</li>
        <li class="list-group-item">
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" style="border: none">
        </li>
        <li class="list-group-item">订购日期</li>
        <li class="list-group-item">自动填充的日期</li>
      </ul>
      <ul class="list-group list-group-horizontal-sm _li-quarter">
        <li class="list-group-item">收货人</li>
        <li class="list-group-item">小明</li>
        <li class="list-group-item">备注信息</li>
        <li class="list-group-item">
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" style="border: none">
        </li>
      </ul>
      <ul class="list-group list-group-horizontal-md _li-quarter">
        <li class="list-group-item">收货人电话号码</li>
        <li class="list-group-item">
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" style="border: none">
        </li>
        <li class="list-group-item">发票选项</li>
        <li class="list-group-item">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              需要
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              不需要
            </label>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <h5>选购订单</h5>
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
          <th scope="col">操作</th>
        </tr>
        </thead>
        <tbody>
        <!--商品的名字就是ID，必须是唯一的表示-->
        <tr v-for="(goods, index) in goods_order_list" :key="goods.name">
          <th scope="row" v-text="index + 1"></th>
          <!--          分类1-->
          <td>
            <span v-show="!goods.isEdit" v-text="goods.class1"></span>
            <select v-show="goods.isEdit" class="form-select" aria-label="Default select example" v-model="goods.class1" @change="change_class_or_goods(goods.class1)">
              <option :value="class1" v-for="(class1) in goodsShowListMap.zero.arr" v-text="class1"></option>
            </select>
          </td>
<!--          分类2-->
          <td>
            <span v-show="!goods.isEdit" v-text="goods.class2"></span>
            <select v-show="goods.isEdit" class="form-select" aria-label="Default select example" v-model="goods.class2" @change="change_class_or_goods(goods.class1, goods.class2)">
              <option :value="class2" v-for="(class2) in goodsShowListMap.one.arr" v-text="class2"></option>
            </select>
          </td>
<!--          具体商品的列表-->
          <td>
            <span v-show="!goods.isEdit" v-text="goods.name"></span>
            <select v-show="goods.isEdit" class="form-select" aria-label="Default select example" v-model="goods.name" @change="change_class_or_goods('', '', goods.name, index)">
              <option :value="goodsName" v-for="(goodsName) in goodsShowListMap.two.arr" v-text="goodsName"></option>
            </select>
          </td>
          <td v-text="goods.price">

          </td>
          <td>
            <span v-show="!goods.isEdit" v-text="goods.buyC"></span>
            <input v-show="goods.isEdit" type="number" class="form-control" value="0" @change="calEachTotal($event, goods)">
          </td>
          <td v-text="goods.perTotalPrice"></td>
          <td>
            <button type="button" class="btn btn-outline-info" @click="changeModifyGoodsStatus(index)"
            v-text="goods.isEdit?'完成':'修改'"></button>
            <button type="button" class="btn btn-outline-danger" @click="removeGoods(index)">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>
      <div class="_flex-space-between">
        <button type="button" class="btn btn-secondary" @click="add_goods">新增商品</button> <span>总价：<span v-text="order.total"></span></span>
      </div>
      <div class="align-content-end  justify-content-md-end" style="float: right" >
        <button type="button" class="btn btn-outline-primary me-md-2" @click="console.log(this.goods_order_list)">确认订单</button><button type="button" class="btn btn-outline-danger">取消</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
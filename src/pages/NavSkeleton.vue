<script>
import {ref} from "vue";

export default {
  name: "NasSkeleton",
  setup() {
    let slide_folded = ref(false)
    let light_status_is_dark = ref(true)
    const ele_light_list = ['html', 'canvas', 'img', 'video']
    return {
      slide_folded,
      light_status_is_dark,
      ele_light_list
    }
  },
  methods: {
    change_fold_status() {
      this.slide_folded = !this.slide_folded
    },
    change_light_status() {
      this.ele_light_list.forEach((ele_name) => {
        document.querySelectorAll(ele_name).forEach((ele) => {
          ele.setAttribute("theme", this.light_status_is_dark ? "light" : "dark")
        })
      })
      this.light_status_is_dark = !this.light_status_is_dark
    },
    change_fold_box_pos() {
      if (!this.slide_folded) {
        this.$refs.foldBox.style.left = Math.round(this.$refs.navBox.clientWidth) + 10 + "px"
      } else {
        this.$refs.foldBox.style.left = "0"
      }
    },
    history_to_client() {
      this.$router.push({
        name: 'client-home'
      })
    },
    history_to_client_home() {
      this.$router.push({
        path: "/nav/client-home/client-center"
      });
    },
    history_to_client_add2modify() {
      this.$router.push({
        path: "/nav/client-home/client-add2modify",
        query: {
          is_add: true
        }
      });
    },
    history_to_client_dispatch() {
      this.$router.push({
        name: "dispatch-center"
      });
    },
    history_to_client_add2detailDispatch() {
      this.$router.push({
        name: 'add2detail-dispatch'
      })
    },
    history_to_allot() {
      this.$router.push({
        name: 'allot-center'
      })
    },
    history_to_repository_home() {
      this.$router.push({
        name: "repository-center"
      });
    },
    history_to_rep_request_enter_list() {
      this.$router.push({
        name: "enter-rep-list"
      });
    },
    history_to_rep_dispatch_request_list() {
      this.$router.push({
        name: "dispatch-request-list"
      });
    },
    history_to_delivery_goods_type_manage() {
      this.$router.push({
        name: "delivery-goods-type-manage"
      });
    },
    history_to_delivery_goods_list() {
      this.$router.push({
        name: "delivery-goods-list"
      });
    },
    history_to_delivery_goods_offer_merchant_list() {
      this.$router.push({
        name: "delivery-goods-offer-merchant-list"
      });
    },
    history_to_delivery_goods_request_list() {
      this.$router.push({
        name: "delivery-goods-request-list"
      });
    },
    history_to_delivery_goods_rate() {
      this.$router.push({
        name: "delivery-goods-rate-list"
      });
    },
    history_to_delivery_allot_rate() {
      this.$router.push({
        name: "delivery-allot-rate"
      });
    },
    history_to_finance_bill_batch() {
      this.$router.push({
        name: "finance-bill-batch"
      });
    },
    history_to_finance_goods_offer_merchant_settle() {
      this.$router.push({
        name: "finance-goods-offer-merchant-settle"
      });
    },
    history_to_finance_allot_settle() {
      this.$router.push({
        name: "finance-allot-settle"
      });
    },
    history_to_oneRoute_finance() {
      this.$router.push({
        name: "finance-home"
      });
    },
    history_to_oneRoute_delivery() {
      this.$router.push({
        name: "delivery-home"
      });
    },
    history_to_oneRoute_dispatch() {
      this.$router.push({
        name: "dispatch-home"
      });
    },
    history_to_oneRoute_allot() {
      this.$router.push({
        name: "allot-home"
      });
    },
    history_to_oneRoute_rep() {
      this.$router.push({
        name: "repository-home"
      });
    }
  },
  updated() {
    this.change_fold_box_pos()
  },
  mounted() {
    this.change_fold_box_pos()
  },
  beforeMount() {
    this.change_light_status()
  }
}
</script>

<template>
  <!--折叠标签-->
  <div class="my-fold" @click="change_fold_status" ref="foldBox">
    <i v-show="!slide_folded" class="bi bi-box-arrow-left"></i>
    <i v-show="slide_folded" class="bi bi-box-arrow-right"></i>
  </div>
  <!-- Example Code -->
  <!--  这里添加width是因为row这个class会导致横向溢出 -->
  <div class="row" style="width: 100%">
    <!--导航部分-->
    <div class="col-sm-3 overflow-y-scroll card vh-100" v-show="!this.slide_folded" ref="navBox">
      <!--设置垂直铺满-->
      <div class="d-flex flex-nowrap card0">
        <div class="flex-shrink-0 p-3" style="width: 280px;">
        <span href="/"
              class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
          <svg class="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
          <span class="fs-5 fw-semibold">
            <figure class="figure">
              <img
                  src="https://s1.aigei.com/src/img/gif/35/356cd14f647a4b8b86192f9a22d4221a.gif?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:RGio7mzCFGABC9FzVBImrr0ZowA="
                  class="figure-img img-fluid rounded" style="height: 50px;">
              <span class="figure-caption text-end" des="用来描述图像">管理员A</span>
            </figure>
          </span>
        </span>
          <ul class="list-unstyled ps-0 list-group">
            <li class="mb-1">
              <i class="bi bi-house-door"></i>
              <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                      data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true"
                      @click="history_to_client">
                客户服务
              </button>
              <div class="collapse show" id="home-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small list-group">
                  <li class="list-group-item"><a @click.prevent="history_to_client_home"
                                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">客户中心主页</a>
                  </li>
                  <li class="list-group-item"><a @click.prevent="history_to_client_add2modify"
                                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">添加客户</a>
                  </li>
                </ul>
              </div>
            </li>
            <!--水平分割线-->
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <i class="bi bi-brightness-high"></i>
              <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                      data-bs-toggle="collapse" data-bs-target="#dispatch-collapse" aria-expanded="false"
                      @click="history_to_oneRoute_dispatch">
                调度
              </button>
              <div class="collapse" id="dispatch-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small list-group">
                  <li class="list-group-item"><a class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                                 @click.prevent="history_to_client_dispatch">调度中心</a>
                  </li>
                  <li class="list-group-item"><a class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                                 @click.prevent="history_to_client_add2detailDispatch">新建调度任务</a>
                  </li>
                </ul>
              </div>
            </li>
            <!--水平分割线-->
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <i class="bi bi-brightness-high"></i>
              <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                      data-bs-toggle="collapse" data-bs-target="#allot-collapse" aria-expanded="false"
                      @click="history_to_oneRoute_allot">
                分站
              </button>
              <div class="collapse" id="allot-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small list-group">
                  <li class="list-group-item"><a @click.prevent="history_to_allot"
                                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">分站主页</a>
                  </li>
                </ul>
              </div>
            </li>
            <!--水平分割线-->
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <i class="bi bi-brightness-high"></i>
              <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                      data-bs-toggle="collapse" data-bs-target="#repository-collapse" aria-expanded="false"
                      @click="history_to_oneRoute_rep">
                库房管理
              </button>
              <div class="collapse" id="repository-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small list-group">
                  <li class="list-group-item"><a @click.prevent="history_to_repository_home"
                                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">库房主页</a>
                  </li>
                  <li class="list-group-item"><a @click.prevent="history_to_rep_request_enter_list"
                                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">入库列表</a>
                  </li>
                  <li class="list-group-item"><a @click.prevent="history_to_rep_dispatch_request_list"
                                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">调货请求列表</a>
                  </li>
                </ul>
              </div>
            </li>
            <!--水平分割线-->
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <i class="bi bi-brightness-high"></i>
              <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                      data-bs-toggle="collapse" data-bs-target="#delivery-collapse" aria-expanded="false"
                      @click.prevent="history_to_oneRoute_delivery">
                配送中心
              </button>
              <div class="collapse" id="delivery-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small list-group">
                  <li class="list-group-item"><a
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      @click.prevent="history_to_delivery_goods_type_manage">类别管理</a>
                  </li>
                  <li class="list-group-item"><a
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      @click.prevent='history_to_delivery_goods_list'>商品列表</a>
                  </li>
                  <li class="list-group-item"><a class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                                 @click.prevent="history_to_delivery_goods_offer_merchant_list">供货商列表</a>
                  </li>
                  <li class="list-group-item"><a class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                                 @click.prevent="history_to_delivery_goods_request_list">补货请求列表</a>
                  </li>
                  <li class="list-group-item"><a class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                                 @click.prevent="history_to_delivery_goods_rate">订购排行榜</a></li>
                  <li class="list-group-item"><a class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                                 @click.prevent="history_to_delivery_allot_rate">分站排行榜</a></li>
                </ul>
              </div>
            </li>
            <!--水平分割线-->
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <i class="bi bi-brightness-high"></i>
              <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                      data-bs-toggle="collapse" data-bs-target="#finance-collapse" aria-expanded="false"
                      @click="history_to_oneRoute_finance">
                财务中心
              </button>
              <div class="collapse" id="finance-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small list-group">
                  <li class="list-group-item"><a
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      @click.prevent="history_to_finance_bill_batch">发票批次</a>
                  </li>
                  <li class="list-group-item"><a
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      @click.prevent="history_to_finance_goods_offer_merchant_settle">供货商结算</a>
                  </li>
                  <li class="list-group-item"><a
                      class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      @click.prevent="history_to_finance_allot_settle">分站结算</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <!--暗色与亮色的设置按钮-->
        <div class="light-button" @click="change_light_status">
          <i v-show="!light_status_is_dark" class="bi bi-brightness-high-fill"></i>
          <i v-show="light_status_is_dark" class="bi bi-brightness-low"></i>
        </div>
      </div>
    </div>

    <!-- main 主体部分 -->
    <div :class="this.slide_folded?'col-sm-12':'col-sm-9'" class="text-center overflow-y-scroll">
      <!--  头部  -->
      <div class="col-sm text-center">东软物流配送管理系统</div>
      <router-view></router-view>
    </div>
  </div>
  <!-- End Example Code -->
</template>

<style scoped>

.my-fold {
  position: absolute;
  left: 0px;
  top: 0;
  padding-right: 0;
}

.light-button {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
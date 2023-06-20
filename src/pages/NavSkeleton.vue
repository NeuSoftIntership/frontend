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
        this.$refs.foldBox.style.left = Math.round(this.$refs.navBox.clientWidth) + "px"
      } else {
        this.$refs.foldBox.style.left = "0"
      }
    },
    history_to_client_home() {
      this.$router.push({
        path: "/nav/client-home"
      });
    },
    history_to_client_add2modify(){
      this.$router.push({
        path: "/nav/client-add2modify",
        query:{
          is_add: true
        }
      });
    },
    history_to_client_dispatch(){
      this.$router.push({
        name: "dispatch-home"
      });
    },
    history_to_client_add2detailDispatch(){
      this.$router.push({
        name: 'add2detail-dispatch'
      })
    },
    history_to_allot(){
      this.$router.push({
        name: 'allot-home'
      })
    },
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
  <!--显示的中心-->
  <!-- Example Code -->
  <div class="abs-full">
    <!--  头部  -->
    <div class="row">
      <div class="col-sm text-center">东软物流配送管理系统</div>
    </div>
    <div class="my-fold" @click="change_fold_status" ref="foldBox">
      <i v-show="!slide_folded" class="bi bi-box-arrow-left"></i>
      <i v-show="slide_folded" class="bi bi-box-arrow-right"></i>
    </div>
    <!-- body -->
    <div class="row">
      <!--导航部分-->
      <div class="col-sm-3 overflow-y-scroll" v-show="!this.slide_folded" ref="navBox">
        <!--设置垂直铺满-->
        <div class="d-flex flex-nowrap card vh-100">
          <div class="flex-shrink-0 p-3" style="width: 280px;">
        <span href="/"
              class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
          <svg class="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
          <span class="fs-5 fw-semibold">
            <figure class="figure">
              <img src="https://s1.aigei.com/src/img/gif/35/356cd14f647a4b8b86192f9a22d4221a.gif?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:RGio7mzCFGABC9FzVBImrr0ZowA="
                   class="figure-img img-fluid rounded" style="height: 50px;">
              <span class="figure-caption text-end" des="用来描述图像">管理员A</span>
            </figure>
          </span>
        </span>
            <ul class="list-unstyled ps-0 list-group">
              <li class="mb-1">
                <i class="bi bi-house-door"></i>
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                        data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                  客户服务中心
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
                        data-bs-toggle="collapse" data-bs-target="#dispatch-collapse" aria-expanded="false">
                  调度中心
                </button>
                <div class="collapse" id="dispatch-collapse">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small list-group">
                    <li class="list-group-item"><a class="link-body-emphasis d-inline-flex text-decoration-none rounded" @click.prevent="history_to_client_dispatch">调度中心</a>
                    </li>
                    <li class="list-group-item"><a class="link-body-emphasis d-inline-flex text-decoration-none rounded" @click.prevent="history_to_client_add2detailDispatch">新建调度任务</a>
                    </li>
                  </ul>
                </div>
              </li>
              <!--水平分割线-->
              <li class="border-top my-3"></li>
              <li class="mb-1">
                <i class="bi bi-brightness-high"></i>
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                        data-bs-toggle="collapse" data-bs-target="#allot-collapse" aria-expanded="false">
                  分站中心
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
                        data-bs-toggle="collapse" data-bs-target="#repository-collapse" aria-expanded="false">
                  库房管理
                </button>
                <div class="collapse" id="repository-collapse">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small list-group">
                    <li class="list-group-item"><a href="#"
                                                   class="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a>
                    </li>
                    <li class="list-group-item"><a href="#"
                                                   class="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a>
                    </li>
                    <li class="list-group-item"><a href="#"
                                                   class="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a>
                    </li>
                  </ul>
                </div>
              </li>
              <!--水平分割线-->
              <li class="border-top my-3"></li>
              <li class="mb-1">
                <i class="bi bi-brightness-high"></i>
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                        data-bs-toggle="collapse" data-bs-target="#delivery-collapse" aria-expanded="false">
                  配送中心
                </button>
                <div class="collapse" id="delivery-collapse">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small list-group">
                    <li class="list-group-item"><a href="#"
                                                   class="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a>
                    </li>
                    <li class="list-group-item"><a href="#"
                                                   class="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a>
                    </li>
                    <li class="list-group-item"><a href="#"
                                                   class="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a>
                    </li>
                  </ul>
                </div>
              </li>
              <!--水平分割线-->
              <li class="border-top my-3"></li>
              <li class="mb-1">
                <i class="bi bi-brightness-high"></i>
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                        data-bs-toggle="collapse" data-bs-target="#finance-collapse" aria-expanded="false">
                  财务中心
                </button>
                <div class="collapse" id="finance-collapse">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small list-group">
                    <li class="list-group-item"><a href="#"
                                                   class="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a>
                    </li>
                    <li class="list-group-item"><a href="#"
                                                   class="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a>
                    </li>
                    <li class="list-group-item"><a href="#"
                                                   class="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a>
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
      <div :class="this.slide_folded?'':'col-sm-9'" class="text-center overflow-y-scroll">
        <router-view></router-view>
      </div>
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
  top: 95%;
}

.abs-full {
  position: absolute;
  min-height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  right: 0;
}
</style>
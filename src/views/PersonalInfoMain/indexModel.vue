<template>
  <div class="backPage" v-loading.fullscreen.lock="fullscreenLoading">
    <!-- 头部区域 -->
    <PersonalNewHead :authorId="authorId" />
    <div class="model" style="background: #f7fbfd; border-radius: 15px; margin-bottom: 20px;">
      <p style="margin-left: 50px; margin-right: 20px; font-size: 20px;">请选择您想要使用的模型： </p>
      <el-select v-model="modelId" placeholder="请选择模型">
        <el-option v-for="(value, key) in modelOptions" :key="key" :label="value" :value="key" />
      </el-select>
    </div>


    <!-- 主显示区 -->
    <div class="main">
      <!-- 主要数据展示区 -->
      <PersonalMainArea :authorId="authorId" :modelId="modelId" />

      <div class="sideArea">
        <!-- <PersonalAuthorStatistic :authorId="authorId" /> -->
        <PersonalSimilarAuthor :authorId="authorId" :modelId="modelId" />
      </div>
    </div>
  </div>
</template>

<script>
import PersonalNewHead from './PersonalNewHead.vue'
import PersonalMainArea from './PersonalMainArea.vue'
import PersonalSimilarAuthor from './PersonalSimilarAuthor.vue'
import { getModel } from '@/api/getModel'

export default {
  components: {
    PersonalNewHead,
    PersonalMainArea,
    PersonalSimilarAuthor,
  },
  data() {
    return {
      fullscreenLoading: false,
      authorId: this.$route.query.authorId,
      modelId: '',
      modelOptions: [],
    }
  },
  created() {
    this.getModelList()
  },
  methods: {
    async getModelList() {
      try {
        const res = await getModel()
        this.modelOptions = Object.values(res)
        console.log(this.modelOptions)
      } catch (error) {
        console.error('获取模型列表失败:', error)
        this.modelOptions = []
      }
    }
  },
  mounted() {
    console.log("Received authorId:", this.authorId)
  }

}
</script>

<style lang="scss">
.backPage {
  background: url(../../assets/bg_dingbu2.png) no-repeat top;
  padding-top: 29px;

  a {
    color: #333;
    text-decoration: none;
  }

  .model {
    display: flex;
    width: 1300px;
    margin: auto;
  }

  .main {
    display: flex;
    width: 1300px;
    margin: 0 auto 30px;
    box-sizing: border-box;

    .sideArea {
      flex: 1;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }
  }

  .el-select {
    margin: auto 0;
  }

  .el-input--suffix .el-input__inner {
    width: 400px;
  }

  li {
    list-style: none;
  }
}
</style>

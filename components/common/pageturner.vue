<template>
  <div class="clearfix" v-if="total>size" id="page-turner">
    <ul class="clearfix left">
      <li v-if="notFirstPage">
        上一页
        <a :href="fullUrl('last')" class="block-link"></a>
      </li>
      <li v-if="page > showSize/2 && page > total-showSize/2">···</li>
      <li v-for="(item) in PageList" :key="item" :class="[page==item ? 'pre-index':'']">
        <a :href="baseUrl+item" class="block-link"></a>
        {{item}}
      </li>
      <li v-if="totalPage>showSize&&page<total-showSize/2">···</li>
      <li v-if="notLastPage">
        下一页
        <a :href="fullUrl('next')" class="block-link"></a>
      </li>
    </ul>
    <input type="number" class="left page-input" v-model="topage">
    <span class="turn" @click="turnPage">跳转</span>
  </div>
</template>
<script>
export default {
  props: ["page", "size", "total", "baseUrl"],
  data() {
    return {
      // 默认显示最大翻页个数
      maxShowPage: 10,
      topage: ""
    };
  },
  methods: {
    //翻页地址
    fullUrl: function(type) {
      return type === "last"
        ? this.baseUrl + (parseInt(this.page) - 1)
        : this.baseUrl + (parseInt(this.page) + 1);
    },
    turnPage: function() {
      const { topage = 1, baseUrl } = this;
      const url = baseUrl + topage;
      window.location.href = url;
    }
  },
  computed: {
    //总页数
    totalPage: function() {
      return Math.ceil(this.total / this.size);
    },
    // 显示翻页个数
    showSize: function() {
      return Math.min(this.maxShowPage, this.totalPage);
    },
    // 非最后一页
    notLastPage: function() {
      return this.page < this.totalPage;
    },
    // 非第一页
    notFirstPage: function() {
      return this.page > 1;
    },
    PageList: function() {
      let list = [];
      const { page, showSize, totalPage } = this;
      for (var i = 0; i < showSize; i++) {
        if (page < showSize / 2) {
          list.push(i + 1);
        } else if (page >= showSize / 2 && page < totalPage - showSize / 2) {
          list.push(parseInt(page) + i + 1 - showSize / 2);
        } else {
          list.unshift(totalPage - i);
        }
      }
      return list;
    }
  }
};
</script>
<style>
#page-turner {
  margin-top: 20px;
  font-size: 14px;
}
#page-turner li {
  border: none;
  float: left;
  position: relative;
  height: 40px;
  border: 1px solid #e4e4e4;
  margin-left: -1px;
  color: #27a1e5;
}
#page-turner li.pre-index {
  background-color: #27a1e5;
  border-color: #27a1e5;
  color: #fff;
}
.page-input {
  height: 40px;
  line-height: 40px;
  margin-left: 20px;
  width: 60px;
}
.turn {
  line-height: 40px;
  margin-left: 10px;
  cursor: pointer;
}
</style>

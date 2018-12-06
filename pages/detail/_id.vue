<template>
  <section class="container">
    <div>
      详情页id ：{{params.id}}
    </div>
    <p>{{number}}</p>
  </section>
</template>

<script>
import axios from "axios";
export default {
  middleware: "listCtr",
  data() {
    return {
      text: ""
    };
  },
  // asyncData({ params }) {
  //   return new Promise((resolve,reject)=>{
  //     resolve(Math.random())
  //   }).then((res)=>{
  //     return { params, text: res};
  //   })
  // },
  async asyncData ({ params }) {
    let { number , list } = await new Promise((resolve,reject)=>{
      var start = new Date();
      resolve(Math.random())
    }).then((res)=>{
      return { number : res , list : [1,2,3,4,5]}
    })
   return { params, number , list };
  },
  layout(context) {
    return "light";
  },
  head() {
    const { id } = this.params;
    return {
      title: `详情页-${id}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "this is app page list"
        },
        { hid: "keywords", name: "keywords", content: "pageList" }
      ]
    };
  }
};
</script>

<style>
</style>

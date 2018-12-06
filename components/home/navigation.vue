<template>
  <header class="navbar" id="J_navElemt">
    <section class="center clearfix">
      <h1 class="nav-logo">
        <a class="web_logo" title="泰然金融" href="http://www.trc.com" rel="nofollow"/>
      </h1>
      <nav class="navigation">
        <ul>
          <li class="nav-item-primary nav-item-dropdown" v-for="parentNav in navList" :key="parentNav.id">
            <a :href="'/list/'+parentNav.subNavigations[0].subId">{{parentNav.name}}</a>
            <!-- 下拉栏目 -->
            <section class="child-nav clearfix">
              <nav class="child-nav-list">
                <a :href="'/list/' +subNav.subId" v-for="subNav in parentNav.subNavigations" :key="subNav.subId">{{subNav.subName}}</a>
              </nav>
            </section>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>
<script>
export default {
  props: ["navList"]
};
</script>
<style lang="">
</style>

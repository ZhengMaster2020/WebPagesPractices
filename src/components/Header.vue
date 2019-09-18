<template>
  <div class="page-header">
    <Row>
      <Col span="2">
        <span class="header-location">中国大陆</span>
      </Col>
      <Col span="14" class="header-title">
        <router-link to="/">
          <h3>畅品优购，你值得购物的网站</h3>
        </router-link>
      </Col>
      <Col span="4"> {{username}} </Col>
      <Col span="4">
      <div class="header-cart" @click="toCart">
        <a href="javascript:void(0)">
          <Icon type="ios-cart"></Icon>
          购物车
          <strong class="header-count" v-if="cartList.length" >
            <input type="text" disabled v-model="cartList.length">
          </strong>
        </a>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: 'zhangsan'
    }
  },
  computed: {
    cartList () {
      return this.$store.state.cartList
    }
  },
  methods: {
    toCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped>
.header-count input{
  background: #f40;
  padding: 1px;
  color: #fff;
  border-radius: 25px;
  min-width: 20px;
  max-width: 40px;
  height: 20px;
  outline: none;
  border: none;
  text-align: center;
}
.page-header{
  font-size: 12px;
  height: 36px;
  color: #3c3c3c;
  background: #f5f5f5;
  line-height: 36px;
  padding: 0 5px;
}
.header-title{
  text-align: center;
}
.header-location{
  float: left;
}
.header-cart{
  float: right;
}
</style>

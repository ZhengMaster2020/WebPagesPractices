<template>
  <div class="home">
    <PageHeader />
    <div class="search">
      <Input v-model="search">
        <Select v-model="searchVal" slot="prepend" style="width: 80px">
          <Option value="product">物品</Option>
          <Option value="shop">店铺</Option>
        </Select>
        <Button slot="append" icon="ios-search"></Button>
      </Input>
    </div>
    <Tabs>
      <Tab-pane label="所有商品">
        <div class="all-sort">
          所有分类 ：
          <Tag closable>huawei</Tag>
          <Tag v-if="show" closable @on-close="handleClose">oppo</Tag>
        </div>
        <div class="sort-panel">
          <div class="sort">
            品牌 ：
            <Tag>huawei</Tag>
            <Tag>vivo</Tag>
          </div>
          <div class="sort">
            手机类型 ：
            <Tag>huawei</Tag>
            <Tag>vivo</Tag>
          </div>
          <div class="sort">
            机身内存ROM ：
            <Tag>32G</Tag>
            <Tag>64G</Tag>
            <Tag>128G</Tag>
            <Tag>256G</Tag>
          </div>
          <div class="sort">
            运行内存RAM ：
            <Tag>4G</Tag>
            <Tag>6G</Tag>
            <Tag>8G</Tag>
            <Tag>12G</Tag>
          </div>
        </div>
        <div class="product-list">
          <Row>
            <Col 
              class="list-item" 
              span="6" 
              v-for="item in products" 
              :key="item.pid">
              <div 
                class="add-to-cart" 
                @click.stop.prevent="addToCart(1)">加入购物车</div>
              <div @click="goToProduct(item)">
                <img class="img" :src="item.img" alt="img" />
                <p class="price">
                  <strong>￥{{item.price}}</strong>
                  <span class="ship">包邮</span>
                  <span class="pay">{{item.payment}}人付款</span>
                </p>
                <a href="#" class="title">{{item.title}}</a>
                <p class="location">
                  <a href="#">
                    <Icon type="ios-pin" />
                    {{item.shop}}
                  </a>
                  <span class="detail-location">{{item.location}}</span>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Tab-pane>
      <Tab-pane label="二手">暂无此商品，敬请期待</Tab-pane>
    </Tabs>
  </div>
</template>

<script>
import PageHeader from "../components/Header.vue";
import ImgUrl_01 from "../assets/images/01.png";
import ImgUrl_02 from "../assets/images/02.png";
import ImgUrl_03 from "../assets/images/03.png";
import ImgUrl_04 from "../assets/images/04.png";

const products = [
  {
    pid: "000",
    title:
      "【购机送权益礼包】华为科技潮牌/荣耀9X麒麟810芯片4800万超清双摄升降式全面屏",
    price: "2750.00",
    payment: "10万+",
    img: ImgUrl_01,
    shop: " 荣耀官方旗舰店",
    location: "广东 深圳",
    cartFlag: false
  },
  {
    pid: "001",
    title:
      "【6期免息】【新色上市】Huawei/华为nova 5 Pro超级夜景4800万AI四摄超级快充",
    price: "2999.00",
    payment: "3.5万+",
    img: ImgUrl_02,
    shop: "华为官方旗舰店",
    location: "江苏 南京",
    cartFlag: false
  },
  {
    pid: "002",
    title:
      "【6期免息】Huawei/华为 P30全面屏超感光徕卡三摄变焦双景录像980芯片智能手机",
    price: "2750.00",
    payment: "5.5万+",
    img: ImgUrl_03,
    shop: "华为官方旗舰店",
    location: "广东 深圳",
    cartFlag: false
  },
  {
    pid: "003",
    title:
      "【至高直降400 6期免息】OPPO Reno opporeno全面屏正品官方旗舰4800万超清",
    price: "3688.00",
    payment: "7500+",
    img: ImgUrl_04,
    shop: "oppo官方旗舰店",
    location: "广东 东莞",
    cartFlag: false
  },
  {
    pid: "004",
    title:
      "【至高直降400 6期免息】OPPO Reno opporeno全面屏正品官方旗舰4800万超清",
    price: "3688.00",
    payment: "7500+",
    img: ImgUrl_04,
    shop: "oppo官方旗舰店",
    location: "广东 东莞",
    cartFlag: false
  }
];

export default {
  data() {
    return {
      show: true,
      search: "",
      searchVal: "",
      mouseEnterFlag: false,
      products,
    };
  },
  components: {
    PageHeader
  },
  methods: {
    handleClose() {
      this.show = false;
    },
    addToCart(count) {
      this.$store.commit('addCartCount', count )
      this.$Message.success("成功添加至购物车");
    },
    goToProduct (item) {
      this.$router.push({
        path: `/products/${item.pid}`,
        query: {
          item
        }
      })
    }
  }
};
</script>

<style scoped>
.home {
  margin: 0 10px 10px;
  padding: 0 80px;
}
.search {
  margin-bottom: 10px;
  margin-top: 20px;
}
.sort-panel {
  margin-top: 10px;
}
.sort {
  margin-top: 10px;
}
.list-item {
  overflow: hidden;
  cursor: pointer;
  margin-right: 20px;
  padding: 1px;
  width: 250px;
  border: 1px solid #ededed;
  position: relative;
  margin-bottom: 20px;
}
.add-to-cart {
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  padding: 5px;
  margin: 2px;
  border-radius: 2px;
  background: #2d8cf0;
  display: none;
  cursor: pointer;
}
.list-item:hover .add-to-cart{
  display: block;
}
.list-item:hover {
  border: 1px solid #f40;
}
.product-list {
  margin-top: 10px;
}
.img {
  max-width: 250px;
  max-height: 250px;
}
.title {
  margin-top: 6px;
  height: 36px;
  display: inline-block;
  color: #3d3d3d;
  text-decoration: none;
}
.title:hover {
  color: #f40;
}
.price {
  color: #f40;
  padding: 10px;
}
.price .ship {
  background: #f40;
  color: #fff;
  padding: 2px;
}
.price .pay {
  color: #888;
  float: right;
}
.location {
  margin-top: 5px;
}
.detail-location {
  float: right;
}
</style>
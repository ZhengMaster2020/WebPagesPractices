<template>
  <div class="product-detail">
    <PageHeader />
    <Row>
      <Col span="10" class-name="show-picture">
        <img src= "../assets/images/01.png" alt="图片无法显示" />
      </Col>
      <Col span="10" class-name="product-title">
        <h1>{{product.title}}</h1>
        <Row class-name="product-price">
          促销价:
          <i>￥</i>
          <span>1399.00- {{product.price}} </span>
        </Row>
        <Row class-name="product-message">
          <Row type="flex" align="middle" justify="center" class-name="product-count">
            <Col span="2">数量：</Col>
            <Col span="8">
              <Input-number 
                :max="5" 
                :min="1" 
                v-model="number"></Input-number>&nbsp; &nbsp;件
            </Col>
            <Col span="10" pull="2">库存{{product.storeCount}}件 （每人限购5件）</Col>
          </Row>
          <Row class-name="product-tocart">
            <Col>
              <Button 
                type="error" 
                icon="ios-cart-outline" 
                size="large"
                @click="addToCart()">加入购物车</Button>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
    <Row class-name="product-attr">
      <Col>
        <Tabs type="card">
          <Tab-pane label="商品详情">
            <div class="product-attributes-list">
              <div class="product-attr-detail" style="display: block;">
                <div class="product-name">
                  品牌名称：
                  <b
                    class="J_EbrandLogo"
                    target="_blank"
                    href="//brand.tmall.com/brandInfo.htm?brandId=590022244&amp;type=0&amp;scm=1048.1.1.4"
                  >honor/荣耀</b>
                </div>
              </div>
              <Row class-name="product-attr-list-hd">
                 <Col span="4"  pull="4">
                  <strong >产品参数：</strong>
                </Col>
                <Col span="4" push="14">
                  <a class="product-switch-attr" href="javascript:void(0)">
                  更多参数 >
                  </a>
                </Col>
              </Row>
              <ul id="J_AttrUL" class="product-attr-ul">
                <Row>
                <li title="2019011606194135">证书编号：2019011606194135</li>
                <li title="有效">证书状态：有效</li>
                <li title="TD-LTE数字移动电话机">产品名称：TD-LTE数字移动电话机</li>
                </Row>
                <Row>
                <li
                  title="HLK-AL00（开关电源适配器：HW-050200C02   输出: 5VDC# 2A)"
                >3C规格型号：HLK-AL00（开关电源适配器：HW-050200C02 输出: 5VDC# 2A)</li>
                <li title="honor/荣耀 荣耀9x">产品名称：honor/荣耀 荣耀9x</li>
                <li title="&nbsp;荣耀9x">型号:&nbsp;荣耀9x</li>
                <li title="&nbsp;幻夜黑&nbsp;魅海蓝&nbsp;魅焰红">机身颜色:&nbsp;幻夜黑&nbsp;魅海蓝&nbsp;魅焰红</li>
                </Row>
                <Row>
                <li title="&nbsp;4GB&nbsp;6GB">运行内存RAM:&nbsp;4GB&nbsp;6GB</li>
                <li
                  title="&nbsp;4+64GB&nbsp;6+64GB&nbsp;6+128GB"
                >存储容量:&nbsp;4+64GB&nbsp;6+64GB&nbsp;6+128GB</li>
                <li title="&nbsp;双卡双待单通">网络模式:&nbsp;双卡双待单通</li>
                <li title="&nbsp;麒麟810">CPU型号:&nbsp;麒麟810</li>
                </Row>
                <!-- 健字号相关-->
              </ul>
            </div>
          </Tab-pane>
          <Tab-pane label="规格参数" style="text-align:start" id="moreProductAttr">
             <Card>
                <p slot="title">规格参数</p>
                <p >
                  <Card class="card-attr">
                    <p slot="title" class="card-title">拍照功能</p>
                      <p class="card-msg">后置摄像头 :	 <strong> 4800万+200万</strong></p>
                      <p class="card-msg">摄像头类型 :	 <strong> 双摄像头（后双）</strong></p>
                      <p class="card-msg">视频显示格式 :	 <strong>*.3gp、*.mp4、*.webm、*.mkv</strong> </p>
                  </Card>
                </p>
                <p >
                  <Card class="card-attr">
                    <p slot="title" class="card-title">显示</p>
                      <p class="card-msg">分辨率 :	 <strong> 1080*2340</strong></p>
                      <p class="card-msg">触摸屏类型	:	 <strong> LTPS </strong></p>
                      <p class="card-msg">屏幕尺寸 :	 <strong>	 6.59英寸 </strong> </p>
                  </Card>
                </p>
            </Card>
          </Tab-pane>
        </Tabs>
      </Col>
    </Row>
  </div>
</template>

<script>
import PageHeader from "../components/Header.vue"

export default {
  data() {
    return {
      number: 1,
      product: {
        pid: '',
        title: '',
        price: '',
        src: '',
        storeCount: '10127',
      }
    };
  },
  components: {
    PageHeader
  },
  methods: {
    initProductData () {
      const productMsg = this.$route.query.item
      this.product.pid = productMsg.pid
      this.product.title = productMsg.title,
      this.product.price = productMsg.price,
      this.product.src = productMsg.img
    },
    addToCart() {
      this.$store.commit({
        type: 'addToCart',
        product: {
          number: this.number,
          pid: this.product.pid
        }
      })
      this.$Message.success("成功添加至购物车");
    },
  },
  created () {
    this.initProductData()
  }
};
</script>

<style scoped>
.card-title{
  background: #f7f7f7;
}
.card-attr .card-msg{
  margin: 5px;
  border: 1px solid #dad8d8;
  padding: 5px 5px 5px 20px;
  color: #999;
  font-weight: 400;
  text-align: left;
}
.product-attributes-list li {
  display: inline-block;
  width: 220px;
  height: 18px;
  overflow: hidden;
  margin: 10px 15px 0 0;
  line-height: 18px;
  vertical-align: top;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #666;
}
.product-attributes-list
.product-attr-ul {
  padding: 10px 30px 10px;
  text-align: start;
  text-indent: 0;
  border-top: 1px solid #fff;
  list-style: none;
  margin-top: 5px;
  background: #e9e9e9;
}
.product-attr-list-hd{
  padding: 5px 20px;
  line-height: 22px;
  color: #999;
}
.product-name b{
  color: #333;
  font-weight: 400;
}
.product-name{
  color: #666;
  float: left;
  margin-right: 15px;
}
.product-attr-detail{
  padding: 8px 20px 10px;
  border-top: 1px solid #e6e6e6;
  height: 40px;
  line-height: 40px;
}
.product-attributes-list{
  clear: both;
  border: 1px solid #e6e6e6;
  border-top: none;
  margin-bottom: 10px;
}
.product-attr {
  margin-top: 50px;
}
.product-tocart {
  margin-top: 20px;
}
.product-count {
  display: flex;
  justify-content: start;
  align-items: center;
}
.product-message {
  margin-top: 10px;
  color: #838383;
  font-size: 12px;
}
.product-price i {
  vertical-align: middle;
  color: #ff0036;
  font-size: 18px;
  font-family: Arial;
}
.product-price span {
  display: inline;
  vertical-align: middle;
  font-size: 30px;
  color: #ff0036;
  font-weight: bolder;
}
.product-price {
  margin-top: 10px;
  background-color: #e9e9e9;
  position: relative;
  left: 0;
  z-index: 10;
  font: 12px/1.5 "Microsoft Yahei", tahoma, arial;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-top: 5px;
  margin-right: 20px;
}
.product-title h1 {
  padding-bottom: 0.2em;
  line-height: 1;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}
.product-title {
  text-align: start;
  margin: 20px auto 0;
  padding: 0 10px 10px;
}
.show-picture img {
  vertical-align: middle;
  width: 100%;
  height: 100%;
  margin: 20px auto 0;
}
.show-picture {
  width: 420px;
  height: 420px;
  margin: 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.product-detail {
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
}
</style>
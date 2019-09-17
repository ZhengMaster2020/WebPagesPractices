<template>
  <div class="product-detail">
    <Row>
      <Col span="10" class-name="show-picture">
        <img src="../assets/images/01.png" alt="图片无法显示" />
      </Col>
      <Col span="10" class-name="product-title">
        <h1>【购机送权益礼包】华为科技潮牌/荣耀9X麒麟810芯片4800万超清双摄升降式全面屏全网通智能手机官方旗舰店</h1>
        <Row class-name="product-price">
          促销价:
          <i>￥</i>
          <span>1399.00-2499.00</span>
        </Row>
        <Row class-name="product-message">
          <Row type="flex" align="middle" justify="center" class-name="product-count">
            <Col span="2">数量：</Col>
            <Col span="8">
              <Input-number :max="5" :min="1" v-model="value1"></Input-number>&nbsp; &nbsp;件
            </Col>
            <Col span="10" pull="2">库存10027件 （每人限购5件）</Col>
          </Row>
          <Row class-name="product-tocart">
            <Col>
              <Button type="error" icon="ios-cart-outline" size="large">加入购物车</Button>
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
              <p class="product-attr-list-hd">
                <a class="product-switch-attr" href="#J_Attrs">
                  更多参数 >
                </a>
                <em>产品参数：</em>
              </p>
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
          <Tab-pane label="规格参数">标签二的内容</Tab-pane>
        </Tabs>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 1
    };
  }
};
</script>

<style scoped>
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
.product-attributes-list ul {
  padding: 0 20px 18px;
  text-indent: 0;
  border-top: 1px solid #fff;
  list-style: none;
  margin-top: 20px;
  background: #000
}
.product-attr-list-hd em {
    font-weight: 700;
    float: left;
}
.product-attr-list-hd 
.product-switch-attr {
  float: right;
  height: 20px;
  line-height: 22px;
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
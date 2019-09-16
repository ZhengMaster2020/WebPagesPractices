<template>
  <div class="not-found">
    <Row type="flex" justify="center" align="middle">
      <Col span="8">
        <img src="../assets/images/404.png" alt="资源找不到">
      </Col>
      <Col span="10">
        <Row><h3>你要的资源，臣妾找不到了呢!</h3></Row>
        <Row style="margin-top: 20px"><h3>
          <router-link to="/">返回首页...</router-link>
        </h3></Row>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
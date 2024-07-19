<template>
  <div class="product-list">
    <AddProduct @add-product="addProduct" />
    <BurgerDashboard :products="products" />
  </div>
</template>

<script>
import AddProduct from '../components/AddProduct.vue'
import BurgerDashboard from '../components/BurgerDashboard.vue'

export default {
  name: 'ProductList',
  components: { AddProduct, BurgerDashboard },
  data() {
    return {
      products: []
    }
  },
  methods: {
    addProduct(product) {
      this.products.push(product);
    }
  }
}
</script>

<style>
.product-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

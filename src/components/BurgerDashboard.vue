<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <ul>
      <li v-for="product in products" :key="product.name">
        <span>{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BurgerDashboard',
  props: ['products']
}
</script>

<style>
.dashboard {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

.price {
  font-weight: bold;
  color: #333;
}
</style>

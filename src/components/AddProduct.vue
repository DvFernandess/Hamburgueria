<template>
  <div class="add-product">
    <h2>Adicionar Produto</h2>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label>Nome:</label>
        <input type="text" v-model="product.name" required />
      </div>
      <div class="form-group">
        <label>Preço:</label>
        <input type="number" v-model="product.price" required />
      </div>
      <button type="submit">Adicionar Produto</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        price: ''
      }
    }
  },
  methods: {
    addProduct() {
      this.$emit('add-product', { ...this.product });
      this.product.name = '';
      this.product.price = '';
    }
  }
}
</script>

<style>
.add-product {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 15px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>

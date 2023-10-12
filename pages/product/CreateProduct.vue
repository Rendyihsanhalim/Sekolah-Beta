<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <label for="name">Nama:</label>
      <input type="text" id="name" v-model="formData.name" required>

      <label for="description">Deskripsi:</label>
      <textarea id="description" v-model="formData.description" required></textarea>

      <label for="price">Harga:</label>
      <input type="number" id="price" v-model="formData.price" required>

      <label for="image">Gambar:</label>
      <input type="file" id="image" @change="handleImageChange" accept="image/*">

      <label for="category">Kategori:</label>
      <select id="category" v-model="formData.category" required>
        <option v-for="category in category" :key="category.id" :value="category.name">{{ category.name }}</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  font-family: 'Montserrat', sans-serif;
  max-width: 400px;
  margin: 50px auto;
}

label {
  display: block;
  margin-bottom: 8px;
}

input[type="text"],
textarea,
input[type="number"],
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
}

button {
  background-color: #007BFF;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
}

button:hover {
  background-color: #0056b3;
}
</style>

<script>
import httpClient from "~/utils/httpClient"

export default {
  data() {
    return {
      formData: {
        name: '',
        description: '',
        price: '',
        img: null,
        category: ''
      },
      category:[

      ]
    };
  },
  mounted() {
      this.getCategory();
    },
  methods: {
      async submitForm() {
      // Handle form submission logic here
      console.log('Form submitted:', this.formData);
      const pathname = `${Date.now().toString()}.${this.formData.img.type.split("/")[1]}`;
      const file = new FormData();
      file.append("file",this.formData.img);
      const storage = await httpClient(`/storage/v1/object/gambar/${pathname}`,"POST",file,'storage');
      const gambar = await storage.json()
      this.formData.img = gambar.Key
      await httpClient("/rest/v1/Product", "POST", (this.formData))
      // const response = await httpClient("/rest/v1/Product", "POST", (this.formData))

      // const data = await response?.json()

      // this.$router.push(`/detail/${data[0]?.id}`)
      this.$router.push(`/product`)
      
      // You can send the form data to your backend or perform any other necessary actions
    },
    handleImageChange(event) {
      // Handle image change logic here
      console.log(event);
      this.formData.img = event.target.files[0];
    },
    async getCategory (){
            const response = await this.$axios.get("/rest/v1/Category", {
                headers:{
                    apikey : process.env.supabaseKey
                }
            })

            this.category = response?.data;
        },
  }
};
</script>
  
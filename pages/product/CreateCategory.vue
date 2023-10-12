<template>
    <div class="form-container">
        <form @submit.prevent="submitForm">
            <label for="name">Nama:</label>
            <input type="text" id="name" v-model="formData.name" required>
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
      }
    };
  },

  methods: {
      async submitForm() {
      // Handle form submission logic here
      console.log('Form submitted:', this.formData);

      await httpClient("/rest/v1/Category", "POST", (this.formData))

      this.$router.push(`/product`)
      
      // You can send the form data to your backend or perform any other necessary actions
    },
    handleImageChange(event) {
      // Handle image change logic here
      console.log(event);
      this.formData.img = event.target.files[0];
    }
  }
};
</script>
<template>
  <section>
    <div class="card-container">
      <div class="card-images">
        <img :src="`https://hjdustasxoxkemutqaao.supabase.co/storage/v1/object/public/` + item.img" :alt="item.name">
      </div>
      <div class="card-page">
        <h1>{{ item.name }}</h1>
        <p>{{ item.description }}</p>
      </div>
      <div class="card-price">
        <p>${{ item.price }}</p>
      </div>
      <a class="delete" @click="deleteItem"><i class="fa-solid fa-x icon"></i></a>
    </div>
  </section>
</template>

<script>
import httpClient from '~/utils/httpClient';

export default {
  props: {
    item: Object,
    onDelete: Function, // Properti untuk mengirimkan notifikasi penghapusan
  },
  methods: {
    async deleteItem() {
      try {
        // Mengirim permintaan penghapusan ke Supabase
        const response = await httpClient(`/rest/v1/Product?id=eq.${this.item.id}`, "DELETE"
        );
        // response= await response
        this.$emit("getData")
        console.log(response)   

      } catch (error) {
        console.error('Error deleting item:', error.message);
      }
    },
  },
};
</script>


<style>
.card-container {
    width: 250px;
    height: 350px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    box-sizing: border-box;
    margin:10% 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display:inline-block;
    position:relative;
}
.card-container img {
    height: 250px;
    width: 80%;
    filter: drop-shadow();
    margin-left:10px;
    padding-left:2%;
}


.card-container h1{
    margin-bottom:0px;
}
.card-container p{
    margin-top:3px;
}
.card-container h1,p {
    height:5%;
    font-size: small;
    font-weight: 200;
    padding-left:3%;
}
.delete {
  position: absolute;
  top: 228px;
  left: 5px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: rgb(206, 193, 193);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 1;
}

.icon {
  padding: 5px;
  text-align: center;
}

</style>
<template>
  <section>
    <div class="card-container">
      <div class="card-images">
        <img :src="item.src" :alt="item.name">
      </div>
      <div class="card-page">
        <h1>{{ item.name }}</h1>
        <p>{{ item.description }}</p>
      </div>
      <div class="card-price">
        <p>{{ item.price }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    item: Object, // Mengharapkan objek tunggal sebagai prop
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

</style>
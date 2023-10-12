<template>
  <div class="main">
    <div class="page1">
      <div class="header">
        <img src="~/assets/IKEA-Logo-1967.png" alt="ikea logo" class="ikealogo">
        <ul class="brand">
          <li><nuxt-link to="/product" class="nav-link">Product</nuxt-link></li>
          <li class="nav-link">Promo</li>
          <li class="nav-link">Design</li>
          <li class="nav-link">Deals</li>
        </ul>
        <div class="login-cart">
          <button class="btn-orange"><nuxt-link to="/SignIn">Sign in</nuxt-link></button>
          <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
        <a class="ikon" href=""><i class="fa-solid fa-bars"></i></a>
      </div>
      <div class="container">
        <div class="page">
          <div class="paragraph">
            <h1 class="paragraph1">The Creative
              <br>
              Space Edition
            </h1>
            <p class="paragraph2">Lorem ipsum dolor sit, Sque, tenetur rem alop sie akuiii!</p>
            <div class="explore-container">
              <button class="Explore">Explore</button>
              <button class="Explore">Explore</button>
            </div>
          </div>
          <img src="~/assets/SofaAbu.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  margin: 0;
  position: relative;
  background: #2258bb;
}

.header {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
}

.brand {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  list-style: none;
  width: 43%;
}

.brand li {
  text-align: center;
  padding-top: 10px;
  font-family: "Montserrat";
  font-size: medium;
  cursor: pointer;
  text-decoration: none;
}

.brand li a {
  text-decoration: none;
  border-bottom: none;
  color: black;
}

.nav-link:hover {
  color: #ffd100;
}

.login-cart {
  display: flex;
  text-align: center;
  align-items: center;
  column-gap: 10px;
}

.login-cart button {
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border-style: none;
  background: rgb(112, 102, 102);
  color: white;
  font-family: "Montserrat";
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

.login-cart button a {
  color: white;
  text-decoration: none;
}

.ikealogo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
}

.ikon {
  display: none;
  width: 10%;
}

.page {
  font-family: "Poppins";
  width: 100%;
  margin: 0;
  display: flex;
  height: 200px;
  font-size: 200px;
  
}

.container img {
  position: absolute;
  width: 550px;
  top: 70px;
  left: 620px;
  filter: drop-shadow();
  cursor: pointer;
}

.paragraph {
  padding: 2% 0 0 10%;
}

.paragraph1 {
  font-weight: 400;
  font-size: 60px;
  color: white;
  display: flex;
}

.paragraph2 {
  font-size: medium;
  margin-top: 0;
  margin-left: 7px;
}

.explore-container {
  display: flex;
  column-gap:5px;
  margin-top: 30px;
 /* Menambahkan margin-top untuk mengatur jarak dari paragraf */
}

.Explore {
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border-style: none;
  background: rgb(112, 102, 102);
  color: white;
  font-family: "Montserrat";
  font-weight: bold;
  cursor: pointer;
}

.Explore:hover {
  width: 120px;
  height: 35px;
  background: white;
  color: #ffd100;
}





@media (min-width: 319px) and (max-width: 576px) {
  .brand {
    display: none;
    width: 53%;
  }

  .ikon {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .container img {
    position: absolute;
    width: 400px;
    top: 120px;
    left: 50px;
  }

  .paragraph {
    width: 100%;
    text-align: center;
    font-size: 10px;
    padding-left: 0px;
  }

  .paragraph1 {
    font-size: 40px;
  }

  .Explore {
    top: 50px;
    left: 20px;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .brand {
    display: none;
    width: 53%;
  }

  .ikon {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .paragraph {
    width: 100%;
    text-align: center;
    font-size: 10px;
    padding-left: 0px;
  }

  .paragraph1 {
    font-size: 60px;
  }

  .container img {
    position: absolute;
    width: 480px;
    top: 120px;
    left: 80px;
  }
}

/* Media Query lainnya sesuai kebutuhan desain Anda */</style>

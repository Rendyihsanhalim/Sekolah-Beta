<template>
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
</template>

<style scoped>
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
    column-gap: 5px;
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
</style>
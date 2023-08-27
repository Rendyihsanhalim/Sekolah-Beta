<template>
    <div class="header">
        <ul class="brand">
            <li>Product</li>
            <li>Rooms</li>
        </ul>
        <img src="~/assets/IKEA-Logo-1967.png" alt="ikea logo" class="ikealogo">
        <ul class="brand">
            <li>Design</li>
            <li>Deals</li>
        </ul>
    </div>
</template>


<style scoped>

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        width:100%;
        position: relative;
    }
    .header{
        width:100%;
        margin:auto;
        display:flex;
        justify-content: space-between;
        margin-top:40px;
    }

    .brand{
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        text-decoration: none;
        list-style: none;
        cursor: pointer;
        width:43%;
    }

    .brand li{
        text-align: center;
        padding-top: 10px;
        font-family: "Montserrat";
        font-size: medium;
    }
    .brand li:hover{
        color:#FFD100;
    }
    
    .ikealogo{
        margin:-10px 50px;
        width:100px;
    }

 


    
</style>
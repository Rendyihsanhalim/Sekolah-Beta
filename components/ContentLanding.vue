<template>
    <div>
      <div class="LandingPage">
        <h1>Welcome to a world of inspiration for your home</h1>
        <p>Buy your future furniture here</p>
      </div>
      <div class="page" >
        <div class="paragraph">
          <p class="paragraph1">The Creative Space Edition</p>
          <p class="paragraph2">Lorem ipsum dolor sit, Sque, tenetur rem alop sie akuiii!</p>
          <button>See me</button>
        </div>
        <img src="~/assets/sofabiru1.png" alt="">
      </div>
    </div>
  </template>
  
  <style>
    .LandingPage {
      text-align: center;
      align-items: center; /* Menggunakan align-items untuk mengatur penempatan vertikal */
      font-family: "Montserrat", sans-serif;
      margin-top: 45px;
      color: #3e8bd8;
    }
  

    .LandingPage p {
      font-weight: 400;
      font-size: larger;
    }
    .page{
      font-family: "Montserrat";
      width:100%;
      margin:50px 0;
      position:relative;
      height:200px;
      background: linear-gradient(-320deg,rgba(0, 0, 255, 0.726),white);
    }
    .page img{
      position:absolute;
      width:360px;
      top:-50px;
      left:750px;
      mix-blend-mode:multiply;
      cursor:pointer;
    }
    .paragraph{
      width:48%;
      padding:1% 0 0 100px;
      text-align: center;
    }
    .paragraph1{
      font-weight: 400;
      font-size: x-large;
      color:#ffd100;
    }
    .paragraph2{
      font-size: medium;
      margin-top:0;
    }
    .page img:hover{
      width:380px;
    }
    button:hover{
      width:120px;
      height:35px;
      background: white;
      color:#ffd100;
    }
    button{
      width:100px;
      height:30px;
      border-radius:20px;
      border-style: none;
      background: #ffd100;
      color:white;
      font-family: "Montserrat";
      font-weight: bold;
      cursor: pointer;
    }

    @media screen and (max-width: 760px) {
      .page img{
        width:60%;
        top:-100px;
        left:90px;
      }

      .pa{
        position:absolute;
        top:50px;
      }

    }
  </style>
  
<template>
    <div>
      <HeaderPage/>
      <ContentLanding/>
      <FooterFoot/>
    </div>
</template>
  
  <script>
  import HeaderPage from '../components/HeaderPage.vue';
  import ContentLanding from '../components/ContentLanding.vue'
  export default {
      name: 'IndexPage',
      components: {HeaderPage,ContentLanding}
  }
  </script>
  
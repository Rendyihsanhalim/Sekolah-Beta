<template>
    <div>
      <HeaderPage/>
      <ContentLanding/>
      <FooterFoot/>
    </div>
</template>
  
  <script>
  import HeaderPage from '../components/HeaderPage.vue';
  import ContentLanding from '../components/ContentLanding.vue';
  import FooterFoot from '../components/FooterFoot.vue';
  
  export default {
      name: 'IndexPage',
      components: { HeaderPage, ContentLanding, FooterFoot }
  }
  </script>
  
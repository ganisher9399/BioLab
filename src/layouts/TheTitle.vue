<template>
    <div class="the-title">
        <h3 class="subtitle">{{ sub }}</h3>
        <h2 class="title">{{ title }}</h2>
    </div>
</template>


<script>
export default {
    props: {
      sub: {
        type: String,
        default: () => "Subtitle",
      }, 

      title: {
        type: String,
        default: () => "Title",
      }, 

    }
}
</script>


<style lang="scss">

@import '../styles/components/_vars.scss';
@import '../styles/components/_mixins.scss';

.the-title{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .subtitle{
       font-size: 25px;
       color: $brand_color;
       margin-bottom: 24px;
    }

    .title{
      font-size: 40px;
      max-width: 700px;
      text-align: center;
    }
}    
</style>
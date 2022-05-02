<template>
  <div class="text-content">
    <slot />
  </div>
</template>


<script>
export default {
    
}
</script>


<style lang="scss">

@import '../../../styles/components/_vars.scss';
@import '../../../styles/components/_mixins.scss';


  .text-content{
    max-width: 700px;
    //Media
    @include xxl{
      max-width: 540px;
    }
    @include xs{
      width: 100%;
    }

    .subtitle{
      font-size: 25px;
      color: $brand_color;
      margin-bottom: 5px;
    }
    //Media
    @include xxl{
      font-size: 20px;
    }  
    @include sm{
      font-size: 18px;
    }  
    .title{
      font-size: 70px;
      //Media
      @include xxl{
        font-size: 45px;
      }  
      @include sm{
        font-size: 35px;
      }      
    }

    .text{
      font-size: 18px;
      font-family: 'Circe' sans-serif;
      line-height: 26px;
      margin: 10px 0 28px;
      font-weight: 400;
      @include sm{
        font-size: 16px;
      }  
    }
    .buttons{
      display: flex;
      gap: 48px;
      //Media
      @include md{
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 20px 5px; 
      }

      
    }
  }
</style>
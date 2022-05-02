<template>
   <div class="cotolog">
     <slot />
       <!-- <img :src="require('../images/prodacts/p1.png')" alt="">
       <div class="catolog-text">
          <h4 class="title">GYROZEN Micro Centrifuges</h4>
          <p class="id">Identifier number</p>
          <span class="old-price">750 $</span>
          <div class="new">
              <div class="new-price">500$</div>
              <i class="fas fa-search"></i>
          </div>
       </div> -->
   </div>
</template>


<script>

// import Catolog from '@/src/frags/catolog_array.js'

export default {
  data(){
    return {
      
    }
  },

}
</script>


<style lang="scss">

@import '../styles/components/_vars.scss';
@import '../styles/components/_mixins.scss';

.cotolog{
  background: $white;
  border-radius: 10px;
  width: 380px;
  height: 450px;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:hover{
    box-shadow: 7px 11px 28px rgba($black, $alpha: 0.1);
  }

  img{
    max-width: 100%;
  }

  .catolog-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    .title{
      font-size: 18px;
      line-height: 120%;
      text-transform: capitalize;
      color: $black;
      padding-bottom: 24px;
      width: 100%;
    }
    .id{
      font-family: 'Circe' sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 180%;
      color: $black;
      opacity: 0.3;
      margin-bottom: 10px;
      width: 100%;
    }
    .old-price{
      font-family: 'Montserrat';
      font-size: 18px;
      line-height: 120%;
      display: flex;
      align-items: flex-end;
      text-decoration-line: line-through;
      color: rgba($black, $alpha: 0.5);
      width: 100%;
    }
    .new{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      i{
        font-size: 34px;
        color: rgba($black, $alpha: 0.4);
      }

      .new-price{
        font-family: 'Montserrat';
        font-size: 43px;
        line-height: 120%;
        color: $brand_color;
      }
    }

  }

}
    
</style>
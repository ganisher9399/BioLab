<template>
    <button class="the-btn" :class="{ light: light  }"> 
      <slot />  
    </button>
</template>


<script>
export default {
    props: {
        light: Boolean,
    }
}
</script>


<style lang="scss">

@import '../styles/components/_vars.scss';
@import '../styles/components/_mixins.scss';

.the-btn{
  min-width: 200px;
  height: 55px;
  border-radius: 50px;
  font-size: 15px;
  color: $white;
  background: $brand_color;
  cursor: pointer;
  box-shadow: -15px 20px 50px rgba(29, 104, 191, 0.3);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  //Meda
  @include lg{
    font-size: 14px;
    height: 40px;
    min-width: 150px;
    padding: 0 15px;
    

  }
  &.light{
    background: $white;
    color: $brand_color;
  }
}

</style>
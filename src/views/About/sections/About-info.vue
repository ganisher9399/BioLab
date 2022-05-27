<template>
  <div class="container">
    <div class="btns">
      <button
        v-for="(country, idx) in countries"
        :key="country.name"
        :class="{ active: activeBtn === idx }"
        @click="activeBtn = idx"
      >
     
        <span> {{ country.btn.name }}</span>
        <p> {{ country.btn.title }}</p>
      </button>
    </div>

    <router-view/>

  </div>

  
</template>


<script>

import Array from '../js/array.js'

export default {
 
  data() {
    return {
      activeBtn: 0,
      countries: Array,
    };
  },
};
</script>


<style lang="scss" scoped>
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";


.container{
  width: 100%;
}


.btns {
  display: flex;
  justify-content: center;
  gap: 42px;
  //Media
  @include lg{
    gap: 10px;
  }
  @include md{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
  } 
  @include sm{
    gap: 20px;
  }   

}

.btns button {
  width: 520px;
  height: 260px;
  background: #ffffff;
  border-radius: 10px;
  padding: 12px 55px;
  font-size: 17px;
  font-weight: 600;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 29px;
 
  span {
    font-family: $font_family;
    font-weight: $font_weight;
    font-size: 25px;
    line-height: 30px;
    color: #000;
  }
  p{
     font-weight: 400;
     font-size: 18px;
     line-height: 27px;
     color: #000;   
     text-align: left;
 
  }
}

.btns button.active {
  background: #2268c8;
  box-shadow: -10px 40px 60px rgba(0, 0, 0, 0.25);
}
.btns button.active > span,
.btns button.active > p {
  color: rgb(255, 255, 255);
}
</style>
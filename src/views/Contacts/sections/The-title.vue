<template>
    <div class="container">
        <p>Main Menu / Contact Us</p>
        <h1>Contact us</h1>
    </div>
</template>


<script>
export default {
    
}
</script>



<style lang="scss" scoped>
@import '../../../styles/components/_vars.scss';
@import '../../../styles/components/_mixins.scss';

    .container{
        text-align: center;
        width: 100%;
        padding: 210px 50px;
        p{ 
            font-family: $font_family;
            font-size: 20px;
            line-height: 24px;
            color: $brand_color;
            margin-bottom: 30px;
        }
        h1{
            font-family: 'Circe';
            font-weight: $font_weight;
            font-size: 50px;
            line-height: 120%;
            text-transform: capitalize;
            color: $black;
        }
  
    }

</style>
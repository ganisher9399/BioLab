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
        padding: 120px 0 50px 0;
        //Media
        @include lg{
          padding: 80px 0 40px 0;  
        }
        p{ 
            font-family: $font_family;
            font-size: 20px;
            line-height: 24px;
            color: $brand_color;
            margin-bottom: 30px;
            //Media
            @include lg{
                font-size: 16px;  
            }
            @include sm{
                margin-bottom: 20px;  
            }            
        }
        h1{
            font-family: 'Circe';
            font-weight: $font_weight;
            font-size: 50px;
            line-height: 120%;
            text-transform: capitalize;
            color: $black;
            //Media
            @include lg{
                font-size: 40px;  
            }            
        }
  
    }

</style>
<template>
  <div class="container">
    <div class="btns">
      <button
        v-for="(country, idx) in countries"
        :key="country.name"
        :class="{ active: activeBtn === idx }"
        @click="activeBtn = idx"
      >
        <img :src="country.flag" :alt="country.name" />
        <span> {{ country.name }}</span>
      </button>
    </div>

    <div class="maps" v-html="countries[activeBtn].map"></div>

    <div class="dal">
        <div class="box">
          <h3>Address</h3>
          <a :href="countries[activeBtn].address.link" target="_blank">{{
            countries[activeBtn].address.text
          }}</a>
        </div>
        <div class="box">
          <h3>Phone</h3>
          <a :href="countries[activeBtn].Phone.link">{{
            countries[activeBtn].Phone.text
          }}</a>
        </div>
        <div class="box">
          <h3>Email</h3>
          <a href="#">{{ countries[activeBtn].email }}</a>
        </div>
        <div class="box">
          <h3>Website</h3>
          <a :href="countries[activeBtn].website.link" target="_blank">{{
            countries[activeBtn].website.text
          }}</a>
        </div>
    </div>
  
  </div>

  
</template>


<script>



export default {
 
  data() {
    return {
      activeBtn: 0,
      countries: [
        {
          name: "United Kigdom",
          address: {
            text: "Tashkent, Nmadir City, Uzbekistan",
            link: "https://goo.gl/maps/wSv9bHdALszfRMjMA",
          },
          Phone: {
            text: "+998(33)555-11-23",
            link: "+998335551123",
          },
          email: "uzb@example.com",
          website: {
            text: "hoshim.uz",
            link: "https://google.com",
          },
          flag: require("../../../views/Contacts/styles/flas/GB-United-Kingdom-Flag.png"),
          map:'<iframe style="width:100%; height:100%; border: none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1323160.6061110066!2d-3.598240648196294!3d55.04699912828093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2z0JLQtdC70LjQutC-0LHRgNC40YLQsNC90LjRjw!5e0!3m2!1sru!2sus!4v1653398948612!5m2!1sru!2sus"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        {
          name: "Uzbekistan",
          address: {
            text: "Kandagar, terror City, Avganistan",
            link: "https://goo.gl/maps/YY9CgfX24xnseFtt6",
          },
          Phone: {
            text: "+01(33)555-11-23",
            link: "+018335551123",
          },
          email: "angan@example.com",
          website: {
            text: "gani.uz",
            link: "https://google.com",
          },
          flag: require("../../../views/Contacts/styles/flas/uzbekistan-flag.png"),
          map: '<iframe style="width:100%; height:100%; border: none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6139271.026930727!2d60.083608772312225!3d41.2938305447332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2z0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2sus!4v1653399224407!5m2!1sru!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
        {
          name: "Kazakhstan",
          address: {
            text: "Zembabi, Black City, Afrika",
            link: "https://goo.gl/maps/pSNYnnKKQYt75aet9",
          },
          Phone: {
            text: "+5(33)555-11-23",
            link: "+5335551123",
          },
          email: "afr@example.com",
          website: {
            text: "afrik.uz",
            link: "https://google.com",
          },
          flag: require("../../../views/Contacts/styles/flas/kazakhstan-flag.png"),
          map: '<iframe style="width:100%; height:100%; border: none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10488103.54010713!2d60.02311387240383!3d50.07557379521899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a91007ecfca947%3A0x5f7b842fe4b30e1b!2z0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2sus!4v1653399347706!5m2!1sru!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";


.dal{
  padding: 60px 120px;
  display: flex;
  justify-content:space-around;
  align-items: center;
  gap: 30px 40px;
  width: 100%;
  flex-wrap: wrap;
  .box{
    width: 40%;
    h3{
      font-weight: 700;
      font-size: 40px;
      line-height: 52px;
      text-transform: uppercase;
      color: $black;
      margin-bottom: 20px;
    }
    a{
      font-family: $font_family;
      font-weight: 500;
      font-size: 25px;
      line-height: 30px;
      color: $brand_color;

    }
  }
}




.maps {
  width: 100%;
  height: 500px;
  background: $white;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 64px;
}


.btns {
  display: flex;
  justify-content: center;
  gap: 42px;
}

.btns button {
  width: 350px;
  height: 80px;
  background: #ffffff;
  border-radius: 10px;
  padding: 12px 35px;
  font-size: 17px;
  font-weight: 600;
  transition: 0.3s;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    font-family: $font_family;
    font-weight: $font_weight;
    font-size: 25px;
    line-height: 30px;
    color: #000;
  }
}

.btns button.active {
  background: #2268c8;
}
.btns button.active > span {
  color: rgb(255, 255, 255);
}
</style>
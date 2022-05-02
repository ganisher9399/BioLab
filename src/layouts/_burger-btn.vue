<template>
    <div class="burger-btn">

     <svg
        width="32"
        height="32"
        viewBox="0 0 32 42"
        xmlns="http://www.w3.org/2000/svg"
        onclick="this.classList.toggle('active')"
      >
        <g transform="matrix(1,0,0,1,-438.286,-264.004)">
          <g id="arrow_left1">
            <g
              transform="matrix(-1,-1.22465e-16,1.22465e-16,-1,858.787,564.935)"
            >
              <path
                id="top"
                d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
              />
            </g>
            <g transform="matrix(-1,-2.44929e-16,-2.44929e-16,1,858.786,5)">
              <path
                id="bottom"
                d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
              />
            </g>
            <g
              transform="matrix(-1,-1.22465e-16,1.22465e-16,-1,858.787,569.935)"
            >
              <path id="middle" d="M390,284.967L420,284.967" />
            </g>
          </g>
        </g>
      </svg>

    </div>
</template>


<script>
export default {
   props: {
       is_active: Boolean,
   }
}
</script>


<style scoped>

svg {
        fill-rule: evenodd;
        clip-rule: evenodd;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 1.5;
        cursor:pointer;
        
   
      }

      svg path {
        fill: none;
        stroke: black;
        stroke-width: 1px;
      }

      svg + svg {
        margin-left: 1.5rem;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Segoe UI, sans-serif;
      }

      body {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background: #7f00ff;
        background: -webkit-linear-gradient(to right, #e100ff, #7f00ff);
        background: linear-gradient(to right, #e100ff, #7f00ff);
        color: white;
        padding: 1rem;
      }

      h1 {
        font-size: 2.5rem;
        text-transform: uppercase;
        letter-spacing: 5px;
        text-align: center;
        margin-bottom: 2rem;
      }

      .icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
       
      }

      #top,
      #bottom {
        stroke-dasharray: 30, 75.39;
        transition: all 0.6s cubic-bezier(0.6, 0.33, 0.67, 1.29);
      }

      svg.active #top,
      svg.active #bottom {
        stroke-dasharray: 75.39;
        stroke-dashoffset: -60;
      }

      svg:nth-child(2) {
        transform: rotate(0deg);
        transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      svg:nth-child(2) path {
        transition: all 0.4s ease-in-out 0.6s;
      }

      svg:nth-child(2).active {
        transform: rotate(180deg);
      }

      .rocket #top {
        stroke-dasharray: 30, 88;
      }
    
</style>
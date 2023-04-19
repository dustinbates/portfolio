<script setup>

</script>

<template>
  <div class="flex w-screen bg-red-700 overflow-x-hidden">
    <div class="flex w-full bg-red-600 border-b-2 border-red-800">
      <div class="flex justify-between lg:mx-10 mx-5 my-5">
        <div @click="mobile=!mobile" class="blinkButton relative flex justify-center rounded-full bg-blue-500 w-28 h-28 border-8 border-slate-100 shadow-md shadow-red-900">
          <div class="absolute rounded-full h-full w-full shadow-sm shadow-blue-950 "></div>
          <div class="absolute rounded-full h-12 w-12 border-8 border-blue-400 bg-blue-300 skew-x-6 left-3 top-3"></div>
        </div>
        <div class="flex mx-20">
          <div class="relative rounded-full bg-red-500 w-8 h-8 border-2 mx-5 ml-0 border-red-900 shadow-md shadow-red-800">
            <div class="absolute rounded-full h-3 w-3 border-2 border-red-400 bg-red-300 skew-x-6 left-1 top-1"></div>
          </div>
          <div class="relative rounded-full bg-yellow-500 w-8 h-8 border-2 mx-5 border-red-900 shadow-md shadow-red-800">
            <div class="absolute rounded-full h-3 w-3 border-2 border-yellow-400 bg-yellow-300 skew-x-6 left-1 top-1"></div>
          </div>
          <div class="relative rounded-full bg-green-500 w-8 h-8 border-2 mx-5 border-red-900 shadow-md shadow-red-800">
            <div class="absolute rounded-full h-3 w-3 border-2 border-green-400 bg-green-300 skew-x-6 left-1 top-1"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex justify-end pr-10 bg-red-600 w-full h-20 box-shadow">
        <transition-group name="buttons">
          <div v-if="!mobile" class="flex w-1/2 items-center ">
            <button @click="blink" class="w-28 bg-sky-400 border-2 border-red-800 rounded-l-lg p-2 shadow-md shadow-red-800">About</button>
            <button @click="blink" class="w-28 bg-sky-400 border-2 border-l-0 border-red-800 p-2 shadow-md shadow-red-800">Projects</button>
            <button @click="blink" class="w-28 bg-sky-400 border-2 border-l-0 border-red-800 p-2 shadow-md shadow-red-800">Resume</button>
            <button @click="blink" class="w-28 bg-sky-400 border-2 border-l-0 border-red-800 rounded-r-lg p-2 shadow-md shadow-red-800">Contact</button>
          </div>
        </transition-group>
      </div>
      <div class="triangle"></div>
    </div>
  </div>
  <div class="flex w-screen h-screen overflow-x-hidden bg-red-700 justify-center items-center px-5 lg:px-10 pt-5 pb-20">
    <div class="bg-white mx-auto py-4 h-full w-full border-2 border-red-600 shadow-inner shadow-red-900 rounded-xl">

    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      mobile: true,

    }
  },
  methods: {
    blink(){
      let button = document.querySelector('.blinkButton')
      console.log(button);
      if(button?.classList.contains('.blinker') == true){
        button?.classList.remove('.blinker')
      }
        button?.classList.toggle('bg-blue-500')
        button?.classList.toggle('blinker')
        button?.classList.toggle('bg-blue-500')
    }
  }
}
</script>

<style scoped>

.blinker{
  animation: blink 200ms linear;
}

@keyframes blink {
  from {background-color: white};
  to {background-color: black};
}
.triangle{
  width: 0;
  height: 0;
  border-top: 72px solid #DC0B2D;
  border-right: 72px solid transparent;
  filter: drop-shadow(2px 2px 1px #991b1b);
}

.box-shadow{
  box-shadow: 3px 3px 5px #991b1b; 
}


.buttons-enter-active,
.buttons-leave-active{
  transition: all 200ms ease;
}

.buttons-enter-from,
.buttons-leave-to{
  opacity: 0;
  transform: translateX(-400px);
}
</style>

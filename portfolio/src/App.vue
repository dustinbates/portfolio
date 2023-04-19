<template>
  <div class="flex w-screen bg-red-700 overflow-x-hidden">
    <div class="flex w-full bg-red-600 border-b-2 border-red-800">
      <div class="flex justify-between lg:mx-10 mx-5 my-5">
        <div @click="mobile = !mobile"
          class="blinkButton  relative flex justify-center rounded-full bg-blue-500 w-28 h-28 border-8 border-slate-100 shadow-md shadow-red-900">
          <div class="absolute rounded-full h-full w-full shadow-sm shadow-blue-950 "></div>
          <div class="absolute rounded-full h-12 w-12 border-8 border-blue-400 bg-blue-300 skew-x-6 left-3 top-3"></div>
        </div>
        <div class="flex mx-20">
          <div v-scrollAnimate
            class="relative rounded-full bg-red-500 w-8 h-8 border-2 mx-5 ml-0 border-red-900 shadow-md shadow-red-800">
            <div class="absolute rounded-full h-3 w-3 border-2 border-red-400 bg-red-300 skew-x-6 left-1 top-1"></div>
          </div>
          <div v-scrollAnimate
            class="relative rounded-full bg-yellow-500 w-8 h-8 border-2 mx-5 border-red-900 shadow-md shadow-red-800">
            <div class="absolute rounded-full h-3 w-3 border-2 border-yellow-400 bg-yellow-300 skew-x-6 left-1 top-1">
            </div>
          </div>
          <div v-scrollAnimate
            class="relative rounded-full bg-green-500 w-8 h-8 border-2 mx-5 border-red-900 shadow-md shadow-red-800">
            <div class="absolute rounded-full h-3 w-3 border-2 border-green-400 bg-green-300 skew-x-6 left-1 top-1"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex justify-end pr-10 bg-red-600 w-full h-20 box-shadow">
        <transition-group name="buttons">
          <div v-if="!mobile" class="flex w-1/2 items-center ">
            <button @click="blink"
              class="w-28 bg-sky-400 border-2 border-red-800 rounded-l-md p-2 shadow-md shadow-red-800">About</button>
            <button @click="blink"
              class="w-28 bg-sky-400 border-2 border-l-0 border-red-800 p-2 shadow-md shadow-red-800">Projects</button>
            <button @click="blink"
              class="w-28 bg-sky-400 border-2 border-l-0 border-red-800 p-2 shadow-md shadow-red-800">Resume</button>
            <button @click="blink"
              class="w-28 bg-sky-400 border-2 border-l-0 border-red-800 rounded-r-md p-2 shadow-md shadow-red-800">Contact</button>
          </div>
        </transition-group>
      </div>
      <div class="triangle"></div>
    </div>
  </div>
  <div class="flex w-screen h-screen overflow-x-hidden bg-red-700 justify-center items-center px-5 lg:px-8 py-5">
    <div class="relative bg-slate-200 mx-auto pt-4 h-full w-full shadow-inner shadow-red-900 rounded-xl">
      <div class="flex justify-center py-2">
        <div class="rounded-full w-8 h-8 mx-12 border-2 border-red-900 shadow-inner shadow-red-700 bg-red-600"></div>
        <div class="rounded-full w-8 h-8 mx-12 border-2 border-red-900 shadow-inner shadow-red-700 bg-red-600"></div>
      </div>
      <div class="flex rounded-xl w-11/12 h-5/6 mx-auto md:my-2 bg-black"></div>
      <div class="flex justify-between items-center px-5 md:px-20">
        <div class="rounded-full w-12 h-12 border-2 mx-14 md:mx-12 border-red-900 shadow-inner shadow-red-700 bg-red-600">
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-20 h-20">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </div>
      <div class="triangle2 absolute bottom-0 left-0"></div>
    </div>
  </div>
  <div class="flex w-full h-20 bg-red-600 border-t-2 border-red-800">
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: false,
    }
  },
  methods: {
    blink() {
      let button = document.querySelector('.blinkButton')
      console.log(button);
      button?.classList.toggle('blinker')
      setTimeout(() => {
        button?.classList.remove('blinker')
      }, 800)
    },
  },
}
</script>

<style scoped>
.blinker {
  animation: blink 300ms linear 2;
  animation-delay: 100ms;
}

@keyframes blink {
  0% {
    filter: brightness(1);
  }

  50% {
    filter: brightness(1.75);
  }

  100% {
    filter: brightness(1);
  }
}

.before-enter {
  animation: blink 500ms linear;
}

.before-enter:nth-child(2) {
  animation-delay: 300ms;
}

.before-enter:nth-child(3) {
  animation-delay: 600ms;
}

.triangle {
  width: 0;
  height: 0;
  border-top: 72px solid #DC0B2D;
  border-right: 72px solid transparent;
  filter: drop-shadow(2px 2px 1px #991b1b);
}

.triangle2 {
  width: 0;
  height: 0;
  border-bottom: 80px solid #b91c1c;
  border-right: 80px solid transparent;
}

.box-shadow {
  box-shadow: 3px 3px 5px #991b1b;
}

.buttons-enter-active,
.buttons-leave-active {
  transition: all 200ms ease;
}

.buttons-enter-from,
.buttons-leave-to {
  opacity: 0;
  transform: translateX(-400px);
}</style>

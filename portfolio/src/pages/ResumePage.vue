<template>
  <div class="w-full bg-gradient-to-b from-sky-500 to-sky-600 rounded-lg overflow-scroll overflow-x-hidden">
    <div class="flex flex-col md:w-3/5 justify-center p-2 md:p-0 md:m-5 text-slate-200 text-shadow">
      <u class="text-3xl">Experience</u>
      <br>
      <div class="p-3">
        <h1 class="text-2xl mb-3" @click="showDropdown = !showDropdown">Boise
          CodeWorks
          <p class="text-sm mt-2 md:m-0 md:text-lg md:w-2/3">Jan 2023 - Apr 2023</p>
        </h1>
        <transition name="slide">
          <ul v-if="showDropdown" class="list text-sm list-disc ms-5">
            <li class="pb-2">Developed front and back-end applications over 13 weeks with over 520+ hours of hands-on
              experience
            </li>
            <li class="py-2">
              Built applications using HTML, Bootstrap, JavaScript, Node.js, Vue.js, C#, and more
            </li>
            <li class="py-2">
              Worked in teams to create applications within a short time span using Scrum/Agile methodologies
            </li>
            <li class="pt-2">
              Received the "Golden Duck" award for successfully completing all checkpoint assignments with 100%
            </li>
          </ul>
        </transition>
      </div>
      <div class="p-3">
        <h1 class="text-2xl mb-3">Chris Reeve Knives
          <p class="text-sm mt-2 md:m-0 md:text-lg">May 2021 - Oct 2022</p>
        </h1>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      showDropdown: false,
    }
  }
}
</script>


<style scoped>
.text-shadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.583);
}

.slide-enter-active {
  transition: all .5s ease-in;
}

.slide-leave-active {
  transition: all .5s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
<template>
  <div
    class="w-full h-full bg-gradient-to-b from-sky-500 to-sky-600 rounded-lg overflow-scroll overflow-x-hidden flex flex-col justify-center items-center py-10">
    <h1 class="text-3xl text-slate-200 text-shadow"><u>Menu</u></h1>
    <div class="flex flex-col justify-evenly items-center w-full h-full">
      <router-link :to="{ name: 'About' }">
        <button
          class="w-56 p-2 flex justify-center items-center rounded-lg shadow-md shadow-sky-700 bg-slate-200 text-xl">
          About
        </button>
      </router-link>
      <router-link :to="{ name: 'Projects' }">
        <button
          class="w-56 p-2 flex justify-center items-center rounded-lg shadow-md shadow-sky-700 bg-slate-200 text-xl">
          Projects
        </button>
      </router-link>
      <router-link :to="{ name: 'Resume' }">
        <button
          class="w-56 p-2 flex justify-center items-center rounded-lg shadow-md shadow-sky-700 bg-slate-200 text-xl">
          Resume
        </button>
      </router-link>
      <router-link :to="{ name: 'Contact' }">
        <button
          class="w-56 p-2 flex justify-center items-center rounded-lg shadow-md shadow-sky-700 bg-slate-200 text-xl">
          Contact
        </button>
      </router-link>
    </div>

  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style scoped>
.text-shadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.583);
}
</style>
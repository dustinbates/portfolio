<template>
  <div class="p-3 border-2 shadow-sm shadow-sky-700 rounded-lg mb-2 md:w-11/12 hover:bg-sky-300 hover:bg-opacity-50">
    <h1 @click="toggleDropdown" class="text-xl md:text-2xl mb-3 cursor-pointer">{{ title }}
      <p class="text-sm mt-2 md:m-0 md:text-lg"><i>{{ worked }}</i></p>
    </h1>
    <transition name="slide">
      <ul v-show="showDropdown" class="list-disc ml-5">
        <li v-for="item in list" class="py-2">{{ item }}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    worked: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>

<style scoped>
.slide-enter-active {
  transition: all .3s ease-in;
}

.slide-leave-active {
  transition: all .2s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
  height: 0;
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

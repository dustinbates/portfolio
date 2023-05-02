<template>
  <div
    class="flex flex-col md:flex-row p-12 w-full bg-gradient-to-b from-sky-500 to-sky-600 rounded-lg overflow-scroll text-shadow">
    <div class="w-full md:w-1/2">
      <h1 class="text-3xl text-slate-200">Want to get in touch?</h1>
    </div>
    <div class="w-full md:w-1/2">
      <ContactForm />
    </div>

  </div>
</template>


<script>
import ContactForm from '../components/ContactForm.vue';

export default {
  data() {
    return {};
  },
  components: { ContactForm }
}
</script>


<style scoped>
.text-shadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.583);
}
</style>
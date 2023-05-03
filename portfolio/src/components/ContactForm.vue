<template>
  <div class="flex w-full text-slate-200 text-shadow text-xl">
    <form class="flex flex-col w-full" ref="form" @submit.prevent="sendEmail">
      <label>Name</label>
      <input type="text" name="name" v-model="name" required
        class="bg-slate-200 text-black text-sm mb-4 p-2 rounded-sm shadow-sm shadow-sky-600">
      <label>Email</label>
      <input type="email" name="email" v-model="email" required
        class="bg-slate-200 text-black text-sm mb-4 p-2 rounded-sm shadow-sm shadow-sky-600">
      <label>Message</label>
      <textarea name="message" v-model="message" required
        class="bg-slate-200 text-black text-sm mb-4 p-2 rounded-sm shadow-sm shadow-sky-600"></textarea>
      <div class="flex justify-end">
        <button type="submit" value="Send"
          class="text-sm md:text-lg text-shadow border-2 rounded-lg p-3 w-1/3 hover:bg-sky-300 hover:bg-opacity-50 shadow-sm shadow-sky-600">Let's
          Chat!</button>
      </div>
    </form>
  </div>
</template>


<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    sendEmail() {
      // @ts-ignore
      emailjs.sendForm('dustin.bates98', 'template_vjea5hp', this.$refs.form, 'kQqS4s1nbkGYebstt')
        .then((result) => {
          console.log('SUCCESS!', result.text);
          this.$swal('Nice!')
        }, (error) => {
          console.log('FAILED...', error.text);
        });
      this.name = ''
      this.email = ''
      this.message = ''

    },
  }
}
</script>


<style scoped>
.text-shadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.583);
}
</style>
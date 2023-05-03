<template>
  <div class="w-full h-full flex flex-col justify-center items-center text-center p-12 text-slate-200 select-none">
    <h1 class="text-lg md:text-2xl mb-2" v-html="typedText"></h1>
    <router-link :to="{ name: 'About' }">
      <svg class="h-32 w-32 animate__animated animate__swing animate__infinite animate__slow" viewBox="0 0 24 24"
        fill="#E2E8F0" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <title>Who's that Pokemon?</title>
          <path
            d="M21.9012 13H16.8506C16.3873 15.2822 14.3696 17 11.9506 17C9.53167 17 7.51391 15.2822 7.05064 13H2C2.50172 18.0533 6.76528 22 11.9506 22C17.136 22 21.3995 18.0533 21.9012 13Z"
            fill="#E2E8F0"></path>
          <path
            d="M21.9012 11C21.3995 5.94668 17.136 2 11.9506 2C6.76528 2 2.50172 5.94668 2 11H7.05064C7.51391 8.71776 9.53167 7 11.9506 7C14.3696 7 16.3873 8.71776 16.8506 11H21.9012Z"
            fill="#E2E8F0"></path>
          <path clip-rule="evenodd"
            d="M11.9506 15C13.6075 15 14.9506 13.6569 14.9506 12C14.9506 10.3431 13.6075 9 11.9506 9C10.2938 9 8.95062 10.3431 8.95062 12C8.95062 13.6569 10.2938 15 11.9506 15ZM13.4506 12C13.4506 12.8284 12.7791 13.5 11.9506 13.5C11.1222 13.5 10.4506 12.8284 10.4506 12C10.4506 11.1716 11.1222 10.5 11.9506 10.5C12.7791 10.5 13.4506 11.1716 13.4506 12Z"
            fill="#E2E8F0" fill-rule="evenodd"></path>
        </g>
      </svg>
    </router-link>

  </div>
</template>


<script>
import 'animate.css'
import { onMounted, ref } from 'vue'
export default {
  data() {
    const typedText = ref('')
    const show = ref(false);

    function type(letter, delay) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          typedText.value += letter
          resolve(letter)
        }, delay)
      })
    }
    async function typer(word, delay) {
      let letters = word.split('')
      for (let i = 0; i < word.length; i++) {
        await type(letters[i], delay)
      }
    }

    onMounted(async () => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // @ts-ignore
          resolve();
        }, 1000);
      });
      show.value = true;
      let para = `A new entry has been added to your Pokedex!`

      let words = para.split(' ')
      for (let i = 0; i < words.length; i++) {
        await typer(words[i], 50)
        typedText.value += ' '
      }

    })

    return {
      show,
      typedText,
    }
  }
}
</script>


<style scoped></style>
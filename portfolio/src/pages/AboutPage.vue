<template>
  <div
    class="flex flex-col md:flex-row w-full bg-gradient-to-b from-sky-500 to-sky-600 rounded-lg shadow-inner shadow-sky-600 overflow-scroll select-none">
    <img src="../assets/img/DustinBates4Medium.png" alt=""
      class="pic flex flex-row md:flex-col h-72 sm:h-5/6 sm:w-5/12 rounded-xl mx-5 mt-3 md:mt-10 animate__animated animate__bounceIn">
    <div class="flex flex-col md:w-1/3 mx-5 mb-5 justify-start">
      <h1 class="text-2xl md:text-3xl mt-3 md:mt-10 text-slate-200 text-shadow">
        Name:<br>
        <p class="animate__animated animate__zoomIn animate__fast animate__delay-1s first">
          Dustin Bates
        </p>
      </h1>
      <h2 class="md:text-2xl mt-5 text-slate-200 text-shadow">
        Type:<br>
        <p class="animate__animated animate__zoomIn animate__fast animate__delay-1s second">
          Software Developer
        </p>
      </h2>
      <h2 class="md:text-2xl mt-5 text-slate-200 text-shadow">
        Height:
        <p class="animate__animated animate__zoomIn animate__fast animate__delay-1s third">
          12'3"
        </p>
      </h2>
      <h2 class="md:text-2xl mt-5 text-slate-200 text-shadow">
        Weight:
        <p class="animate__animated animate__zoomIn animate__fast animate__delay-1s fourth">
          520 lbs
        </p>
      </h2>
      <h2 class="md:text-xl lg:text-2xl mt-5 text-slate-200 text-shadow">
        Habitat:
        <p class="animate__animated animate__zoomIn animate__fast animate__delay-1s fifth">
          Boise, ID
        </p>
      </h2>
      <h2 class="md:text-lg mt-5 text-slate-200 text-shadow">
        Abilities: <br>
        <p class="mb-5 animate__animated animate__zoomIn animate__fast animate__delay-1s last">
          Adaptability, Creative Problem Solver, Quick Learner, Communicator
        </p>
      </h2>

    </div>
    <div class="flex flex-col md:w-1/3 mx-5 mb-5">
      <h4 class="text-sm md:text-md 2xl:text-lg mt-3 md:mt-10 mr-5 text-slate-200 text-shadow">
        <p class="text-lg">Description: </p>
        <div v-html="typedText"></div>
      </h4>
    </div>

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
        }, 4200);
      });
      show.value = true;
      let para = `Dustin is a Full-Stack Software Developer with a passion for creating intuitive and user-friendly web applications. He is highly adaptable, with the skill to learn just about anything he puts his mind to. With over 520 hours of hands-on experience and over 40 applications created, he is sure to bring value to any team.He spends his free time challenging himself by learning new skills like musical instruments or DIY projects, reading long-series novels, or playing various games both on and offline.`

      let words = para.split(' ')
      for (let i = 0; i < words.length; i++) {
        await typer(words[i], 8)
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


<style scoped>
.bounce-enter-active {
  animation: bounce-in .75s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
}

img {
  object-fit: cover;
  object-position: 50% 75%;
}

.text-shadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.583);
}

.first {
  --animate-delay: 1s;
}

.second {
  --animate-delay: 1.5s;
}

.third {
  --animate-delay: 2s;
}

.fourth {
  --animate-delay: 2.5s;
}

.fifth {
  --animate-delay: 3s;
}

.last {
  --animate-delay: 3.5s;
}
</style>
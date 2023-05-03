<template>
  <div
    class="flex flex-col md:flex-row w-full text-shadow bg-gradient-to-b from-sky-500 to-sky-600 rounded-lg overflow-scroll select-none">
    <!-- <div class="w-full md:w-1/3 p-3 md:p-10">
      <div id="bedProj" class="relative" data-te-carousel-init data-te-carousel-slide>
        Carousel indicators
        <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators>
          <button type="button" data-te-target="#bedProj" data-te-slide-to="0" data-te-carousel-active
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-te-target="#bedProj" data-te-slide-to="1"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"></button>
          <button type="button" data-te-target="#bedProj" data-te-slide-to="2"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"></button>
          <button type="button" data-te-target="#bedProj" data-te-slide-to="3"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"></button>
        </div>
        Carousel items
        <div class="rounded-xl relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          First item
          <div
            class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/BedConcept.jpg" class="block w-full" alt="..." />
          </div>
          Second item
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/BedShowcase.jpg" class="block w-full" alt="..." />
          </div>
          Third item
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/BedFolded.jpg" class="block w-full" alt="..." />
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/BedFinal.jpg" class="block w-full" alt="..." />
          </div>
        </div>
      </div>
    </div> -->

    <div class="w-full md:w-1/3 p-3 md:p-8">
      <div id="pageTurnProj" class="relative" data-te-carousel-init data-te-carousel-slide>
        <!--Carousel indicators-->
        <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators>
          <button type="button" data-te-target="#pageTurnProj" data-te-slide-to="0" data-te-carousel-active
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-te-target="#pageTurnProj" data-te-slide-to="1"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"></button>
          <button type="button" data-te-target="#pageTurnProj" data-te-slide-to="2"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"></button>
        </div>
        <!--Carousel items-->
        <div class="rounded-xl relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <!--First item-->
          <div
            class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/PageTurnHome.png" class="block w-full" alt="..." />
          </div>
          <!--Second item-->
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/PageTurnClub.png" class="block w-full" alt="..." />
          </div>
          <!--Third item-->
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/PageTurnProfile.png" class="block w-full" alt="..." />
          </div>
        </div>
      </div>
      <div>
        <h1 class="text-slate-200 text-2xl mt-2 mb-2">PageTurn.Book</h1>
        <p class="text-slate-200 text-sm">This site is a collaborative project made by myself and 4 of my classmates at
          Boise CodeWorks. Over a sprint of just two weeks, we developed a site where you can create book clubs, search
          for books using the Google Books API, add books to your read list or into your clubs, and leave comments to let
          others know what you thought. <br>
        <p class="text-slate-200 mt-2"><a href="https://pageturn-book.onrender.com/"><u>Check out the site
              here!</u></a><br></p>
        <p class="text-xs text-slate-200 mt-2">** This site is hosted on Render, a free service, so the initial load time
          may
          take a few
          minutes. Thanks for your patience. ** </p>
        </p>
      </div>
    </div>

    <div class="w-full md:w-1/3 p-3 md:p-8">
      <div id="towerProj" class="relative" data-te-carousel-init data-te-carousel-slide>
        <!--Carousel indicators-->
        <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators>
          <button type="button" data-te-target="#towerProj" data-te-slide-to="0" data-te-carousel-active
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-te-target="#towerProj" data-te-slide-to="1"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"></button>
        </div>
        <!--Carousel items-->
        <div class="rounded-xl relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <!--First item-->
          <div
            class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/TowerHome.png" class="block w-full" alt="..." />
          </div>
          <!--Second item-->
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/TowerEvent.png" class="block w-full" alt="..." />
          </div>
        </div>
      </div>
      <div>
        <h1 class="text-slate-200 text-2xl mt-2 mb-2">Tower</h1>
        <p class="text-slate-200 text-sm">This site was made as a place to create and post various events like
          conventions, concerts, or webinars. Developed over a weekend, Tower was a great way to practice back-end coding
          with Node.js. Here you can create events, sort by event type, attend events that have available spots left, see
          who else is attending, and leave comments. <br>
        <p class="text-slate-200 mt-2"><a href="https://thetower23.onrender.com/"><u>Check out the site
              here!</u></a><br></p>
        <p class="text-xs text-slate-200 mt-2">** This site is hosted on Render, a free service, so the initial load time
          may
          take a few
          minutes. Thanks for your patience. ** </p>
        </p>
      </div>
    </div>

    <div class="w-full md:w-1/3 p-3 md:p-8 mb-5">
      <div id="spiderProj" class="relative" data-te-carousel-init data-te-carousel-slide>
        <!--Carousel indicators-->
        <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators>
          <button type="button" data-te-target="#spiderProj" data-te-slide-to="0" data-te-carousel-active
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-te-target="#spiderProj" data-te-slide-to="1"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"></button>
          <button type="button" data-te-target="#spiderProj" data-te-slide-to="2"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"></button>
        </div>
        <!--Carousel items-->
        <div class="rounded-xl relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <!--First item-->
          <div
            class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/SpiderHome.png" class="block w-full" alt="..." />
          </div>
          <!--Second item-->
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/SpiderMid.png" class="block w-full" alt="..." />
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/SpiderEnd.png" class="block w-full" alt="..." />
          </div>
        </div>
      </div>
      <div>
        <h1 class="text-slate-200 text-2xl mt-2 mb-2">Spidey Central</h1>
        <p class="text-slate-200 text-sm">Everyone has to start somewhere! This site was my very first dive into the world
          of coding. During the weekend I worked on this, I realized how much fun it was to bring an idea to life on
          screen. After creating this, I started pick up on things I'd see on other websites and think "Wow, I know how
          they did that. I could do that too!" Sure, this site may be primitive compared to most, but I think it's
          important to be able to see how far I've come from where I first started.<br>
        <p class="text-slate-200 mt-2"><a href="https://dustinbates.github.io/checkpoint-week-one/"><u>Check out the
              site
              here!</u></a><br><br></p>
        </p>
      </div>
    </div>

  </div>
</template>


<script>
import { Carousel, initTE } from "tw-elements";
import { onMounted } from "vue";
import Dropdown from "../components/Dropdown.vue";

export default {
  data() {
    onMounted(() => {
      initTE({ Carousel });
    });
    return {};
  },
  components: { Dropdown }
}
</script>


<style scoped>
img {
  height: 400px;
  object-fit: cover;
  zoom: 75%;
}

.text-shadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.583);
}
</style>
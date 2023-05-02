<template>
  <div
    class="flex flex-col md:flex-row w-full text-shadow bg-gradient-to-b from-sky-500 to-sky-600 rounded-lg overflow-scroll">
    <div class="w-full md:w-1/3 p-3 md:p-10">
      <div id="bedProj" class="relative" data-te-carousel-init data-te-carousel-slide>
        <!--Carousel indicators-->
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
        <!--Carousel items-->
        <div class="rounded-xl relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <!--First item-->
          <div
            class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/BedConcept.jpg" class="block w-full" alt="..." />
          </div>
          <!--Second item-->
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item style="backface-visibility: hidden">
            <img src="../assets/img/BedShowcase.jpg" class="block w-full" alt="..." />
          </div>
          <!--Third item-->
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
    </div>

    <div class="w-full md:w-1/3 p-3 md:p-10">
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
    </div>

    <div class="w-full md:w-1/3 p-3 md:p-10">
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
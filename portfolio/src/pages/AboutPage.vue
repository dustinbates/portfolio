<template>
  <div class="flex flex-col md:flex-row w-full bg-sky-600 rounded-lg overflow-scroll">
    <img src="../assets/img/Dustin Bates 4 Medium.png" alt="" class="pic flex flex-row md:flex-col h-72 sm:h-5/6 sm:w-5/12 rounded-xl mx-5 mt-3 md:mt-10">
    <div class="flex flex-col md:w-1/3 mx-5 mb-5 justify-start">
      <h1 class="text-2xl md:text-3xl mt-3 md:mt-10 text-slate-200 text-shadow">Name:<br> Dustin Bates</h1>
      <h2 class="md:text-2xl mt-5 text-slate-200 text-shadow">Type:<br> Software Developer</h2>
      <h2 class="md:text-2xl mt-5 text-slate-200 text-shadow">Height: 6'0"</h2>
      <h2 class="md:text-2xl mt-5 text-slate-200 text-shadow">Weight: 175lbs</h2>
      <h2 class="md:text-xl lg:text-2xl mt-5 text-slate-200 text-shadow">Habitat: Boise, ID</h2>
      <h2 class="md:text-lg mt-5 mb-5 text-slate-200 text-shadow">Abilities: <br> Adaptability, Creative Problem Solver, Quick Learner, Communicator </h2>
      
    </div>
    <div class="flex flex-col md:w-1/3 mx-5 mb-5">
      <h4 class="text-sm md:text-md 2xl:text-lg mt-3 md:mt-10 mr-5 text-slate-200 text-shadow">Description:<br> Dustin is a Full-Stack Software Developer with a passion for creating intuitive and user-friendly web applications. He is highly adaptable, with the skill to learn just about anything he puts his mind to. With over 520 hours of hands-on experience and over 40 applications created, he is sure to bring value to any team.
      He spends his free time challenging himself by learning new skills like musical instruments or DIY projects, reading long-series novels, or playing various games both on and offline.  </h4>
    </div>
    
  </div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style scoped>
img{
  object-fit: cover;
  object-position: 50% 75%;
}

.text-shadow{
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.583);
}

</style>
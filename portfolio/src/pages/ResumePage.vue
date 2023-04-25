<template>
  <div class="w-full bg-gradient-to-b from-sky-500 to-sky-600 rounded-lg overflow-scroll overflow-x-hidden">
    <div class="flex flex-col md:w-1/2 justify-center p-2 md:p-0 md:m-5 text-slate-200 text-shadow select-none">
      <u class="text-3xl ms-2">Experience</u>
      <br>
      <Dropdown class="transition-all ease-linear" :title="'Software Development Student'"
        :worked="'Boise CodeWorks (2023)'" :list="[
          'Developed front and back-end applications over 13 weeks with over 520+ hours of hands-on experience',
          'Built applications using HTML, Bootstrap, JavaScript, Node.js, Vue.js, C#, and more',
          'Worked in teams to create applications within a short time span using Scrum/Agile methodologies',
          'Received the Golden Duck award for successfully completing all checkpoint assignments with 100%'
        ]" />
      <Dropdown :title="'CNC Machinist'" :worked="'Chris Reeve Knives (2021-2022)'" :list="[
        'Operated 5 types of CNC machines including Matsuura, Hyundai, Makino, Haas, and Fanuc to produce quality components for knife assembly',
        'Ensured daily maintenance of machines including filter replacement, coolant refill, oil changes, vacuuming inner machine and chip collectors, tool replacement, and general cleanliness',
        'Produced knife components of steel, micarta, and wood and ensured each to be within a tolerance of 0.002 inches'
      ]" />
      <Dropdown :title="'Executive Relations Manager'" :worked="'Sykes Enterprises (2019-2021)'" :list="[
        'Handled both written and verbal communication between members of an executive level',
        'Worked on behalf of executive leaders with arbitration requests and complaint management',
        'Managed cases received from the Better Business Bureau and Federal Communications Commission',
        'Provided support across multiple social media platforms (Reddit, Twitter, Facebook, LinkedIn)',
        'Audited cases of Tier I and Tier II agents to provide opportunities of improvement'
      ]" />
      <Dropdown :title="'Written Communication Specialist'" :worked="'DXC Technology (2017-2019)'" :list="[
        'Communicated with customers via a live chat platform to assist with issues related to internet, TV, and phone services',
        'Managed an email inbox to correspond with customers',
        'Utilized creative problem solving for customer technical and billing issues',
        'Completed data entry for case tracking',
      ]" />
      <Dropdown :title="'Lead Network Technician'" :worked="'3D Datacom (2009-2016)'" :list="[
        'Worked as a technician on a National Desktop Migration Project for a Fortune 500 Financial Institution',
        'Directed small teams of technicians to accomplish milestones to meet Service Level requirements on a nightly basis',
        'Traveled between multiple states to complete work within job sites',
        'Set-up and installed PCs, routers, servers, switches, and other banking related equipment',
        'Worked with remove teams of IT to complete installation and ensure full operation of network equipment'
      ]" />
    </div>
  </div>
</template>


<script>
import Dropdown from "../components/Dropdown.vue"
export default {
  components: {
    Dropdown,
  },
  data() {
    return {
    }
  }
}
</script>


<style scoped>
.text-shadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.583);
}
</style>
<template>
  <div class="w-full bg-gradient-to-b from-sky-500 to-sky-600 rounded-lg overflow-scroll overflow-x-hidden">
    <div class="flex flex-col md:flex-row">
      <div class="order-3 md:order-1 flex flex-col md:w-1/5 p-2 md:p-0 md:m-5 text-slate-200 text-shadow select-none">
        <u class="text-2xl ms-2 mb-5">Skills</u>
        <ul class="list text-lg px-2">
          <li class="pt-2">HTML/CSS</li>
          <li class="pt-2">JavaScript</li>
          <li class="pt-2">Bootstrap</li>
          <li class="pt-2">Vue.js</li>
          <li class="pt-2">Node.js</li>
          <li class="pt-2">C#</li>
          <li class="pt-2">Tailwind</li>
          <li class="pt-2">MongoDB</li>
          <li class="pt-2">MySQL</li>
          <li class="pt-2">Computer Hardware</li>
          <li class="pt-2">Adaptability</li>
          <li class="pt-2">Collaboration</li>
          <li class="pt-2">Communication</li>
          <li class="pt-2">Leadership</li>
          <li class="pt-2">Passion for Learning</li>
        </ul>
      </div>
      <div class="order-1 md:order-2 flex flex-col md:w-3/5 p-2 md:p-0 md:my-5 text-slate-200 text-shadow select-none">
        <u class="text-2xl ms-2 transition-all ease-linear">Experience</u>
        <br>
        <Dropdown :title="'Software Development Student'" :worked="'Boise CodeWorks (2023)'" :list="[
          'Developed front and back-end applications over 13 weeks with over 520+ hours of hands-on experience',
          'Built applications using HTML, Bootstrap, JavaScript, Node.js, Vue.js, C#, and more',
          'Worked in teams to create applications within a short time span using Scrum/Agile methodologies',
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
      <div class="order-2 md:order-3 flex flex-col md:w-1/5 p-2 md:p-0 md:my-5 text-slate-200 text-shadow select-none">
        <u class="text-2xl me-10">Education</u>
        <br>
        <Dropdown :title="'Boise CodeWorks'" :worked="'Certificate of Completion'" :list="[
          'Built over 40 applications throughout the course',
          'Gained knowledge of Scrum/Agile methodologies',
          'Received the Golden Duck award for successfully completing all checkpoint assignments with 100%'
        ]" />
        <Dropdown :title="'Meridian Technical Charter High School'" :worked="'High School Diploma'" :list="[
          'Graduated with 3.9 GPA',
          'Completion of Electronics Engineering pathway',
          'Accepted into the National Technical Honor Society'
        ]" />
      </div>

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
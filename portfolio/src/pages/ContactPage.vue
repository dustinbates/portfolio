<template>
  <div
    class="w-full bg-gradient-to-b from-sky-500 to-sky-600 rounded-lg overflow-scroll text-shadow text-slate-200 select-none">
    <div class="flex flex-col md:flex-row justify-between p-5 md:p-10">
      <div class="w-full md:w-3/5">
        <h1 class="text-2xl md:text-3xl mb-3 ">Like what you see?</h1>
        <p class="text-md md:me-8 mb-5 md:pr-5">
          Thanks for stopping by! If you have a project you'd like to discuss, a question you'd
          like to ask, or just want to say hi, I'd love to hear from you! Don't worry, we can skip the jargon -- let's
          keep
          the conversation simple and focused on what matters most. Whether you're a fellow developer or someone who's
          just
          excited about technology, I'm always up for a good chat. So, let's get in touch and see how we can make your
          project a reality!
        </p>
      </div>
      <div class="w-full h-3/5 md:w-2/5 md:border-2 md:rounded-md md:p-3">
        <ContactForm />
      </div>
    </div>
    <div class="md:flex-row p-5 md:p-0 md:px-12">
      <h1 class="text-2xl md:text-3xl mb-5 md:mb-0">Follow me for more!</h1>
      <div class="flex justify-evenly md:p-10">
        <a href="https://www.linkedin.com/in/dustinbates94/" title="Visit my LinkedIn">
          <svg class="h-24 w-24 md:h-32 md:w-32" fill="#E2E8F0" viewBox="0 0 32 32" version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>Visit my LinkedIn</title>
              <path
                d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z">
              </path>
            </g>
          </svg>
        </a>
        <a href="https://github.com/dustinbates" title="Check out my GitHub">
          <svg class="h-24 w-24 md:h-32 md:w-32" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" fill="#E2E8F0">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>Check out my GitHub</title>
              <defs> </defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#E2E8F0">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      id="github-[#142]"> </path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </div>
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
<template>
  <div class="not-found">
    <div id="clouds">
      <div class="clouds__item x1"></div>
      <div class="clouds__item x1_5"></div>
      <div class="clouds__item x2"></div>
      <div class="clouds__item x3"></div>
      <div class="clouds__item x4"></div>
      <div class="clouds__item x5"></div>
    </div>
    <div class="content-404">
      <h1 class="content-404__title">404</h1>
      <hr class="content-404__hr" />
      <h2 class="content-404__subtitle primary-word">THE PAGE</h2>
      <h2 class="content-404__subtitle secondary-word">WAS NOT FOUND</h2>
      <RouterLink class="content-404__back-to" :to="{ name: 'MainPage' }">
        BACK TO MAIN
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'NotFoundPage',

  components: {
    RouterLink,
  },
})
</script>

<style scoped>
/* stylelint-disable max-nesting-depth */

/* TODO: Пофиксить stylelint disable */
.not-found {
  position: relative;
}

.clouds {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.content-404 {
  text-align: center;
  display: block;
  position: relative;
  margin: 10rem auto;
}

.content-404__title {
  font-size: 22rem;
  font-weight: normal;
  display: inline-block;
  z-index: 2;
  letter-spacing: 1.5rem;
}

.content-404__hr {
  border-top: 0.5rem solid var(--black);
  color: var(--black);
  max-width: 42rem;
  z-index: -10;
}

.content-404__hr::after {
  border-top: 0.5rem solid var(--black);
  color: var(--black);
  max-width: 42rem;
  z-index: -10;
}

.content-404__subtitle {
  font-weight: normal;
  position: relative;
}

.content-404__subtitle.primary-word {
  letter-spacing: 1.2rem;
  font-size: 4em;
  line-height: 80%;
}

.content-404__subtitle.secondary-word {
  font-size: 2rem;
}

.content-404__back-to {
  display: inline-block;
  padding: 0.5rem;
  z-index: 5;
  font-size: 2.5rem;
  color: var(--additional);
  transition: color 0.2s linear;

  &:hover {
    color: var(--primary);
  }
}

.clouds__item {
  width: 35rem;
  height: 12rem;
  background: var(--primary);
  border-radius: 10rem;
  position: absolute;
  margin: 12rem auto 2rem;
  z-index: -1;
  transition: ease 1s;

  &::after,
  &::before {
    content: '';
    position: absolute;
    background: var(--primary);
    z-index: -1;
  }

  &::after {
    width: 10rem;
    height: 10rem;
    top: -5rem;
    left: 5rem;
    border-radius: 10rem;
  }

  &::before {
    width: 18rem;
    height: 18rem;
    top: -9rem;
    right: 5rem;
    border-radius: 20rem;
  }
}

.clouds__item.x1 {
  top: -5rem;
  left: 10rem;
  transform: scale(0.3);
  opacity: 0.9;
  animation: moveclouds 15s linear infinite;
}

.clouds__item.x1_5 {
  top: -8rem;
  left: 25rem;
  transform: scale(0.3);
  animation: moveclouds 17s linear infinite;
}

.clouds__item.x2 {
  left: 25rem;
  top: -1rem;
  transform: scale(0.6);
  opacity: 0.6;
  animation: moveclouds 25s linear infinite;
}

.clouds__item.x3 {
  left: 25rem;
  bottom: -17.5rem;
  transform: scale(0.6);
  opacity: 0.8;
  animation: moveclouds 25s linear infinite;
}

.clouds__item.x4 {
  left: 47rem;
  bottom: 16rem;
  transform: scale(0.75);
  opacity: 0.75;
  animation: moveclouds 18s linear infinite;
}

.clouds__item.x5 {
  left: 20rem;
  top: 30rem;
  transform: scale(0.5);
  opacity: 0.8;
  animation: moveclouds 20s linear infinite;
}

@keyframes moveclouds {
  0% {
    margin-left: 100rem;
  }

  100% {
    margin-left: -100rem;
  }
}
</style>

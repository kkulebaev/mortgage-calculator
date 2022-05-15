<script setup>
import TheForm from './../components/the-form/TheForm.vue'
import TheResult from '../components/the-result/TheResult.vue'
</script>

<template>
  <div class="main-page">
    <div class="main-page__data">
      <div class="title">
        <img
          class="title__logo"
          src="../assets/img/calculator.svg"
          alt="logo-calculator"
        />
        <h1 class="title__title">Калькулятор ипотеки</h1>
      </div>
      <the-form />
    </div>
    <the-result class="main-page__result" />
  </div>
</template>

<style lang="scss">
.main-page {
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 2rem;

  &__data {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    flex: 2;
  }

  &__result {
    flex: 1;
  }
}

.title {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.title__logo {
  display: block;
  padding: 1rem;
  width: 48px;

  background-color: $primary;
  border-radius: 9px;
}

.title__title {
  font-size: 3.6rem;
  line-height: 1.15;
  font-weight: 700;
  color: $black;
}
</style>

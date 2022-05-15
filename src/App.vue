<script setup></script>
<template>
  <div class="app">
    <div class="app-wrapper">
      <nav class="nav">
        <router-link class="nav__link" :to="{ name: 'mainPage' }">
          <img class="nav__icon" src="./assets/img/home.svg" alt="home-icon" />
        </router-link>
        <router-link class="nav__link" :to="{ name: 'detailPage' }">
          <img class="nav__icon" src="./assets/img/row.svg" alt="row-icon" />
        </router-link>
      </nav>

      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.app-wrapper {
  display: flex;
  width: 100%;
  max-width: 1260px;
  margin: auto;
  min-height: 750px;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);
}

.container {
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
}

.nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 6rem;
  background: #fafafa;

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;

    &.router-link-active {
      background: $white;
    }
  }

  &__icon {
    width: 3.2rem;
  }
}
</style>

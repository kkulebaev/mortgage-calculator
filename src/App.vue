<template>
  <div class="app">
    <div class="app-wrapper">
      <nav class="nav">
        <RouterLink class="nav__link" :to="{ name: 'mainPage' }">
          <img class="nav__icon" src="./assets/img/home.svg" alt="home-icon" />
        </RouterLink>
        <RouterLink class="nav__link" :to="{ name: 'detailPage' }">
          <img class="nav__icon" src="./assets/img/row.svg" alt="row-icon" />
        </RouterLink>
      </nav>

      <div class="container">
        <RouterView v-slot="{ Component }">
          <Transition
            class="transition"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in"
          >
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.app-wrapper {
  display: flex;
  width: 100%;
  max-width: 150rem;
  margin: auto;
  min-height: 80rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.container {
  width: 100%;
  padding: 4rem;
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

    &.RouterLink-active {
      background: $white;
    }
  }

  &__icon {
    width: 3.2rem;
  }
}

.transition {
  --animate-duration: 0.2s;
}
</style>

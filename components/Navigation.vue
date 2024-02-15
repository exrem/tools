<script lang="ts" setup>
const { getRoutes } = useRouter(),
  routes = getRoutes().filter(({ path }) => path !== '/').map(({ path, name: title }) => ({ path, title: title ?? path }))
</script>

<template>
  <nav id="bar">
    <div>
      <NuxtLink to="/">
        <span>tools<span>.</span></span>
      </NuxtLink>
    </div>
    <div>
      <NuxtLink v-for="{ path, title } in routes" :to="path" :key="path">{{ title }}</NuxtLink>
    </div>
    <div>
      <Icon name="menu" />
    </div>
  </nav>
  <div id="mobileNav">

  </div>

  <div id="barPlaceholder"></div>
</template>

<style scoped>
#bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  position: fixed;
  padding: 6px 12px;
  background: #00000080;
  backdrop-filter: blur(8px);

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
  }

  div {
    a {
      color: #cccccc;
      text-decoration: none;

      span {
        font-size: 2rem;
        font-weight: 600;

        span {
          color: #ababab
        }
      }
    }

    a.router-link-active, a:hover {
      color: white
    }
  }

  div:nth-child(2) {
    display: none;

    @media screen and (min-width: 1280px) {
      display: flex;
      gap: 12px
    }
  }

  div:nth-child(3) {
    display: flex;

    @media screen and (min-width: 1280px) {
      display: none
    }
  }
}

#barPlaceholder {
  height: 51px
}
</style>

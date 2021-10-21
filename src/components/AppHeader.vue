<template>
  <div class="header">
    <header>
      <nav>
        <ul>
          <li>
            <img
              src="https://images.repzio.com/productimages/772/logo772_lg.jpg?width=55&height=47"
              alt="Company logo"
            />
          </li>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/salesrep">My Salesrep</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <router-view/>
</template>

<style lang="scss" scoped>
header {
  padding: 1rem;
  margin: 0 auto;
  border-bottom: 1px solid gray;
}

nav {
  display: flex;
  justify-content: center;
  padding: 5px 60px;

  @include media-breakpoint-up(md) {
    justify-content: space-evenly;
  }

  a {
    color: #000;
    text-decoration: none;
    font-weight: 600;
    font-size: 2rem;
    display: block;
    padding: 0.5rem;
    text-align: center;
    border-radius: 5px;
    white-space: nowrap;

    &.router-link-exact-active,
    &:hover {
      color: #ffbe1d;
    }
  }

  ul {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      flex-basis: 48%;
      margin-bottom: 0.5rem;
    }

    @include media-breakpoint-up(sm) {
      flex-flow: row nowrap;

      li {
        padding-right: 40px;
      }
    }
  }
}
</style>

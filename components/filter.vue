<template>
  <b-container>
    <div class="m-4">
      <b-form-input
        v-model="searchWord"
        size="lg"
        type="search"
        placeholder="Buscar emprendimiento"
        aria-label="Buscar emprendimiento"
        @input="handleSearch"
      />
    </div>
    <div class="ml-4">
      <b-button
        pill
        size="sm"
        variant="outline-info"
        :class="{'text-white' : status === 'all'}"
        @click="handlerStatusFilter('all')"
      >
        Todos
      </b-button>
      <b-button
        pill
        size="sm"
        :class="{'text-white' : status === 'Servicios'}"
        variant="outline-primary"
        @click="handlerStatusFilter('Servicios')"
      >
        Servicios
      </b-button>
      <b-button
        pill
        size="sm"
        :class="{'text-white' : status === 'Productos'}"
        variant="outline-danger"
        @click="handlerStatusFilter('Productos')"
      >
        Productos
      </b-button>
      <b-button
        pill
        size="sm"
        :class="{'text-white' : status === 'Alimentos'}"
        variant="outline-warning"
        @click="handlerStatusFilter('Alimentos')"
      >
        Alimentos
      </b-button>
    </div>
    <!-- <div>
      <div>
        <p
          v-click-outside="closeOrderDropDown"
          @click="orderOpen = !orderOpen">
          <span>Ordenar Por</span>
          <span v-show="orderChanged">{{ orderText }}</span>
        </p>
        <ul v-show="orderOpen">
          <li
            :class="{'text-black': order === 'createdAt'}"
            @click="handleFilterOrder('createdAt')"
          >
            Fecha de creacion
          </li>
          <li
            :class="{'text-black': order === 'name'}"
            @click="handleFilterOrder('name')"
          >
            Nombre
          </li>
          <li
            :class="{'text-black': order === 'location'}"
            @click="handleFilterOrder('location')"
          >
            Ubicacion
          </li>
        </ul>
      </div>
    </div> -->
  </b-container>
</template>
<script>
import { debounce } from '~/helpers/index'
export default {
  data () {
    return {
      // orderOpen: false,
      // orderChanged: false,
      searchWord: ''
    }
  },
  computed: {
    search () {
      return this.$store.state.filter.search
    },
    // order () {
    //   return this.$store.state.filter.order
    // },
    status () {
      return this.$store.state.filter.status
    }
    // orderText () {
    //   switch (this.order) {
    //     case 'name':
    //       return 'Nombre'
    //     case 'location':
    //       return 'Ubicacion'
    //     default:
    //       return 'Fecha de creacion'
    //   }
    // }
  },
  methods: {
    handleFilterOrder (orderBy) {
      this.orderOpen = false
      this.orderChanged = true
      this.$store.dispatch('filterOrder', orderBy)
    },
    handlerStatusFilter (status) {
      this.$store.dispatch('filterStatus', status)
    },
    handleSearch: debounce(function (e) {
      this.$store.dispatch('filterSearch', this.searchWord)
    }, 500)
    // closeOrderDropDown (e) {
    //   this.orderOpen = false
    // }
  }
}
</script>

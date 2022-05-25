<template>
  <div>
    <GmapMap
      :center="{ lat: -37.813629, lng: 144.963058 }"
      :zoom="12"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
    >
      <gmap-cluster>
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </gmap-cluster>
    </GmapMap>
  </div>
</template>
<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import GmapCluster from 'vue2-google-maps/dist/components/cluster' // replace src with dist if you have Babel issues

Vue.component('GmapCluster', GmapCluster)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBLj1OwliOHxee4dkysN2MzF8OIVRI6Gq4',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then set installComponents to 'false'.
  //// If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
})
// const test = []
// const obj = {}
// for (let i = 1; i < 120; i++) {
//   obj.position.lat.push((Math.floor(Math.random() * 1) + 3700) / 100)
//   obj.position.lng.push((Math.floor(Math.random() * 1) + 14400) / 100)
//   test.push(obj)
// }
// console.log(test)

export default {
  data() {
    return {
      markers: [
        {
          position: {
            lat: -37.810386,
            lng: 144.962824
          },
          infoText: '<strong>Marker 1</strong>'
        },
        {
          position: {
            lat: -37.813302,
            lng: 144.955484
          },
          infoText: '<strong>Marker 2</strong>'
        },
        {
          position: {
            lat: -37.812691,
            lng: 144.987386
          },
          infoText: '<strong>Marker 3</strong>'
        },
        {
          position: {
            lat: -37.808563,
            lng: 145.037921
          },
          infoText: '<strong>Marker 4</strong>'
        }
      ]
    }
  }
}
</script>

<style></style>

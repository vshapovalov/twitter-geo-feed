<template>
 <div class="" style="display: none"></div>
</template>
<script>
    export default {
        props: ['marker'],
        data(){
            return {
                mapMarker: null,
                mapInfoWindow: null
            }
        },
        mounted() {

            if (this.$parent.map){
                this.mapMarker = new google.maps.Marker({
                    position: this.marker.coords,
                    map: this.$parent.map,
                    title: this.marker.text
                });

                this.mapInfoWindow = new google.maps.InfoWindow({
                    content: `<p>${this.marker.text}</p>`
                });

                this.mapMarker.addListener('click', ()=>{
                    this.mapInfoWindow.open(this.$parent.map, this.mapMarker);
                });
            }
        },
        destroyed(){

            if (this.mapMarker) this.mapMarker.setMap(null);
        }
    }
</script>
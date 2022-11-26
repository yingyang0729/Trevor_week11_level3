// import components first!!
import HeroThumb from './components/TheHeroThumbnail.js';

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            // ALWAYS get your remote data here
            fetch('./data.json')
                .then(res => res.json())
                .then(data => this.heroData = data)
            .catch(error => console.error(error));
        },

        data() {
            return {
                heroData: {}
            }
        },

        components: {
            theherothumb: HeroThumb,
        }
    }).mount('#app')
})()
export default {
    name: "TheHeroThumb",

    props: {
        hero: Object
    },

    template: `
    <li @click="markSelected" :class="{ 'selected' : isSelected }">
        <div class="img_wrapper">
            <img :src='"images/" + hero.biopic' alt="hero img">
        </div>
        <span>{{hero.name}}</span>       
    </li>
    `,

    data() {
        return {
            isSelected: false
        }
    },

    methods:{
        markSelected() {
            // toggle true or false by comparing the current boolean value
            this.isSelected = !this.isSelected;
        }
    }
}
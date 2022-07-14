<template>
    <div>
        <Character-search/>
    </div>
</template>

<script>
import CharacterSearch from '@/components/CharacterSearch.vue'
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'Character-search':CharacterSearch
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>
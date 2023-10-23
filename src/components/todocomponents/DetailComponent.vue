<template>
<div class="w-full py-5 px-16">
    <div class="flex justify-start gap-10 mb-3">
        <div class="w-[60px]">
            <span>Title</span>
        </div>
        <div>
            <span>: {{ getDataById?.title }}</span>
        </div>
    </div>
    <div class="flex justify-start gap-10 mb-3">
        <div class="w-[60px]">
            <span>Genre</span>
        </div>
        <div>
            <span>: {{ getDataById?.genre }}</span>
        </div>
    </div>
    <div class="flex justify-start gap-10 mb-3">
        <div class="w-[60px]">
            <span>Deskripsi</span>
        </div>
        <div>
            <span>: {{ getDataById?.deskripsi }}</span>
        </div>
    </div>
    <div class="flex justify-start gap-10 mb-3">
        <div class="w-[60px]">
            <span>Durasi</span>
        </div>
        <div>
            <span>: {{ getDataById?.durasi }}</span>
        </div>
    </div>
    <div class="flex justify-start gap-10 mb-3">
        <div class="w-[60px]">
            <span>Rating</span>
        </div>
        <div>
            <span>: {{ getDataById?.rating }}</span>
        </div>
    </div>
    <div class="flex justify-start gap-10 mb-3">
        <div class="w-[60px]">
            <span>Keterangan</span>
        </div>
        <div>
            <span>: {{ getDataById?.keterangan }}</span>
        </div>
    </div>
</div>




</template>

<script lang="ts">
import { dataFilm } from '../../services';


export default {
    name: 'DetailComponent',
    props: ['dataId'],
    setup(props:any) {
        console.log(props.dataId)
        return {
            idFilm: props.dataId
        }
        
    },
    data() {
        const getDataById = dataFilm.find((item:any) => item.id === this.idFilm)
        console.log(getDataById)
        return {
            getDataById
        }
        
    },
    methods: {
        
    }
}
</script>
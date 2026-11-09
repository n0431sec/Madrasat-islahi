<script setup>
import is_open from '@/stores/IsOpened';

const menu_drawer = ()=>{
    is_open.value = !is_open.value
}
</script>

<template>
    <div id="mistari-mitatu" @click="menu_drawer"  class="menu-icon">
        <div :class=" is_open ? 'funguliwa':'' " class="mstari sehemu-mstari mstari-kwanza"></div>
        <div  :class=" is_open ? 'funguliwa':'' " class="mstari"></div>
        <div :class=" is_open ? 'funguliwa':'' " class="mstari sehemu-mstari mstari-mwisho"></div>
    </div>
</template>
<style scoped>
.menu-icon {
    width: 30px;
    height:30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer; 
    padding: var(--padding-9xs-9);
}

/* */
.funguliwa {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.funguliwa.mstari-kwanza{
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.funguliwa.mstari-mwisho{
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.mstari.mstari-kwanza {
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
}

.mstari.sehemu-mstari {
    width: 50%;
}

.mstari {
    background:#fff;
    width: 100%;
    height: 2.5px;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);

}

.mstari.mstari-mwisho {
    align-self: flex-end;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
}
</style>
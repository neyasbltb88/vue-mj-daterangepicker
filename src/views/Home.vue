<template lang="pug">
  div
    div(style="margin: 20px 0;")
    //-   date-range-picker(:to="$route.query.to" :from="$route.query.from" locale="ru" submit-title="Actualiser" :panel="$route.query.panel" @select="checkUpdate" :show-controls="false" :presets="['custom']" :panels="['year']" :theme="theme")
    div(style="margin: 20px 0;")
    hr
    date-range-picker(:to="$route.query.to" :from="$route.query.from" locale="ru" @update="checkUpdate" showControls)
    hr
    //- ======
    //- div(style="margin: 20px 0;")
    //-   button(
    //-     v-for="localeValue in locales"
    //-     :key="localeValue"
    //-     class="button"
    //-     :class="localeValue === locale && 'selected'"
    //-     @click.prevent="() => switchLocation(localeValue)"
    //-   )
    //-     span {{ localeValue.toUpperCase() }}
    div(style="margin: 20px 0;")
      date-range-picker(to="2019-02-19T23:00:00.000Z" from="2019-02-15T23:00:00.000Z" @update="checkUpdate" :locale="locale" allowFrom="")
    div(style="margin: 20px 0;")
      date-range-picker(allowTo="2019-10-19T00:00:00.000Z" allowFrom="2019-10-15T00:00:00.000Z" @update="checkUpdate" :locale="locale" showControls)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DateRangePicker from '@/components/DateRangePicker.vue';
// import DateRangePicker from '@/components/DateRangePicker_copy.vue';

import dateFns from 'date-fns';
window.dateFns = dateFns;

import * as dateUtils from '../dateUtils';
window.dateUtils = dateUtils;

import quasarDate from '../quasarDate';
window.quasarDate = quasarDate;

window.d = new Date();
window.ds = d.toISOString();

window.d_1 = dateUtils.subDate(d, 'days', 1);
window.ds_1 = d_1.toISOString();

window.d1 = dateUtils.addDate(d, 'days', 1);
window.ds1 = d1.toISOString();

@Component({
    components: {
        DateRangePicker
    }
})
export default class Home extends Vue {
    theme = {
        primary: '#46C3A3',
        secondary: '#2D3E50',
        ternary: '#93A0BD',
        light: '#ffffff',
        border: '#e6e6e6',
        dark: '#000000',
        hovers: {
            day: '#CCC',
            range: '#e6e6e6'
        }
    };
    locale: string = 'ru';
    locales: string[] = ['ru'];
    checkUpdate(values) {
        this.$router.push({
            query: Object.assign({}, this.$route.query, {
                to: values.to,
                from: values.from,
                panel: values.panel
            })
        });
    }
    switchLocation(localeValue) {
        this.locale = localeValue;
    }
}
</script>

<style>
.button {
    appearance: none;
    border: 0;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    height: 32px;
    padding: 5px 15px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #f2f4f5;
}

.button + .button {
    margin-left: 0.25em;
}

.button.selected {
    background-color: #3297db;
    color: #f2f4f5;
}
</style>

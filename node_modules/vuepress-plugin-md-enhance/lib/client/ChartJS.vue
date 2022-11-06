<template>
  <div class="chart-js">
    <div class="chart-title">{{ title }}</div>
    <div v-if="loading" class="chart-loading-wrapper">
      <LoadingIcon />
    </div>
    <div v-show="!loading" id="id" ref="chartElement" class="chart-wrapper">
      <canvas ref="chartCanvasElement" height="400" />
    </div>
  </div>
</template>

<script src="./ChartJS" />

<style lang="stylus">
.chart-title
  margin 0.5rem auto
  font-weight 600
  font-size 18px
  text-align center

.chart-loading-wrapper
  display flex
  align-items center
  justify-content center
  background var(--grey15)

  .loading-icon
    width 4em
    height 4em
    margin 2.5em auto
    color var(--accent-color)

.chart-wrapper
  overflow-x scroll
  padding 0.6em 0.4em
  text-align center
  transition all 1s

  @media (max-width $MQMobileNarrow)
    margin 0 -1.5rem
    padding 0.6em 0
</style>

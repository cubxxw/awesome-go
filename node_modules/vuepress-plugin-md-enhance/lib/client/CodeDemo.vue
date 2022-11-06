<template>
  <div :id="id" class="code-demo-wrapper">
    <div v-if="loading" class="loading">
      <LoadingIcon />
    </div>
    <div class="code-demo-header">
      <button
        :class="['toggle-button', isExpanded ? 'down' : 'right']"
        @click="onToggle"
      />
      <span v-if="title" class="title">{{ decodeURIComponent(title) }}</span>
      <form
        v-if="info.isLegal && info.jsfiddle !== false"
        action="https://jsfiddle.net/api/post/library/pure/"
        class="code-demo-jsfiddle"
        target="_blank"
        method="post"
      >
        <input type="hidden" name="html" :value="info.html" />
        <input type="hidden" name="js" :value="info.js" />
        <input type="hidden" name="css" :value="info.css" />
        <input type="hidden" name="wrap" value="1" />
        <input type="hidden" name="panel_js" value="3" />
        <input
          type="hidden"
          name="resources"
          :value="[...info.cssLib, ...info.jsLib].join(',')"
        />
        <button
          type="submit"
          class="jsfiddle-button"
          aria-label="JSFiddle"
          data-balloon-pos="up"
        >
          <JSFiddleIcon />
        </button>
      </form>
      <form
        v-if="!info.isLegal || info.codepen !== false"
        class="code-demo-codepen"
        target="_blank"
        action="https://codepen.io/pen/define"
        method="post"
      >
        <input
          type="hidden"
          name="data"
          :value="
            JSON.stringify({
              html: info.html,
              js: info.js,
              css: info.css,
              js_external: info.jsLib.join(';'),
              css_external: info.cssLib.join(';'),
              layout: info.codepenLayout,
              html_pre_processor: codeType ? codeType.html[1] : 'none',
              js_pre_processor: codeType
                ? codeType.js[1]
                : info.jsx
                ? 'babel'
                : 'none',
              css_pre_processor: codeType ? codeType.css[1] : 'none',
              editors: info.codepenEditors,
            })
          "
        />
      </form>
    </div>

    <div
      v-show="isLegal && loaded"
      ref="demoWrapper"
      class="code-demo-container"
    />

    <div class="code-demo-code-wrapper" :style="{ height }">
      <div ref="codeContainer" class="code-demo-codes">
        <slot />
      </div>
    </div>
  </div>
</template>

<script src="./CodeDemo" />

<style lang="stylus">
@require '~@mr-hope/vuepress-shared/styles/arrow'
@require '~@mr-hope/vuepress-shared/styles/reset'

:root
  --code-demo-header-bg-color #eee

.theme-dark
  --code-demo-header-bg-color #333

.code-demo-wrapper
  margin 10px 0
  border 1px solid var(--border-color, #eaecef)
  border-radius 8px
  transition all 0.2s

  &:hover
    box-shadow 0 2px 12px var(--card-shadow)

  .loading
    display flex
    align-items center
    justify-content center
    background var(--grey15)

  .loading-icon
    width 4em
    height 4em
    margin 2.5em auto
    color var(--accent-color)

.code-demo-header
  position relative

  display flex
  align-items center
  justify-content space-between

  padding 8px 12px
  border-radius 8px 8px 0 0

  background-color var(--code-demo-header-bg-color)

  text-align left

  .toggle-button
    arrow()
    button()
    position relative

    margin 8px 12px 8px 8px
    border-color transparent
    border-radius 50%

    background-color #ccc
    outline none

    font-size 24px

    cursor pointer

    .theme-dark &
      background-color #555


    &:hover
      background-color #aaa

      .theme-dark &
        background-color #777

  .title
    display inline-block
    vertical-align top
    flex 1

    font-weight 500
    font-size 1.25rem
    line-height 2.5rem

    &:first-child
      margin-left 16px

  .codepen-button,
  .jsfiddle-button
    button()
    position relative

    box-sizing content-box

    width 1.25rem
    height 1.25rem
    margin 0 4px
    padding 4px
    border-radius 50%

    background-color #ccc
    outline none

    .theme-dark &
      background-color #555


    svg
      width 1.25rem
      height 1.25rem
      fill #777

      .theme-dark &
        fill #aaa

    &:hover
      background-color #aaa

      .theme-dark &
        background-color #777

      svg
        fill #333

        .theme-dark &
          fill #fff

.code-demo-container
  position relative

  overflow auto

  max-height 400px
  padding 20px
  border-bottom 1px solid var(--border-color, #eaecef)


.code-demo-code-wrapper
  overflow hidden
  transition height 0.5s


.code-demo-codes
  > p
    margin 0.75rem


  > div[class*="language-"]
    border-radius 0

    @media (max-width $MQMobileNarrow)
      margin 0.8rem 0

      &.line-numbers-modeafter
        display none

      .line-numbers-wrapper
        display none

      pre[class*="language-"]
        padding 1.25rem 1.25rem 1rem

    &:first-child pre
      margin-top 0 !important


    &.language-json
      display none


    &.line-numbers-modeafter
      border-radius 0


    .copy-code-button
      right 0
      bottom 0

      width 28px
      height 28px
      border-radius 50% 10% 0

      svg
        position relative
        top 1px
        left 1px
</style>

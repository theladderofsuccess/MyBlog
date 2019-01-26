<template>
   <i
    v-if="name"   
    :class="`kz-icon ${size} KZ-${name}`"
    :style="{color}"
    @click="$emit('click', $event)"
  ></i>
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: 'md',
    },
    color: {
      type: String,
      default: '',
    },
    Isdefault:{
      default:true,
      type:Boolean
    }
  },
  data: () => ({}),
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: 'kz-blog';  /* project id 1031913 */
  src: url('https://at.alicdn.com/t/font_1031913_l07id1sqawn.eot');
  src: url('https://at.alicdn.com/t/font_1031913_l07id1sqawn.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_1031913_l07id1sqawn.woff2') format('woff2'),
  url('https://at.alicdn.com/t/font_1031913_l07id1sqawn.woff') format('woff'),
  url('https://at.alicdn.com/t/font_1031913_l07id1sqawn.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_1031913_l07id1sqawn.svg#kz-blog') format('svg');
}

[class*=" KZ-"],
[class^=KZ-] {
  font-family: "kz-blog" !important;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  speak: none;

  &.xs {
    font-size: 8px;
  }

  &.sm {
    font-size: 16px;
  }

  &.md {
    font-size: 24px;
  }

  &.lg {
    font-size: 32px;
  }

  &.xl {
    font-size: 40px;
  }

  &:before {
    position: relative;
    z-index: 2;
  }
}
.KZ-tools:before {
  content: "\e657";
}

.KZ-smile:before {
  content: "\e64a";
}

.KZ-tech-stack:before {
  content: "\e6c2";
}

.KZ-Projects:before {
  content: "\e669";
}

.KZ-FrontPage:before {
  content: "\e618";
}
</style>
module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-switch-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {

    // compile server port
    port: 4000

  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <h1 class="h3 m-b-small">
          Coffeekraken s-switch-component
        </h1>
        <p class="p m-b-bigger">
          Provide a nice and simple switch element
        </p>
        <label class="block m-b">
          Default<br>
          <input type="checkbox" is="s-switch" class="s-medium" disabled />
        </label>
        <label class="block m-b">
          Primary<br>
          <input type="checkbox" is="s-switch" color="primary" checked class="s-medium" />
        </label>
        <label class="block m-b">
          Secondary<br>
          <input type="checkbox" is="s-switch" color="secondary" checked class="s-big" />
        </label>
        <label class="block m-b">
          Success<br>
          <input type="checkbox" is="s-switch" color="success" checked class="s-big" />
        </label>
        <label class="block m-b">
          Error<br>
          <input type="checkbox" is="s-switch" color="error" checked class="s-big" />
        </label>
        <label class="block m-b">
          Warning<br>
          <input type="checkbox" is="s-switch" color="warning" checked class="s-bigger" />
        </label>
        <label class="block m-b">
          Info<br>
          <input type="checkbox" is="s-switch" color="info" checked class="s-bigger" />
        </label>
      `
    },
    css: {
      language: 'sass',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'index';
        @include s-init();
        @include s-classes();
        @include s-typography-classes();
        body {
          padding: s-space(bigger);
        }
        @include s-switch-classes(
          $colors: default primary secondary success error warning info
        );
      `
    },
    js: {
      language: 'js',
      data: `
        import 'webcomponents.js/webcomponents-lite'
        import SSwitchComponent from './dist/index'
      `
    }
  }
}

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _sNativeWebComponent = require('coffeekraken-sugar/js/core/sNativeWebComponent');

var _sNativeWebComponent2 = _interopRequireDefault(_sNativeWebComponent);

var _insertAfter = require('coffeekraken-sugar/js/dom/insertAfter');

var _insertAfter2 = _interopRequireDefault(_insertAfter);

var _uniqid = require('coffeekraken-sugar/js/utils/uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_native) {
  _inherits(Component, _native);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'componentMount',


    /**
     * Mount component
     * @definition    SWebComponent.componentMount
     * @protected
     */
    value: function componentMount() {
      _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'componentMount', this).call(this);

      // make sure the checkbox has an id
      var id = this.id || (0, _uniqid2.default)();
      this.id = id;

      // append the s-switch label after
      var label = document.createElement('label');
      label.setAttribute('class', this.getAttribute('class'));
      label.classList.add(this.componentNameDash);
      label.setAttribute('for', id);
      (0, _insertAfter2.default)(label, this);
    }

    /**
     * Component unmount
     * @definition    SWebComponent.componentUnmount
     * @protected
     */

  }, {
    key: 'componentUnmount',
    value: function componentUnmount() {
      _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'componentUnmount', this).call(this);
    }

    /**
     * Component will receive prop
     * @definition    SWebComponent.componentWillReceiveProp
     * @protected
     */

  }, {
    key: 'componentWillReceiveProp',
    value: function componentWillReceiveProp(name, newVal, oldVal) {
      switch (name) {}
    }

    /**
     * Render the component
     * Here goes the code that reflect the this.props state on the actual html element
     * @definition    SWebComponent.render
     * @protected
     */

  }, {
    key: 'render',
    value: function render() {
      _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'render', this).call(this);
    }
  }], [{
    key: 'defaultCss',


    /**
     * Css
     * @protected
     */
    value: function defaultCss(componentName, componentNameDash) {
      return '\n      [is="' + componentNameDash + '"] {\n        position: absolute;\n        top: 0; left: -150vw;\n        opacity: 0;\n      }\n      .' + componentNameDash + ' {\n        display: inline-block;\n      }\n    ';
    }
  }, {
    key: 'defaultProps',

    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */
    get: function get() {
      return {};
    }
  }]);

  return Component;
}((0, _sNativeWebComponent2.default)(window.HTMLInputElement));

exports.default = Component;
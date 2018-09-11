import __native from 'coffeekraken-sugar/js/core/sNativeWebComponent'
import __insertAfter from 'coffeekraken-sugar/js/dom/insertAfter'
import __uniqid from 'coffeekraken-sugar/js/utils/uniqid'

export default class Component extends __native(window.HTMLInputElement) {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps () {
    return {
    }
  }

  /**
   * Css
   * @protected
   */
  static defaultCss (componentName, componentNameDash) {
    return `
      [is="${componentNameDash}"] {
        position: absolute;
        top: 0; left: -150vw;
        opacity: 0;
      }
      .${componentNameDash} {
        display: inline-block;
      }
    `
  }

  /**
   * Mount component
   * @definition    SWebComponent.componentMount
   * @protected
   */
  componentMount () {
    super.componentMount()

    // make sure the checkbox has an id
    const id = this.id || __uniqid()
    this.id = id

    // append the s-switch label after
    const label = document.createElement('label')
    label.setAttribute('class', this.getAttribute('class'))
    label.classList.add(this.componentNameDash)
    label.setAttribute('for', id)
    __insertAfter(label, this)
  }

  /**
   * Component unmount
   * @definition    SWebComponent.componentUnmount
   * @protected
   */
  componentUnmount () {
    super.componentUnmount()
  }

  /**
   * Component will receive prop
   * @definition    SWebComponent.componentWillReceiveProp
   * @protected
   */
  componentWillReceiveProp (name, newVal, oldVal) {
    switch (name) {
    }
  }

  /**
   * Render the component
   * Here goes the code that reflect the this.props state on the actual html element
   * @definition    SWebComponent.render
   * @protected
   */
  render () {
    super.render()
  }
}

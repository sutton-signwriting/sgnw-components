import { r as registerInstance, h, a as getElement, H as Host } from './index-f39b07ed.js';

const navLink = (el, routerDirection, component, componentProps, routerAnimation) => {
  const nav = el.closest('ion-nav');
  if (nav) {
    if (routerDirection === 'forward') {
      if (component !== undefined) {
        return nav.push(component, componentProps, { skipIfBusy: true, animationBuilder: routerAnimation });
      }
    }
    else if (routerDirection === 'root') {
      if (component !== undefined) {
        return nav.setRoot(component, componentProps, { skipIfBusy: true, animationBuilder: routerAnimation });
      }
    }
    else if (routerDirection === 'back') {
      return nav.pop({ skipIfBusy: true, animationBuilder: routerAnimation });
    }
  }
  return Promise.resolve(false);
};

const NavLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The transition direction when navigating to another page.
     */
    this.routerDirection = 'forward';
    this.onClick = () => {
      return navLink(this.el, this.routerDirection, this.component, this.componentProps, this.routerAnimation);
    };
  }
  render() {
    return (h(Host, { onClick: this.onClick }));
  }
  get el() { return getElement(this); }
};

export { NavLink as ion_nav_link };

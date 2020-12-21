import { m as menuController } from './index-22c70d78.js';

// Given a menu, return whether or not the menu toggle should be visible
const updateVisibility = async (menu) => {
  const menuEl = await menuController.get(menu);
  return !!(menuEl && await menuEl.isActive());
};

export { updateVisibility as u };

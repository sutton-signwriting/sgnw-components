'use strict';

const index = require('./index-511d5182.js');

// Given a menu, return whether or not the menu toggle should be visible
const updateVisibility = async (menu) => {
  const menuEl = await index.menuController.get(menu);
  return !!(menuEl && await menuEl.isActive());
};

exports.updateVisibility = updateVisibility;

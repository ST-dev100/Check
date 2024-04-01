import { createSelector } from '@reduxjs/toolkit';

const selectUser = (state) => state.cart.cart;

export const selectCurrentUser = createSelector(
  selectUser,
  (user) => user
);
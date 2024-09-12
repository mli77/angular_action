import { Action, createAction, createReducer, on } from '@ngrx/store';

export const red = createAction('[Color] Red');
export const green = createAction('[Color] Green');

export const initialState: string = 'red';

const _colorReducer = createReducer(
  initialState,
  on(red, (state) => 'red'),
  on(green, (state) => 'green')
);

export function colorReducer(state: string = initialState, action: Action) {
  return _colorReducer(state, action);
}

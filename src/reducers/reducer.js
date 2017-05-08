import * as actionTypes from '../constants/actionTypes';
import getSelectedValueIndex from './lib/getSelectedValueIndex';
import addMultiSelectIndex from './lib/addMultiSelectIndex';
import removeMultiSelectIndex from './lib/removeMultiSelectIndex';
import addMultiSelectOption from './lib/addMultiSelectOption';
import removeMultiSelectOption from './lib/removeMultiSelectOption';
import getInitialOption from './lib/getInitialOption';

export const initialState = {

  // Constants
  isTouchDevice: false,
  isMultiSelect: false,

  // Universal
  name: undefined,
  options: [],
  isDragging: false,
  isOptionsPanelOpen: false,

  // Single select
  singleSelectInitialIndex: 0,
  singleSelectSelectedIndex: 0,
  singleSelectSelectedOption: {},

  // For determining highlighted item on Keyboard navigation
  potentialOptionSelectionIndex: 0,

  // Multi select
  multiSelectInitialSelectedIndexes: [0],
  multiSelectSelectedOptions: {
    altered: false,
    options: []
  },
  multiSelectSelectedIndexes: []
};

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case actionTypes.BOOTSTRAP_STATE: {
      const initialSelectedIndex = getSelectedValueIndex(action.value.options, action.value.selectedValue);
      return {
        ...state,

        // Constants
        isTouchDevice: action.value.isTouchDevice,
        isMultiSelect: action.value.multiselect || false,

        // Universal
        name: action.value.name,
        options: action.value.options,

        // Single select
        singleSelectInitialIndex: initialSelectedIndex,
        singleSelectSelectedIndex: initialSelectedIndex,
        singleSelectSelectedOption: {
          name: action.value.name,
          ...action.value.options[ initialSelectedIndex ]
        },

        // For determining highlighted item on Keyboard navigation
        potentialOptionSelectionIndex: initialSelectedIndex,

        // Multi select
        multiSelectInitialSelectedIndexes: [initialSelectedIndex],
        multiSelectSelectedIndexes: [initialSelectedIndex],
        multiSelectSelectedOptions: {
          altered: false,
          options: [{
            name: action.value.name,
            ...action.value.options[ initialSelectedIndex ]
          }]
        }
      };
    }

    case actionTypes.SET_IS_DRAGGING:
      return {
        ...state,
        isDragging: action.value
      };

    case actionTypes.SET_OPTIONS_PANEL_OPEN:
      return {
        ...state,
        isOptionsPanelOpen: true,
        potentialOptionSelectionIndex: state.singleSelectSelectedIndex,
        singleSelectSelectedOption: {
          altered: state.singleSelectSelectedIndex !== state.singleSelectInitialIndex,
          name: state.name,
          ...state.options[ state.singleSelectSelectedIndex ]
        }
      };

    case actionTypes.SET_OPTIONS_PANEL_CLOSED:
      return {
        ...state,
        isOptionsPanelOpen: false,
        singleSelectSelectedIndex: state.potentialOptionSelectionIndex,
        singleSelectSelectedOption: {
          name: state.name,
          altered: state.potentialOptionSelectionIndex !== state.singleSelectInitialIndex,
          ...state.options[state.potentialOptionSelectionIndex]
        }
      };

    case actionTypes.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION:
      return {
        ...state,
        isOptionsPanelOpen: false
      };

    case actionTypes.SET_NEXT_SELECTED_INDEX:
      return {
        ...state,
        potentialOptionSelectionIndex: action.value
      };

    case actionTypes.SET_SELECTED_INDEX:
      return {
        ...state,
        potentialOptionSelectionIndex: action.value,
        singleSelectSelectedIndex: action.value
      };

    case actionTypes.SET_MULTISELECT_OPTIONS: {

      const requestedOptionIndex = action.value;

      const isFirstOptionInListSelected = (
        state.multiSelectSelectedIndexes[0] === 0 &&
        state.multiSelectSelectedIndexes.length === 1
      );

      // If anything selected and first option was requested, deselect all, then select first option
      const shouldDeselectAllAndSelectFirstOption = (
        state.multiSelectSelectedIndexes.length > 0 &&
        !isFirstOptionInListSelected &&
        requestedOptionIndex === 0
      );

      // Deselect first option when any other value is requested
      const shouldDeselectFirstOptionAndSelectRequestedOption = (
        isFirstOptionInListSelected &&
        requestedOptionIndex !== 0
      );

      // If any thing selected and first option was requested, deselect all, and return first option
      if ( shouldDeselectAllAndSelectFirstOption ) {
        return {
          ...state,
          multiSelectSelectedIndexes: [0],
          multiSelectSelectedOptions: {
            altered: false,
            options: [{ name: state.name, ...state.options[0] }]
          },
          potentialOptionSelectionIndex: 0
        };
      }

      // Deselect first option when first option selected and another option is requested
      if ( shouldDeselectFirstOptionAndSelectRequestedOption ) {
        // reset multiSelect state
        state = {
          ...state,
          multiSelectSelectedIndexes: [],
          multiSelectSelectedOptions: {
            altered: false,
            options: []
          }
        };
      }

      // Find index of requested option or return -1
      const indexLocation = state.multiSelectSelectedIndexes.indexOf(requestedOptionIndex);

      // If requested item does not exist, add it. Else remove it
      let newState = {
        ...state,
        potentialOptionSelectionIndex: requestedOptionIndex,
        multiSelectSelectedIndexes: indexLocation === -1
          ? addMultiSelectIndex(state, requestedOptionIndex)
          : removeMultiSelectIndex(state, indexLocation),
        multiSelectSelectedOptions: indexLocation === -1
          ? addMultiSelectOption(state, requestedOptionIndex)
          : removeMultiSelectOption(state, indexLocation)
      };

      // Select first option if user has deselected all items
      if (newState.multiSelectSelectedOptions.options.length === 0) {
        newState = {
          ...state,
          ...getInitialOption(state)
        };
      }

      return newState;
    }
  }

}

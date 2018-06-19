require('../../core/js/index');

// All @matial imports

import { MDCRipple } from '@material/ripple/dist/mdc.ripple';
import { MDCChipSet } from '@material/chips/dist/mdc.chips';
import { MDCFormField } from '@material/form-field/dist/mdc.formField';
import { MDCCheckbox } from '@material/checkbox/dist/mdc.checkbox';
import { MDCTextField } from '@material/textfield/dist/mdc.textfield';

// import MDCDataTable from './_custom/dataTable';

// Element variables

const buttons = document.querySelectorAll('.mdc-button');
const chips = document.querySelectorAll('.mdc-chip-set');
const checkboxes = document.querySelectorAll('.mdc-checkbox');
const textfields = document.querySelectorAll('.mdc-text-field');

function init() {
  if (buttons) {
    handleMDCButton(buttons);
  }
  if (chips) {
    handleMDCChips(chips);
  }
  if (checkboxes) {
    handleMDCCheckboxes(checkboxes);
  }
  if (textfields) {
    handleMDCTextFields(textfields);
  }

  // new MDCDataTable();
}

// General MDC Button function
// Add all functions related to MDC Buttons

function handleMDCButton(buttonsEl) {
  handleRipple(buttonsEl);
}

// General MDC Chips function
// Add all functions related to MDC Chips

function handleMDCChips(chipsEl) {
  for (var i = 0; i < chipsEl.length; i++) {
    new MDCChipSet(chipsEl[i]);
  }
}

// General MDC Checkboxes function
// Add all functions related to MDC Checkboxes

function handleMDCCheckboxes(checkboxesEl) {
  [].forEach.call(checkboxesEl, function(checkbox) {
    const formField = checkbox.parentElement;
    if (!formField) {
      console.log('There\'s no checkbox field!');
    } else {
      const formFieldInstance = new MDCFormField(formField);
      const checkboxInstance = new MDCCheckbox(checkbox);
      formFieldInstance.input = checkboxInstance;
    }
  });
};

// General MDC Floating labels function

function handleMDCTextFields(textfieldsEl) {
  if (!textfieldsEl) {
    console.log('There are no elements that are fit for ripple effect');
  } else {
    for (var i = 0; i < textfieldsEl.length; i++) {
      new MDCTextField(textfieldsEl[i]);
    }
  }
};

// Helper functions (reusable function)

function handleRipple(elements) {
  if (!elements) {
    console.log('There are no elements that are fit for ripple effect');
  } else {
    for (var i = 0; i < elements.length; i++) {
      new MDCRipple(elements[i]);
    }
  }
};

init();

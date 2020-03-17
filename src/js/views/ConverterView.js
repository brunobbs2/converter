class ConverterView {

    constructor(inputForm, buttonSubmit, spanError, labelForm, labelResult) {
        this._inputForm = inputForm;
        this._buttonSubmit = buttonSubmit;
        this._spanError = spanError;
        this._labelForm = labelForm;
        this._labelResult = labelResult;
    }

    validateBinary(inputForm) {
        if(inputForm.length > 0) {
            if(/^[01]+$/.test(inputForm.value)) {
                toggleElements(false);
            } else {
                toggleElements(true);
            }
        } else {
            toggleElements(true);
        }
    }

    toggleElements(toggle) {
        if(toggle) {
            this._inputForm.style.borderBottomColor = 'red';
            this._buttonSubmit.style.opacity = 0.5;
            this._buttonSubmit.disabled = true;
            this._spanError.style.opacity = 1;
        } else {
            this._inputForm.style.borderBottomColor = '#787878';
            this._buttonSubmit.style.opacity = 1;
            this._buttonSubmit.disabled = false;
            this._spanError.style.opacity = 0;
        }
    }

    swapConverter(oldType, newType) {
        this._labelForm = newType;
        this._labelResult = oldType;
    }

    this._inputForm.addEventListener('input',validateBinary(this));
}
class ConverterController {

    constructor() {
        this._inputForm = document.querySelector('#form-input');
        this._inputResult = document.querySelector('#result-input');
        this._buttonSubmit = document.querySelector('#convert-button');
        this._spanError = document.querySelector('.error__alert');
        this._labelForm = document.querySelector('#form-label');
        this._labelResult = document.querySelector('#result-label');
        this._isBinary = true;

        this._converterView = new ConverterView(
            this._inputForm,
            this._labelResult,
            this._buttonSubmit, 
            this._spanError,
            this._isBinary
        );
    }

    
    submit() {
        event.preventDefault();
        let converter = new ConverterModel(this._inputForm.value, this._isBinary);

        if (converter.getIsBinary()) {
            this._inputResult.value = converter.getValue();
        } else {

        }
    }

    clear() {
        this._inputForm = "";
        this._inputResult = "";
    }

    swap() {
        if (this._isBinary) {
            this._converterView.swapConverter(false, "Decimal","Binary");
        } else {
            this._converterView.swapConverter(true, "Binary","Decimal");
        }

        this.clear();
    }
}
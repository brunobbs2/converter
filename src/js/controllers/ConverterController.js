class ConverterController {

    constructor() {
        this._inputForm = document.querySelector('#form-input');
        this._inputResult = document.querySelector('#result-input');
        this._buttonSubmit = document.querySelector('#convert-button');
        this._spanError = document.querySelector('.error__alert');
        this._labelForm = document.querySelector('#form-label');
        this._labelResult = document.querySelector('#result-label');
        this._swap = false;

        this._converterView = new ConverterView(
            this._inputForm,
            this._buttonSubmit,
            this._spanError,
            this._labelForm,
            this._labelResult,
        );
    }

    
    submit() {
        event.preventDefault();
        
        let converter = new ConverterModel(
            this._inputForm.value
        );

        if (!this._swap) {
            this._inputResult.value = parseInt(converter.getValue(), 2).toString();
        } else {
            
        }
    }

    clear() {
        this._inputForm = "";
        this._inputResult = "";
    }

    swap() {
        if (!this._swap) {
            this._converterView.swapConverter("Decimal","Binary");

            this.swap = true;
        } else {
            this._converterView.swapConverter("Binary","Decimal");

            this.swap = false;
        }

        this.clear();
    }
}
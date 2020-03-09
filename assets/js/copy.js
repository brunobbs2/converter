document.querySelector('#result-input').addEventListener('click', function() {
    this.select();
    this.setSelectionRange(0, 99999);

    document.execCommand('copy');

    let tooltip = document.getElementById("myTooltip");
    tooltip.classList.remove('hide');
});
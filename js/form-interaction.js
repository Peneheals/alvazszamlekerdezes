const urls = {
    'karkereso': 'https://www.ecdh.hu/kartorteneti-lekerdezes/megrendeles?vin=',
    'jarmuelemzes': 'https://jarmuelemzes.ecdh.hu/alvazszam-ellenorzes-rendben?vin=',
}

document.addEventListener("DOMContentLoaded", () => {
    function catchClick(event) {
        event.preventDefault();
        const form = event.target.parentNode;
        const inputs = form.querySelectorAll("input");
        inputs.forEach(function (input) {
            const name = input.getAttribute("name");
            if (input.value.length === 17) {
                window.location.href = urls[name] + input.value;
                return false;
            } else {
                input.style.background = "#fdf1f1";
            }
        });
    }

    document.querySelectorAll("form a").forEach((element) => {
        element.addEventListener("click", catchClick);
    });
});
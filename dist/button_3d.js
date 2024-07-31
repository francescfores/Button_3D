var raise = 10;
var loading = false;
var buttons = document.querySelectorAll('.btn'); // Selecciona todos los botones con la clase .btn

buttons.forEach(btn => {
    var style = btn.style;
    style.setProperty('--raise', raise + 'px');

    btn.addEventListener('mousemove', event => {
        if (raise > 0) {
            const width = btn.offsetWidth;
            const height = btn.offsetHeight;
            const rotationDegrees = Math.atan((height * (raise) + raise) / (width));
            const btnWidth = btn.offsetWidth;
            const mouseX = event.clientX - btn.getBoundingClientRect().left;

            style.setProperty('--rotate', rotationDegrees);
            style.setProperty('--rotate_invers', rotationDegrees * -1);

            var rotate_Y = -10 * ((mouseX - btnWidth / 2) / (btnWidth / 2));
            if (rotate_Y > 2) {
                btn.classList.remove('btn_shadow_default', 'btn_shadow_left');
                btn.classList.add('btn_shadow_right');
                btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_right');
                btn.querySelector('.btn_front').classList.add('btn_front_left');
            } else if (rotate_Y > -2 && rotate_Y < 2) {
                btn.classList.remove('btn_shadow_right', 'btn_shadow_left');
                btn.classList.add('btn_shadow_default');
                btn.querySelector('.btn_front').classList.remove('btn_front_right', 'btn_front_left');
                btn.querySelector('.btn_front').classList.add('btn_front_default');
            } else if (rotate_Y < -2) {
                btn.classList.remove('btn_shadow_right', 'btn_shadow_default');
                btn.classList.add('btn_shadow_left');
                btn.querySelector('.btn_front').classList.remove('btn_front_default', 'btn_front_left');
                btn.querySelector('.btn_front').classList.add('btn_front_right');
            }
        }
    });

    btn.addEventListener("click", function() {
        if (!loading) {
            loading = true;
            const childElement = btn.querySelector('.btn_loading_wrapp');
            childElement.classList.remove('opacity-0');
            childElement.classList.add('flex', 'btn_loading_2');
            btn.style.pointerEvents = "none";
            btn.querySelector('.btn_front').style.pointerEvents = "none";

            btn.querySelector('.txt_loaded').classList.add('hidden');
            btn.querySelector('.txt_loading').classList.remove('hidden');

            setTimeout(function() {
                btn.querySelector('.txt_loaded').classList.remove('hidden');
                btn.querySelector('.txt_loading').classList.add('hidden');
                setTimeout(function() {
                    childElement.classList.add('opacity-0');
                    childElement.classList.remove('flex', 'btn_loading_2');
                    btn.style.pointerEvents = "auto";
                    btn.querySelector('.btn_front').style.pointerEvents = "auto";
                    loading = false;
                }, 1000);
            }, 3000);
        }
    });
});

function obtenerValor() {
    var rangeInput = document.getElementById("button_range");
    var valor = rangeInput.value;
    buttons.forEach(btn => {
        var style = btn.style;
        style.setProperty('--raise', valor + 'px');
    });
    raise = valor;
    document.getElementById("valor_actual").textContent = "Valor actual: " + valor;
}

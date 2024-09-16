document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        selectable: true,
        dateClick: function(info) {
            var dateStr = info.dateStr;
            var turno = prompt(`Introduce tu turno para el día ${dateStr} (ej: 6:30-14:30)`);
            if (turno) {
                calendar.addEvent({
                    title: turno,
                    start: dateStr,
                    allDay: true,
                    backgroundColor: '#4CAF50'
                });
            }
        },
        eventClick: function(info) {
            var dateStr = info.event.start.toISOString().split('T')[0];
            if (confirm(`¿Desea eliminar o cambiar el turno del día ${dateStr}?`)) {
                info.event.remove();
            }
        },
    });
    calendar.render();
});

// Definir salarios base para los niveles FTC
const salariosBaseFTC = {
    1: 1292.12,
    2: 1531.63,
    3: 1576.21,
    4: 1607.74,
    5: 1639.26,
    6: 1704.83,
    7: 1773.02
};

// Función para calcular el salario base de un FTC
function calcularSalarioFTC() {
    const nivel = parseInt(document.getElementById('nivelFTC').value, 10);
    const salarioBaseFTC = salariosBaseFTC[nivel];
    document.getElementById('resultadoFTC').textContent = `Salario base FTC: ${salarioBaseFTC.toFixed(2)} euros`;
}

// Función para redireccionar a la página específica según el tipo de empleado
function redireccionar(tipo) {
    if (tipo === 'FTC') {
        window.location.href = 'ftc.html';
    } else if (tipo === 'FTP') {
        window.location.href = 'ftp.html';
    }
}

// Función para volver a la pantalla de inicio
function volverInicio() {
    window.location.href = 'index.html';
}

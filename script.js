function mostrarCalculadora(tipo) {
    const container = document.getElementById('calculadora-container');
    container.innerHTML = ''; // Limpiar el contenido anterior

    switch (tipo) {
        case 'dosis':
            container.innerHTML = `
                <h2>Calculadora de Dosis Ponderal</h2>
                <label for="medicamento">Selecciona el Medicamento:</label>
                <select id="medicamento">
                    <option value="midazolam">Midazolam (300 mg/100 ml)</option>
                    <option value="propofol">Propofol (200 mg/20 ml)</option>
                    <option value="dexmedetomidina">Dexmedetomidina (400 mcg/100 ml)</option>
                    <option value="fentanilo">Fentanilo (2000 mcg/100 ml)</option>
                    <option value="tramadol">Tramadol (300 mg/100 ml)</option>
                </select>
                <input type="number" id="peso" placeholder="Peso en kg" required>
                <input type="number" id="velocidadInfusion" placeholder="Velocidad de Infusión (ml/hr)" required>
                <button onclick="calcularDosis()">Calcular Dosis</button>
                <p id="resultadoDosis"></p>
            `;
            break;
        // Agrega más casos para cada calculadora (IMC, Balance Hídrico, etc.)
    }
}

function calcularDosis() {
    const peso = parseFloat(document.getElementById('peso').value);
    const velocidad = parseFloat(document.getElementById('velocidadInfusion').value);
    const medicamento = document.getElementById('medicamento').value;
    let dosis = 0;

    if (!peso || !velocidad) {
        alert('Por favor, ingresa valores válidos.');
        return;
    }

    switch (medicamento) {
        case 'midazolam':
            dosis = ((300 / 100) / peso) * velocidad;
            break;
        case 'propofol':
            dosis = ((200 / 20) / peso) * velocidad;
            break;
        case 'dexmedetomidina':
            dosis = ((400 / 100) / peso) * velocidad;
            break;
        case 'fentanilo':
            dosis = ((2000 / 100) / peso) * velocidad;
            break;
        case 'tramadol':
            dosis = ((300 / 100) / peso) * velocidad;
            break;
    }

    document.getElementById('resultadoDosis').innerText = `Dosis Ponderal: ${dosis.toFixed(2)} mg/kg/hr o mcg/kg/hr según el medicamento.`;
}

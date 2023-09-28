var alumnos = [];

        function agregarAlumno() {
            var cedula = document.getElementById("cedula").value;
            var nombre = document.getElementById("nombre").value;
            var matematicas = parseFloat(document.getElementById("matematicas").value);
            var fisica = parseFloat(document.getElementById("fisica").value);
            var programacion = parseFloat(document.getElementById("programacion").value);

            var alumno = {
                cedula: cedula,
                nombre: nombre,
                matematicas: matematicas,
                fisica: fisica,
                programacion: programacion
            };

            alumnos.push(alumno);

            // Limpiar los campos del formulario
            document.getElementById("cedula").value = "";
            document.getElementById("nombre").value = "";
            document.getElementById("matematicas").value = "";
            document.getElementById("fisica").value = "";
            document.getElementById("programacion").value = "";

            // Actualizar la tabla de alumnos
            actualizarTabla();

            // Calcular y mostrar los resultados
            calcularResultados();
        }

        function actualizarTabla() {
            var tabla = document.getElementById("tabla");
            tabla.innerHTML = "<tr><th>Cédula</th><th>Nombre</th><th>Matemáticas</th><th>Física</th><th>Programación</th></tr>";

            for (var i = 0; i < alumnos.length; i++) {
                var alumno = alumnos[i];
                var row = "<tr><td>" + alumno.cedula + "</td><td>" + alumno.nombre + "</td><td>" + alumno.matematicas + "</td><td>" + alumno.fisica + "</td><td>" + alumno.programacion + "</td></tr>";
                tabla.innerHTML += row;
            }
        }

        function calcularResultados() {
            // Calcular promedio de cada materia
            var promedioMatematicas = calcularPromedio("matematicas");
            var promedioFisica = calcularPromedio("fisica");
            var promedioProgramacion = calcularPromedio("programacion");

            // Calcular número de alumnos aprobados en cada materia
            var aprobadosMatematicas = contarAprobados("matematicas", 10);
            var aprobadosFisica = contarAprobados("fisica", 10);
            var aprobadosProgramacion = contarAprobados("programacion", 10);

            // Calcular número de alumnos aplazados en cada materia
            var aplazadosMatematicas = contarAplazados("matematicas", 10);
            var aplazadosFisica = contarAplazados("fisica", 10);
            var aplazadosProgramacion = contarAplazados("programacion", 10);

            // Calcular número de alumnos que aprobaron todas las materias
            var aprobadosTodas = contarAprobadosTodas(10);

            // Calcular número de alumnos que aprobaron una sola materia
            var aprobadosUna = contarAprobadosUna(10);

            // Calcular número de alumnos que aprobaron dos materias
            var aprobadosDos = contarAprobadosDos(10);

            // Calcular nota máxima en cada materia
            var maxMatematicas = calcularNotaMaxima("matematicas");
            var maxFisica = calcularNotaMaxima("fisica");
            var maxProgramacion = calcularNotaMaxima("programacion");

            // Mostrar resultados en la página
            document.getElementById("promedioMatematicas").textContent = promedioMatematicas.toFixed(2);
            document.getElementById("promedioFisica").textContent = promedioFisica.toFixed(2);
            document.getElementById("promedioProgramacion").textContent = promedioProgramacion.toFixed(2);
            document.getElementById("aprobadosMatematicas").textContent = aprobadosMatematicas;
            document.getElementById("aprobadosFisica").textContent = aprobadosFisica;
            document.getElementById("aprobadosProgramacion").textContent = aprobadosProgramacion;
            document.getElementById("aprobadosTodas").textContent = aprobadosTodas;
            document.getElementById("aprobadosUna").textContent = aprobadosUna;
            document.getElementById("aprobadosDos").textContent = aprobadosDos;
            document.getElementById("maxMatematicas").textContent = maxMatematicas;
            document.getElementById("maxFisica").textContent = maxFisica;
            document.getElementById("maxProgramacion").textContent = maxProgramacion;
        }

        function calcularPromedio(materia) {
            var suma = 0;
            for (var i = 0; i < alumnos.length; i++) {
                suma += alumnos[i][materia];
            }
            return suma / alumnos.length;
        }

        function contarAprobados(materia, notaAprobacion) {
            var count = 0;
            for (var i = 0; i < alumnos.length; i++) {
                if (alumnos[i][materia] >= notaAprobacion) {
                    count++;
                }
            }
            return count;
        }

        function contarAplazados(materia, notaAprobacion) {
            var count = 0;
            for (var i = 0; i < alumnos.length; i++) {
                if (alumnos[i][materia] < notaAprobacion) {
                    count++;
                }
            }
            return count;
        }

        function contarAprobadosTodas(notaAprobacion) {
            var count = 0;
            for (var i = 0; i < alumnos.length; i++) {
                if (alumnos[i]["matematicas"] >= notaAprobacion && alumnos[i]["fisica"] >= notaAprobacion && alumnos[i]["programacion"] >= notaAprobacion) {
                    count++;
                }
            }
            return count;
        }

        function contarAprobadosUna(notaAprobacion) {
            var count = 0;
            for (var i = 0; i < alumnos.length; i++) {
                var aprobadas = 0;
                if (alumnos[i]["matematicas"] >= notaAprobacion) aprobadas++;
                if (alumnos[i]["fisica"] >= notaAprobacion) aprobadas++;
                if (alumnos[i]["programacion"] >= notaAprobacion) aprobadas++;
                if (aprobadas === 1) count++;
            }
            return count;
        }

        function contarAprobadosDos(notaAprobacion) {
            var count = 0;
            for (var i = 0; i < alumnos.length; i++) {
                var aprobadas = 0;
                if (alumnos[i]["matematicas"] >= notaAprobacion) aprobadas++;
                if (alumnos[i]["fisica"] >= notaAprobacion) aprobadas++;
                if (alumnos[i]["programacion"] >= notaAprobacion) aprobadas++;
                if (aprobadas === 2) count++;
            }
            return count;
        }

        function calcularNotaMaxima(materia) {
            var max = 0;
            for (var i = 0; i < alumnos.length; i++) {
                if (alumnos[i][materia] > max) {
                    max = alumnos[i][materia];
                }
            }
            return max;
        }
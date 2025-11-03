//Laboratorio Nro 13 - Ejercicio 12
//Autor: Jhonatan

function gestionar(){
    function gestionarEmpleados(empleados) {
        const mapaAreas = new Map();
        
        for (let empleado of empleados) {
            if (!mapaAreas.has(empleado.area)) {
                mapaAreas.set(empleado.area, {
                    empleados: [],
                    salarios: []
                });
            }

            const areaData = mapaAreas.get(empleado.area);
            areaData.empleados.push(empleado.nombre);
            areaData.salarios.push(empleado.salario);
        }

        const resultado = {};

        for (let [area, data] of mapaAreas) {
            const promedio = data.salarios.reduce((sum, salario) => sum + salario, 0) / data.salarios.length;

            resultado[area] = {
                empleados: data.empleados,
                promedio: promedio
            };
        }

        return resultado;
    }   

    const listaEmpleados = [
        { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
        { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
        { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
        { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
    ];

    console.log(gestionarEmpleados(listaEmpleados));
}
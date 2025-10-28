//Laboratorio Nro 12 - Ejercicio10
//Autor: Jhonatan
//Tiempo: 3 min

//componer transformaciones
const aMayusculas = (string) => {return string.toUpperCase()};
const añadirAdmiracion = (string) => {return string + "!"};

const conmponerTransformaciones = (composicion1, composicion2)=>{
    return (string) => {return composicion2(composicion1(string))};
};
const transformacion = conmponerTransformaciones(aMayusculas, añadirAdmiracion);
alert(transformacion("hola"))
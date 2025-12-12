salario_base = int(input("Ingrese su salario base: "))
goras_extras = int(input("Ingrese la cantidad de horas extras trabajadas: "))
valor_hora_extra = int(input("Ingrese el valor por hora extra: "))
bono = int(input("Ingrese el bono adicional: "))
afp = float(input("Ingrese el porcentaje de descuento por AFP "))
salud = float(input("Ingrese el porcentaje de descuento por Salud "))
# Cálculo de ingresos
salario_neto = salario_base + (goras_extras * valor_hora_extra) + bono - (salario_base* (afp/100)) - (salario_base * (salud/100)) - (salario_base * (afp/100))
print("El salario neto es: ", salario_neto)

def ejercicio1():
    pass
ejercicio1()
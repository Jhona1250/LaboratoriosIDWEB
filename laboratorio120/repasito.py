#tipos de datos:
entero = 10
flotante = 10.5
cadena = "Hola Mundo"
booleano = True
print(type(entero))
print(type(flotante))
print(type(cadena))
print(type(booleano))
#tipos de estructurados:
lista = [1, 2, 3, 4, 5]
tupla = (1, 2, 3, 4, 5)
conjunto = {1, 2, 3, 4, 5}
diccionario = {"clave1": "valor1", "clave2": "valor2"}
print(type(lista))
print(type(tupla))
print(type(conjunto))
print(type(diccionario))
tipo = type(None)
print(type(tipo))
#conversion de tipos:
num_entero = 10
num_flotante = float(num_entero)
print("Entero a flotante:", num_flotante)
num_flotante2 = 10.5
num_entero2 = int(num_flotante2)
print("Flotante a entero:", num_entero2)
cadena_numero = "100"
num_entero3 = int(cadena_numero)
print("Cadena a entero:", num_entero3)
num_entero4 = 200
cadena_numero2 = str(num_entero4)
print("Entero a cadena:", cadena_numero2)
#operaciones basicas:
a = 15
b = 4
suma = a + b
resta = a - b
multiplicacion = a * b
division = a / b
division_entera = a // b
modulo = a % b
potencia = a ** b
print("Suma:", suma)
print("Resta:", resta)
print("Multiplicación:", multiplicacion)
print("División:", division)
print("División entera:", division_entera)
print("Módulo:", modulo)
print("Potencia:", potencia)
#entrada de datos:
print("que buen repaso de python")
print("vamos a ingresar algunos datos")
nombre = input("Ingrese su nombre: ")
edad = int(input("Ingrese su edad: "))
estatura = float(input("Ingrese su estatura en metros: "))
print("Hola", nombre, ", tienes", edad, "años y mides", estatura, "metros.")
#estructura de control:
edad = int(input("Ingrese su edad: "))
if edad < 18:
    print("Eres menor de edad.")
else:
    print("Eres mayor de edad.")
for i in range(5):
    print("Número:", i)
contador = 0
while contador < 5:
    print("Contador:", contador)
    contador += 1
#funciones:
def saludar(nombre):
    print("Hola", nombre, "! Bienvenido a Python.")
saludar("Carlos")
def sumar(a, b):
    return a + b    
resultado = sumar(5, 10)
print("La suma es:", resultado)
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
num = 5
print("El factorial de", num, "es", factorial(num))
#manejo de errores:
try:
    numero = int(input("Ingrese un número entero: "))
    resultado = 100 / numero
    print("El resultado es:", resultado)
except ValueError:
    print("Error: Debe ingresar un número entero válido.")
except ZeroDivisionError:
    print("Error: No se puede dividir por cero.")
except Exception as e:
    print("Ocurrió un error inesperado:", e)

#sentencia with:

with open("archivo_ejemplo.txt", "w") as archivo:
    archivo.write("Este es un ejemplo de uso de la sentencia with en Python.\n")
    archivo.write("Se asegura de que el archivo se cierre correctamente después de su uso.\n")
print("Archivo creado y datos escritos correctamente.")

# manejo de módulos:
import math
numero = 16
raiz_cuadrada = math.sqrt(numero)
print("La raíz cuadrada de", numero, "es", raiz_cuadrada)
import random
numero_aleatorio = random.randint(1, 100)  
print("Número aleatorio entre 1 y 100:", numero_aleatorio)
#clases y objetos:
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    def saludar(self):
        print("Hola, mi nombre es", self.nombre, "y tengo", self.edad, "años.")
persona1 = Persona("Ana", 30)
persona1.saludar() 
class Coche:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
    def mostrar_info(self):
        print("Coche:", self.marca, self.modelo)
coche1 = Coche("Toyota", "Corolla")
coche1.mostrar_info()
# manejo de listas y diccionarios:
frutas = ["manzana", "banana", "cereza"]
frutas.append("naranja")
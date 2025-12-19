import requests
import os

#instruccion GET
respuesta = requests.get("https://legacy.redhat.com/pub/redhat/linux/7.1/de/doc/RH-DOCS/es/rhl-gsg-es-7.1/ch-doslinux.html")
print(type(respuesta))
print(respuesta.status_code)
if respuesta.status_code == 200:
    print("La solicitud fue exitosa")


def funcion1():
    import math
    math.sqrt(16)
    def funcion2():
        nonlocal otravariable
        otravariable = 42
        import random
        random.randint(1, 10)
    funcion2()
    return otravariable
valor1 = funcion1()
print(" lllllll " + str(valor1) + " lllllll ")


datos = {'usuario': "pepe", 'edad': 30}
respuesta2 = requests.post("https://httpbin.org/post", data=datos)

print(respuesta2.status_code)


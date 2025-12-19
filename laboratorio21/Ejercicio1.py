import math
class Figura:
    def calcularPerimetro(self):
        pass
    def calcularArea(self):
        pass
class Triangulo(Figura):
    def __init__(self, lado):
        self.tipo = "equilatero"
        self.lado = lado
    def calcularArea(self):
        return self.lado * math.sin(60) * self.lado / 2
    def calcularPerimetro(self):
        return self.lado * 3
class Rectangulo(Figura):
    def __init__(self, ladoMayor, ladoMenor):
        self.tipo = "rectangulo"
        self.ladoMayor = ladoMayor
        self.ladoMenor = ladoMenor
    def calcularArea(self):
        return self.ladoMayor * self.ladoMenor
    def calcularPerimetro(self):
        return 2 * self.ladoMayor + 2 * self.ladoMenor
class Circulo(Figura):
    def __init__(self, radio):
        self.tipo = "circulo"
        self.radio = radio
    def calcularArea(self):
        return self.radio ** 2 * math.pi
    def calcularPerimetro(self):
        return 2 * math.pi * self.radio
        
figuras = [Triangulo(4), Circulo(2), Rectangulo(10,1)]

for a in figuras:
    print("area del " + a.tipo + " es: " + a.calcularArea().__str__())
    print("perimetro del " + a.tipo + " es: " + a.calcularPerimetro().__str__())


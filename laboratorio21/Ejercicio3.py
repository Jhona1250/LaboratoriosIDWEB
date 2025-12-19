class OperadorInvalidoError(Exception):
    def __init__(self, operador):
        self.operador = operador
        super().__init__(f"Operador '{operador}' no válido. Use: + - * /")

class Calculadora:
    def __init__(self):
        pass
    
    def mostrarMenu(self):
        print("---CALCULADORA---")
        print("Ingrese operación en formato: numero1 operador numero2")
        print("Ejemplo: 10 / 2")
        print("Operadores válidos: + - * /")
        print("Escriba 'salir' para terminar")
    
    def iniciarInteraccion(self):
        salir = False
        while not salir:
            self.mostrarMenu()
            entrada = input("> ")
            
            if entrada.lower() == 'salir':
                salir = True
                print("¡Hasta luego!")
                continue
            
            if not entrada.strip():
                print("Error: Entrada vacía\n")
                continue
            
            try:
                resultado = self.realizarOperacion(entrada)
                print(f"Resultado: {resultado}\n")
            except ValueError as e:
                print(f"Error: {e}\n")
            except ZeroDivisionError:
                print("Error: No se puede dividir entre cero\n")
            except OperadorInvalidoError as e:
                print(f"Error: {e}\n")
            except Exception as e:
                print(f"Error inesperado: {e}\n")
    
    def realizarOperacion(self, operacion_string):
        componentes = operacion_string.split()
        
        if len(componentes) != 3:
            raise ValueError("Formato incorrecto. Use: numero operador numero")
        
        try:
            numero1 = float(componentes[0])
            operador = componentes[1]
            numero2 = float(componentes[2])
        except ValueError:
            raise ValueError("Los números deben ser valores numéricos válidos")
        
        operadores_validos = ['+', '-', '*', '/']
        if operador not in operadores_validos:
            raise OperadorInvalidoError(operador)
        
        if operador == '+':
            return numero1 + numero2
        elif operador == '-':
            return numero1 - numero2
        elif operador == '*':
            return numero1 * numero2
        elif operador == '/':
            if numero2 == 0:
                raise ZeroDivisionError("División entre cero")
            return numero1 / numero2

calculadora = Calculadora()
calculadora.iniciarInteraccion()
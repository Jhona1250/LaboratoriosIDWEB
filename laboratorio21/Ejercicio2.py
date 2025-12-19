class Biblioteca:
    def __init__(self):
        self.libros = []
    def listarLibros(self):
        print("---Lista de libros---")
        for libro in self.libros:
            libro.mostrarData()
    def adicionarLibro(self, libro):
        verificacion = self.buscarLibro(libro.titulo)
        if not verificacion:
            self.libros.append(libro)
    def buscarLibro(self, nombreLibro):
        for libro in self.libros:
            if libro.titulo == nombreLibro:
                return [libro]
        return None
    def buscarPorAutor(self, autor):
        for libro in self.libros:
            if libro.autor.lower()  == autor.lower():
                libro.mostrarData()
    def prestarLibro(self, nombreLibro):
        libro = self.buscarLibro(nombreLibro)
        if not libro:
            print("libro no encontrado")
        else:
            if libro[0].disponible == False:
                print("no se puede prestar, esta ocupado")
            else:
                libro[0].setDisponible(False)

    def devolverLibro(self, nombreLibro):
        libro = self.buscarLibro(nombreLibro)
        if not libro:
            print("libro no encontrado")
        else:
            if libro[0].disponible == True:
                print("no se devolver un libro ya disponible")
            else:
                libro[0].setDisponible(True)
    def mostrarMenu(self):
        print("---MENU BIBLIOTECA---")
        print("1. listar todos los libros")
        print("2. listar por autor")
        print("3. prestar libro")
        print("4. devolver libro")
        print("5. salir")
    def iniciarInteraccion(self):
        salir = False
        while not salir:
            self.mostrarMenu()
            opcion = input()
            if opcion == "1":
                self.listarLibros()
            elif opcion == "2":
                nombreAutor = input("Ingrese el nombre del autor: ")
                self.buscarPorAutor(nombreAutor)
            elif opcion == "3":
                nombreLibro = input("Ingrese el nombre del libro: ")
                self.prestarLibro(nombreLibro)
            elif opcion == "4":
                nombreLibro = input("Ingrese el nombre del libro: ")
                self.prestarLibro(nombreLibro)
            elif opcion == "5":
                salir = True
            else:
                print("opcion no disponible")


class Libro:
    def __init__(self, titulo, año, disponible, autor):
        self.titulo = titulo
        self.año = año
        self.disponible = disponible
        self.autor = autor
    def setDisponible(self, valor):
        self.disponible = valor
    def mostrarData(self):
            print("------------------")
            print("Nombre: " + self.titulo)
            print("Año: " + str(self.año))
            print("Disponible: " + str(self.disponible))
            print("Autor: " + self.autor)

class LibroDigital(Libro):
    def __init__(self, titulo, año, disponible, autor, formato):
        super().__init__(titulo, año, True, autor)
        self.formato = formato
    def setDisponible(self, valor):
        pass
    def mostrarData(self):
            print("------------------")
            print("Nombre: " + self.titulo)
            print("Año: " + str(self.año))
            print("Disponible: " + str(self.disponible))
            print("Autor: " + self.autor)
            print("Formato: " + self.formato)
bilblioteca = Biblioteca()
libroFisico1 = Libro("libro1", 2025, True, "autor1")
libroFisico2 = Libro("libro2", 2025, True, "autor2")
libroFisico3 = Libro("libro3", 2025, True, "autor3")
libroDig = LibroDigital("libro4", 2025, True, "autor3", "EPUB")
libroDig = LibroDigital("libro5", 2025, True, "autor1", "PDF")

bilblioteca.adicionarLibro(libroFisico1)
bilblioteca.adicionarLibro(libroFisico2)
bilblioteca.adicionarLibro(libroFisico3)
bilblioteca.adicionarLibro(libroDig)
bilblioteca.adicionarLibro(libroDig)

bilblioteca.iniciarInteraccion()
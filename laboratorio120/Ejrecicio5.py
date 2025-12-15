def ejercicio7():
    estudiantes = []
    
    def mostrar_menu():
        print("\n=== REGISTRO DE ESTUDIANTES ===")
        print("1. Agregar estudiante")
        print("2. Mostrar todos los estudiantes")
        print("3. Mostrar estudiante con mejor promedio")
        print("4. Buscar por nombre")
        print("5. Eliminar por nombre")
        print("6. Salir")
    
    def agregar_estudiante():
        print("\n--- Agregar Estudiante ---")
        nombre = input("Nombre: ")
        edad = int(input("Edad: "))
        promedio = float(input("Promedio: "))
        
        estudiante = {
            'nombre': nombre,
            'edad': edad,
            'promedio': promedio
        }
        
        estudiantes.append(estudiante)
        print(f"✓ Estudiante '{nombre}' agregado exitosamente.")
    
    def mostrar_estudiantes():
        if not estudiantes:
            print("No hay estudiantes registrados.")
            return
        
        print("\n--- Lista de Estudiantes ---")
        print(f"{'No.':<4} {'Nombre':<20} {'Edad':<6} {'Promedio':<8}")
        print("-" * 40)
        
        for i, est in enumerate(estudiantes, 1):
            print(f"{i:<4} {est['nombre']:<20} {est['edad']:<6} {est['promedio']:<8.2f}")
    
    def mostrar_mejor_promedio():
        if not estudiantes:
            print("No hay estudiantes registrados.")
            return
        
        mejor = max(estudiantes, key=lambda x: x['promedio'])
        print("\n--- Mejor Promedio ---")
        print(f"Nombre: {mejor['nombre']}")
        print(f"Edad: {mejor['edad']}")
        print(f"Promedio: {mejor['promedio']:.2f}")
    
    def buscar_por_nombre():
        nombre = input("\nIngrese nombre a buscar: ").lower()
        
        encontrados = [est for est in estudiantes if nombre in est['nombre'].lower()]
        
        if not encontrados:
            print(f"No se encontraron estudiantes con '{nombre}'.")
            return
        
        print(f"\n--- Resultados de búsqueda ({len(encontrados)}) ---")
        for est in encontrados:
            print(f"Nombre: {est['nombre']}, Edad: {est['edad']}, Promedio: {est['promedio']:.2f}")
    
    def eliminar_por_nombre():
        nombre = input("\nIngrese nombre a eliminar: ").lower()

        indices = [i for i, est in enumerate(estudiantes) if nombre in est['nombre'].lower()]
        
        if not indices:
            print(f"No se encontraron estudiantes con '{nombre}'.")
            return
        
        if len(indices) == 1:
            eliminado = estudiantes.pop(indices[0])
            print(f"✓ Estudiante '{eliminado['nombre']}' eliminado.")
        else:
            print("\n--- Estudiantes encontrados ---")
            for idx in indices:
                est = estudiantes[idx]
                print(f"{idx+1}. {est['nombre']} - Edad: {est['edad']}, Promedio: {est['promedio']:.2f}")
            
            try:
                opcion = int(input(f"\nSeleccione número del estudiante a eliminar (1-{len(indices)}): ")) - 1
                if 0 <= opcion < len(indices):
                    eliminado = estudiantes.pop(indices[opcion])
                    print(f"✓ Estudiante '{eliminado['nombre']}' eliminado.")
                else:
                    print("Opción inválida.")
            except ValueError:
                print("Entrada inválida.")
    
    while True:
        mostrar_menu()
        
        try:
            opcion = int(input("\nSeleccione una opción (1-6): "))
            
            if opcion == 1:
                agregar_estudiante()
            elif opcion == 2:
                mostrar_estudiantes()
            elif opcion == 3:
                mostrar_mejor_promedio()
            elif opcion == 4:
                buscar_por_nombre()
            elif opcion == 5:
                eliminar_por_nombre()
            elif opcion == 6:
                print("\n¡Hasta luego!")
                break
            else:
                print("Opción inválida. Intente de nuevo.")
                
        except ValueError:
            print("Error: Ingrese un número válido.")
        except Exception as e:
            print(f"Error inesperado: {e}")
    
    return estudiantes
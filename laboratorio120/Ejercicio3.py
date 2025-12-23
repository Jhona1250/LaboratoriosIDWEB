def ejercicio5():
    def generar_matriz_espiral(n):
        if n < 3:
            return 
        matriz = [[0] * n for _ in range(n)]
        
        top, bottom = 0, n - 1
        left, right = 0, n - 1
        num = 1
        
        while top <= bottom and left <= right:
            for i in range(left, right + 1):
                matriz[top][i] = num
                num += 1
            top += 1
            
            for i in range(top, bottom + 1):
                matriz[i][right] = num
                num += 1
            right -= 1
            
            if top <= bottom:
                for i in range(right, left - 1, -1):
                    matriz[bottom][i] = num
                    num += 1
                bottom -= 1
            
            if left <= right:
                for i in range(bottom, top - 1, -1):
                    matriz[i][left] = num
                    num += 1
                left += 1
        
        return matriz
    
    def mostrar_matriz(matriz):
        n = len(matriz)
        max_digits = len(str(n * n))
        
        for fila in matriz:
            for num in fila:
                print(f"{num:>{max_digits}}", end=" ")
            print()
        
    try:
        n = int(input("Ingrese N (≥ 3): "))
        if n < 3:
            print("Error: N debe ser mayor o igual a 3")
            return None
        
        matriz = generar_matriz_espiral(n)
        
        print(f"\nMatriz espiral {n}x{len(matriz)}:")
        mostrar_matriz(matriz)
        
        return matriz
        
    except ValueError as e:
        print(f"Error: {e}")
        return None
ejercicio5()
def copiar_archivo_texto(origen, destino):
    try:
        with open(origen, 'r', encoding='utf-8') as archivo_origen:
            contenido = archivo_origen.read()
        
        with open(destino, 'w', encoding='utf-8') as archivo_destino:
            archivo_destino.write(contenido)
        
        print(f"Archivo copiado exitosamente: {origen} → {destino}")
        return True
    
    except Exception as e:
        print(f"Error inesperado: {e}")
        return False
    

def copiar_archivo_binario(origen, destino, buffer_size=1024):
    """
    Copia el contenido de un archivo binario a otro
    buffer_size: tamaño del búfer en bytes (ajustable para mejor rendimiento)
    """
    try:
        with open(origen, 'rb') as archivo_origen:
            with open(destino, 'wb') as archivo_destino:
                while True:
                    buffer = archivo_origen.read(buffer_size)
                    if not buffer:
                        break
                    archivo_destino.write(buffer)
        
        print(f"Archivo binario copiado exitosamente: {origen} → {destino}")
        print(f"Tamaño del búfer usado: {buffer_size} bytes")
        return True
    

    except Exception as e:
        print(f"Error inesperado: {e}")
        return False

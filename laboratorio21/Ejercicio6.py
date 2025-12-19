import asyncio
import random
import time
import threading
from datetime import datetime


def consulta_db_sincrona(id_consulta):
    tiempo_respuesta = random.randint(1, 5)
    time.sleep(tiempo_respuesta)
    return f"Consulta {id_consulta}: Completada en {tiempo_respuesta} segundos"


async def consulta_db_asincrona(id_consulta):
    tiempo_respuesta = random.randint(1, 5)
    await asyncio.sleep(tiempo_respuesta)
    return f"Consulta {id_consulta}: Completada en {tiempo_respuesta} segundos"


def consulta_db_proceso(id_consulta, resultado):
    tiempo_respuesta = random.randint(1, 5)
    time.sleep(tiempo_respuesta)
    resultado.put(f"Consulta {id_consulta}: Completada en {tiempo_respuesta} segundos")


def ejecutar_con_hilos():
    print("\n" + "="*50)
    print("EJECUTANDO CON HILOS")
    print("="*50)
    
    inicio = time.time()
    resultados = []
    
    def worker(id_consulta):
        resultado = consulta_db_sincrona(id_consulta)
        resultados.append(resultado)
        print(f"[{datetime.now().strftime('%H:%M:%S')}] {resultado}")
    
    hilos = []
    for i in range(1, 4):
        hilo = threading.Thread(target=worker, args=(i,))
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    
    tiempo_total = time.time() - inicio
    print(f"\nTiempo total con hilos: {tiempo_total:.2f} segundos")
    return tiempo_total


def ejecutar_con_asincrono():
    print("\n" + "="*50)
    print("EJECUTANDO CON ASYNCIO (TAREAS ASÍNCRONAS)")
    print("="*50)
    
    async def main():
        inicio = time.time()
        
        tareas = [consulta_db_asincrona(i) for i in range(1, 4)]
        
        resultados = await asyncio.gather(*tareas)
        
        for resultado in resultados:
            print(f"[{datetime.now().strftime('%H:%M:%S')}] {resultado}")
        
        tiempo_total = time.time() - inicio
        print(f"\nTiempo total con asyncio: {tiempo_total:.2f} segundos")
        return tiempo_total
    
    return asyncio.run(main())

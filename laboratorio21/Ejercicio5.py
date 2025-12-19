import json
equipos_futbol = [
    {
        "Nombre": "Real Madrid",
        "país": "España",
        "nivelAtaque": 92,
        "nivelDefensa": 88
    },
    {
        "Nombre": "Bayern Munich",
        "país": "Alemania",
        "nivelAtaque": 90,
        "nivelDefensa": 89
    },
    {
        "Nombre": "Barcelona",
        "país": "España",
        "nivelAtaque": 91,
        "nivelDefensa": 86
    },
    {
        "Nombre": "Manchester City",
        "país": "Inglaterra",
        "nivelAtaque": 93,
        "nivelDefensa": 87
    },
    {
        "Nombre": "River Plate",
        "país": "Argentina",
        "nivelAtaque": 85,
        "nivelDefensa": 83
    }
]

json_formateado = json.dumps(equipos_futbol, indent=4, ensure_ascii=False)

print("Lista de equipos de fútbol en formato JSON:")
print(json_formateado)
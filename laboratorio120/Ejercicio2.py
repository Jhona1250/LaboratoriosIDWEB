def ejercicio4():
    def calcular_impuesto_progresivo():
        ingreso_mensual = float(input("Ingrese ingreso mensual: "))
        ingreso_anual = ingreso_mensual * 12
        
        tramos = [
            (0, 20000, 0.00),
            (20000, 50000, 0.10),
            (50000, 100000, 0.20),
            (100000, float('inf'), 0.30)
        ]
        
        impuesto_total = 0
        ingreso_restante = ingreso_anual
        impuestos_por_tramo = []
        
        print(f"\nIngreso anual: ${ingreso_anual:,.2f}")
        print("\nCálculo por tramos:")
        
        for i, (inicio, fin, tasa) in enumerate(tramos):
            if ingreso_restante <= 0:
                break
                
            if ingreso_anual > inicio:
                base_tramo = min(fin, ingreso_anual) - max(inicio, 0)
                base_tramo = max(0, base_tramo)
            else:
                base_tramo = 0
            
            if base_tramo > 0:
                impuesto_tramo = base_tramo * tasa
                impuesto_total += impuesto_tramo
                impuestos_por_tramo.append((f"${inicio:,.0f} - ${fin:,.0f}" if fin != float('inf') else f"${inicio:,.0f} +", 
                                          tasa*100, base_tramo, impuesto_tramo))
        
        for tramo, tasa, base, impuesto in impuestos_por_tramo:
            print(f"Tramo {tramo} ({tasa:.0f}%): Base=${base:,.2f} → Impuesto=${impuesto:,.2f}")
        
        if ingreso_anual > 0:
            tasa_efectiva = (impuesto_total / ingreso_anual) * 100
        else:
            tasa_efectiva = 0
        
        print(f"Total impuestos anuales: ${impuesto_total:,.2f}")
        print(f"Tasa efectiva real: {tasa_efectiva:.2f}%")
        
        return {
            'ingreso_anual': ingreso_anual,
            'impuesto_total': impuesto_total,
            'tasa_efectiva': tasa_efectiva
        }
    
    return calcular_impuesto_progresivo()
ejercicio4()
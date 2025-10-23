# 📋 Trabajo Práctico Grupal - Gestión de la Calidad de Software

**Tema:** Implementación de Estrategia Canary Release en Kubernetes 🏗️

---

## 🎯 Objetivo General

Implementar y comprender en la práctica la estrategia de despliegue **Canary Release** 🐦 utilizando Kubernetes local con **Minikube**.  
El propósito es familiarizarse con las técnicas de **liberación progresiva** de características, permitiendo realizar despliegues de nuevas versiones de software de manera controlada y minimizando el impacto en los usuarios finales.

---

## ✅ Criterios de Aceptación (Mínimos Obligatorios)

### 1. **Infraestructura Kubernetes** ☸️
- [ ] Desplegar un cluster local funcional usando **Minikube**  
- [ ] Configurar correctamente el **Ingress Controller** (Nginx)

### 2. **Despliegue de Aplicaciones** 🚀
- [ ] Crear y desplegar **dos versiones distintas** de una misma aplicación (**V1** y **V2**)  
- [ ] Asegurar **2 pods ejecutándose para V1** y **2 pods para V2**

### 3. **Configuración Canary** 🐦
- [ ] Implementar estrategia **Canary** mediante anotaciones en el **Ingress Resource**  
- [ ] Demostrar capacidad de **dirigir tráfico de forma porcentual** entre **V1** y **V2**

### 4. **Progresión de Tráfico** 📊
- [ ] Mostrar evidencia del funcionamiento con al menos **3 etapas diferentes**:
  - **Etapa 1:** 95% V1 → 5% V2  
  - **Etapa 2:** 90% V1 → 10% V2  
  - **Etapa 3:** 85% V1 → 15% V2  
  - **Etapa 4:** 70% V1 → 30% V2  
- [ ] *(Opcional: progresar hasta 100% V2)*

---

## 📋 Requisitos Técnicos de Implementación

### Aplicación de Prueba
- Desarrollar o utilizar una aplicación web simple (por ejemplo, un servidor HTTP o un contenedor NGINX que muestre un mensaje).  
- **V1:** Debe mostrar claramente `"Versión 1.0"` o `"Hello from v1"`  
- **V2:** Debe mostrar claramente `"Versión 2.0"` o `"Hello from v2"`  



### Ejemplo de estructura de archivos

```
canary-release/
│
├── deployments/
│   ├── deployment-v1.yaml
│   ├── deployment-v2.yaml
│
├── services/
│   ├── service-v1.yaml
│   ├── service-v2.yaml
│
├── ingress/
│   └── ingress.yaml
│
└── docs/
    └── evidencias.md
```

---

## 🧠 Conceptos a aplicar

- Estrategias de despliegue **Canary Release**
- Balanceo de carga y manejo de tráfico en **Kubernetes**
- Uso de **Ingress Controllers** (NGINX)


---

## 📊 Entregables

1. 📂 **Repositorio o carpeta de proyecto** con:
   - Archivos YAML (`deployments`, `services`, `ingress`)
   - Código fuente o imagen de la aplicación (si aplica)
2. 📄 **Documento de evidencia (PDF)** que incluya:
   - Capturas de pantalla de los pods y servicios
   - Configuración del ingress y valores de canary-weight
   - Resultados de pruebas (pueden ser capturas de pantalla)
   - Conclusiones y observaciones sobre el comportamiento del despliegue

---

## 📚 Referencias Sugeridas

- [Documentación oficial de Kubernetes – Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Documentación NGINX Ingress Controller – Canary Deployments](https://kubernetes.github.io/ingress-nginx/examples/canary/)
- [Minikube Docs](https://minikube.sigs.k8s.io/docs/)
- [Blog oficial de Kubernetes – Canary Deployment Explained](https://kubernetes.io/blog/2020/12/02/what-is-canary-deployment/)

# Actualizar los repositorios
sudo apt-get update

# Instalar Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Instalar kubectl (descarga directa del binario oficial)
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/

# Iniciar Minikube
minikube start

# Verificar el estado del clúster
kubectl get nodes

# Habilitar el Ingress Controller (Nginx)
minikube addons enable ingress





# Construir nuevas imágenes
docker build --no-cache -t dariocastillo11/canary-demo:v1.8 .
docker build --no-cache -t dariocastillo11/canary-demo:v2.8 .

# Subir imágenes
docker push dariocastillo11/canary-demo:v1.8
docker push dariocastillo11/canary-demo:v2.8

# Actualizar las versiones en los deployments
kubectl set image deployment/app-v1 nginx=dariocastillo11/canary-demo:v1.8
kubectl set image deployment/app-v2 nginx=dariocastillo11/canary-demo:v2.8

# Reiniciar los deployments
kubectl rollout restart deployment/app-v1
kubectl rollout restart deployment/app-v2
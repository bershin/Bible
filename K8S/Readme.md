## Create local kubernetes multi node cluster using kind.
***********************
Download Docker Desktop
***********************
https://www.docker.com/products/docker-desktop/

***********************
Install Kind - https://kind.sigs.k8s.io/
***********************
$ brew install kind
$ kind get clusters
$ kubectl cluster-info --context kind-devkind
$ kind create cluster --name test
$ kubectl get nodes -> Verify cluster create based on node created.


***********************
Setup Script - https://github.com/shabbirsaifee92/multi-node-kind-cluster
***********************

$ kind create cluster --name test --config config.yaml

Missing ingress controller:
Its a layer 7 load balancer that routes http/https requests to your services.




kubectl run nginx --image=nginx --expose --port=80
---
author: Rahul
tag: system setup
date: 2022-11-01
---
# Local Development Enviornment setup for windows

## Install WSL (Windows subsystem for linux)

#### System Requirment
- System Build should be 19041 or higher

Run the below command in administrator mode in poswershell

```bash
wsl --install
```

Once the installation is completed run the below commands 

```bash
sudo apt update
sudo apt upgrade
```

For mode details refer [official documentation](https://learn.microsoft.com/en-us/windows/wsl/install)

## Install Docker   
Please run the below commands for installing docker (not docker desktop).

* ### Install pre-requisites


``` bash
sudo apt install --no-install-recommends apt-transport-https ca-certificates curl gnupg2
```

* ### Ubuntu package repository configuration

```bash
. /etc/os-release
curl -fsSL https://download.docker.com/linux/${ID}/gpg | sudo tee /etc/apt/trusted.gpg.d/docker.asc
```

```bash
echo "deb [arch=amd64] https://download.docker.com/linux/${ID} ${VERSION_CODENAME} stable" | sudo tee /etc/apt/sources.list.d/docker.list
sudo apt update
```

* ### Installing


```bash
sudo apt install docker-ce docker-ce-cli containerd.io
```

* ### Add user to docker group

Need to add user to run docker as non root user

```bash
sudo usermod -aG docker $USER
```

* ### Start Docker Engine

```bash
sudo service docker start
```
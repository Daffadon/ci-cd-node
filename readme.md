# CI-CD Example using Jenkins

## Installing Jenkins using container

Running jenkins with mounted with docker.sock, docker, and mount the everything inside the jenkins_home in the jenkins container to local directory and use user with id 1000 and docker for the group

```bash
docker run --name jenkins -d -p 8080:8080 -p 50000:50000 -v /var/run/docker.sock:/var/run/docker.sock -v $(which docker):/usr/bin/docker -v /your/home/path:/var/jenkins_home -u 1000:$(getent group docker | cut -d':' -f3) --restart unless-stopped jenkins/jenkins
```

## Set up CI/CD in Jenkins

### Install plugins

Open localhost:8080 in the browser and install Docker and Github Plugin

![Docker Plugin](https://github.com/daffadon/ci-cd-node/blob/main/assets/docker.png?raw=true)

![github Plugin](https://github.com/daffadon/ci-cd-node/blob/main/assets/github.png?raw=true)

### Create Pipeline

Create pipeline with desire name and setting build trigger to use **GitHub hook trigger for GITScm polling** and specified the pipeline with **pipeline script from SCM**. Place the Jenkinsfile in your repository like in this repository

![Config](https://github.com/daffadon/ci-cd-node/blob/main/assets/config.png?raw=true)

## Set up github webhook

go to repository settings -> Webhooks -> add webhook.
fill the **PayloadURL** with your accessible jenkins server url and add /github-webhook/ at the end e.g. **https://0059-2405-8740-31f1-2015-b513-33fd-b395-2e2.ngrok-free.app/github-webhook/**

Make sure in the recent deliveries, ping is success, means that your server is reachable

![Reachable](https://github.com/daffadon/ci-cd-node/blob/main/assets/reachable.png?raw=true)

## Last step

Trigger CI/CD using push event whether using pull request or git push. make sure the push webhooks is running

![push trigger](https://github.com/daffadon/ci-cd-node/blob/main/assets/push-trigger.png?raw=true)

see the build in the jenkins. there is a **Build** section that will running if the webhook working

![build](https://github.com/daffadon/ci-cd-node/blob/main/assets/build.png?raw=true)

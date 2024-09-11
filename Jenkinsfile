pipeline {
  agent any
  stages {
    stage('Clone Repository') {
      steps {
        git branch: 'main', url: 'https://github.com/Daffadon/ci-cd-node.git'
      }
    }
    stage('Build Docker Image') {
      steps {
        script {
          dockerImage = docker.build("hello-world-app", ".")
        }
      }
    }
    stage('Run Unit Tests') {
      steps {
        script {
          dockerImage.inside {
            sh 'npm install'
            sh 'npm test'
          }
        }
      }
    }
    stage('Deploy to Production') {
      steps {
        script {
          dockerImage.run('-p 3000:3000')
        }
      }
    }
  }
}
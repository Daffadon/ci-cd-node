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
          dockerImage = docker.build("ci-cd-node", ".")
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
    stage ("Clean up Docker container") {
      steps {
        script {
          def container =  docker.ps().find { it.names.contain('nodeapp') }
          
          if(container) {
            docker.stop(container.id)
            docker.remove(container.id)
          }
        }
      }
    }
    stage('Deploy to Production') {
      steps {
        script {
          dockerImage.run('-p 3000:3000 --name nodeapp')
        }
      }
    }
  }
}
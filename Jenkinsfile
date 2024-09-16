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
          sh """
            if [ \$(docker ps -q -f name=nodeapp) ]; then
              docker stop nodeapp
            fi
            """

            // Remove the container if it exists
            sh """
            if [ \$(docker ps -a -q -f name=nodeapp) ]; then
              docker rm nodeapp
            fi
            """
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
pipeline {
    stages {
      stage('Build') {
          steps {
              sh 'npm install'
          }
      }
      
    agent {
        docker {
            image 'node-mysql-crud-app_apps'
            args '-p 3000:3000'
        }
    }
    environment {
            CI = 'true'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
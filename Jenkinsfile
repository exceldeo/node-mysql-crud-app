pipeline {
      
    agent {
        docker {
            image 'node-mysql-crud-app_app'
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
pipeline {
    agent {
        docker {
            image 'node-mysql-crud-app_apps'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
pipeline {
    agent any
 stages {
    stage('Docker Build and Tag') {
           steps {
                sh 'docker-compose up' 
                sh 'docker tag nginxtest exceldeo/node-mysql-crud-app:latest'
                sh 'docker tag nginxtest exceldeo/node-mysql-crud-app:$BUILD_NUMBER'
               
          }
        }
     
    stage('Publish image to Docker Hub') {
          
        steps {
            withDockerRegistry([ credentialsId: "dockerHub", url: "" ]) {
            sh  'docker push exceldeo/node-mysql-crud-app:latest'
            sh  'docker push exceldeo/node-mysql-crud-app:$BUILD_NUMBER' 
        }
                  
          }
        }
    }
}
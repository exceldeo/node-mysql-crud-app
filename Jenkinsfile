pipeline {
    agent any
    
    stages {

        stage('Installing dependencies') {
            steps {
                bat 'npm install'	 
            }	 
        }


        stage('Docker Build') {
           steps {
                bat 'docker build -t exceldeo/node-mysql-crud-app .' 
               
          }
        }
        
        stage('Docker Build and Tag') {
           steps {
                bat 'docker tag nginxtest exceldeo/node-mysql-crud-app:latest'
                bat 'docker tag nginxtest exceldeo/node-mysql-crud-app:$BUILD_NUMBER'
               
          }
        }
     
        stage('Publish image to Docker Hub') {
          
            steps {
                withDockerRegistry([ credentialsId: "dockerHub", url: "" ]) {
                bat  'docker push exceldeo/node-mysql-crud-app:latest'
                bat  'docker push exceldeo/node-mysql-crud-app:$BUILD_NUMBER' 
            }
                  
          }
        }
    }
}
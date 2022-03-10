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
                bat 'docker-compose up' 
               
          }
        }
     
        // stage('Publish image to Docker Hub') {
          
        //     steps {
        //         withDockerRegistry([ credentialsId: "dockerHub", url: "" ]) {
        //         sh  'docker push exceldeo/node-mysql-crud-app:latest'
        //         sh  'docker push exceldeo/node-mysql-crud-app:$BUILD_NUMBER' 
        //     }
                  
        //   }
        // }
    }
}
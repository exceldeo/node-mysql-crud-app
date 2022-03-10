pipeline {
    agent any
    stages {
        stage('Installing dependencies') {
            nodejs(nodeJSInstallationName: 'nodejs') {
                sh 'npm install'	 
            }	 
        }

        stage('Run application') {
            nodejs(nodeJSInstallationName: 'nodejs') {
                sh 'npm run start'	 
            }	 
        }

        stage('Docker Build & Push') {
            docker.withRegistry('https://index.docker.io/v2/', 'dockerhub') {
                def app = docker.build("exceldeo/node-mysql-crud-app", '.').push()
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
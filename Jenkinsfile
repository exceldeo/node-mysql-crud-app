pipeline {

  environment {
    dockerimagename = "thetips4you/nodeapp"
    dockerImage = ""
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git 'https://github.com/exceldeo/node-mysql-crud-app.git'
      }
    }

    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build node-mysql-crud-app-master_app
        }
      }
    }

    // untuk testing
    // stage('Build image') {
    //   steps{
    //     script {
    //       dockerImage = docker.build node-mysql-crud-app-master_app
    //     }
    //   }
    // }

    stage('Pushing Image') {
      environment {
               registryCredential = 'dockerhublogin'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }

    stage('Deploying App to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deploymentservice.yml", kubeconfigId: "kubernetes")
        }
      }
    }
  }
}
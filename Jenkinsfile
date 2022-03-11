pipeline {
    agent any

    environment { 
        registry = "exceldeo/node-mysql-crud-app" 
        registryCredential = 'exceldeo-dockerhub' 
        dockerImage = 'exceldeo/node-mysql-crud-app-master_app' 
    }
    stages {

        stage('gitclone') {

			steps {
				git 'https://github.com/exceldeo/node-mysql-crud-app.git'
			}
		}

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

		// stage('Docker Build & Push') {
		// 	docker.withRegistry('https://index.docker.io/v2/', 'dockerHub2') {
		// 		def app = docker.build("exceldeo/node-mysql-crud-app", '.').push()
		// 	}
   		// }
		// stage('Deploy our image') { 
        //     steps { 
        //         script { 
        //             docker.withRegistry( 'https://index.docker.io/v2/', registryCredential ) { 
        //                 def app = docker.build("exceldeo/node-mysql-crud-app", '.').push()
        //             }
        //         } 
        //     }
        // } 
        
		stage('Login') {

			steps {
				bat 'docker login -u "exceldeo" -p "c03207c0-30c5-4078-a1ca-4eef1631eedd" docker.io'
			}
		}

		stage('Push') {

			steps {
				bat 'docker push exceldeo/node-mysql-crud-app:latest'
			}
		}    
    }
    
    post {
		always {
			sh 'docker logout'
		}
	}

}
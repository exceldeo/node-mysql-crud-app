pipeline {
    agent any

    environment { 
        registry = "exceldeo/node-mysql-crud-app" 
        registryCredential = 'dockerHub' 
        dockerImage = 'exceldeo/node-mysql-crud-app' 
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
		stage('Deploy our image') { 
            steps { 
                script { 
                    docker.withRegistry( 'https://index.docker.io/v2/', registryCredential ) { 
                        dockerImage.push() 
                    }
                } 
            }
        } 
        
		// stage('Login') {

		// 	steps {
		// 		bat 'echo bfac99c7-b9874427-abc1-89a4463fafe7 | docker login -u exceldeo --password-stdin'
		// 	}
		// }

		// stage('Push') {

		// 	steps {
		// 		bat 'docker push exceldeo/node-mysql-crud-app:latest'
		// 	}
		// }    
    }
    
    post {
		always {
			sh 'docker logout'
		}
	}

}
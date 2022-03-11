pipeline {
    agent any

    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerHub2')
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
        
		stage('Login') {

			steps {
				bat 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
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
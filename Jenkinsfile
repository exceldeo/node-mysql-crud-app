pipeline {
    agent any

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
        
		stage('Docker Login') {

			steps {
				bat 'docker login -u "exceldeo" -p "c03207c0-30c5-4078-a1ca-4eef1631eedd" docker.io'
			}
		}

		stage('Docker Push') {

			steps {
				bat 'docker push exceldeo/node-mysql-crud-app:latest'
			}
		}   

		stage('Docker Pull') {

			steps {
				bat 'docker pull exceldeo/node-mysql-crud-app:latest'
			}
		}   

		stage('Docker Build and Run') {

			steps {
				bat 'docker build -t exceldeo/node-mysql-crud-app .' 
				bat 'docker run -dp 8000:8000 exceldeo/node-mysql-crud-app .' 
			}
		}   
    }
    
    post {
		always {
			sh 'docker logout'
		}
	}

}
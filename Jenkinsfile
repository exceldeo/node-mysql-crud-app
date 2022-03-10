node {
   def commit_id
   stage('Checkout Git') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }

   stage('Installing dependencies') {
     nodejs(nodeJSInstallationName: 'nodejs') {
       sh 'npm install'	 
     }	 
   }

   stage('Docker Build & Push') {
     docker.withRegistry('https://index.docker.io/v2/', 'dockerhub') {
		def app = docker.build("exceldeo/node-mysql-crud-app", '.').push()
     }
   }
   
   
}
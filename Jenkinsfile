pipeline
{
agent any
    
stages{
stage('Build'){
steps{
bat 'npm install'
echo "building the application"
echo "build success"
}
}
// stage('Login Test'){
// steps{
// bat ' npm run Setup'
// echo " running Login test"
// echo "Login Test success"
// }
// }
stage('Smoke Test'){
steps{
bat ' npm run smoke'
echo " running Smoke test"
echo "Smoke Test success"
}
}
stage('regression Test'){
steps{
bat ' npm run addcourses'
bat 'npm run checkGrades'
echo " running Smoke test"
echo "Smoke Test success"
}
}
stage('e2e test'){
steps{
 bat 'npm run test'
echo "Functional End2End Test success"
}
}
stage('Generate Cucumber HTML report'){
        steps{
        cucumber buildStatus:"UNSTABLE",
        fileIncludePattern: "**/cucumber-report/",
        jsonReportDirectory: "cucumber-report/"
       
}
}
}
}

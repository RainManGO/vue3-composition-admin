@Library('devops') _

pipeline {
    agent {label 'jenkins-slave-jnlp'}
    environment {  // https://stackoverflow.com/questions/53541489/updating-environment-global-variable-in-jenkins-pipeline-from-the-stage-level
        NAME="admin-tmpl"
        NAMESPACE="oppc-rcyj-web"
        SERVER_PORT="80"
    }

    options {
        // timestamps()  //日志会有时间
        skipDefaultCheckout()  //删除隐式checkout scm语句
        // disableConcurrentBuilds() //禁止并行,会列队式等前面的任务完才进行下一个任务
        timeout(time: 1, unit: 'HOURS')  //流水线超时设置1h
    }

    stages {
        stage('Init'){
            steps {
                script{
                    // 【测试环境】变量
                    env.INGRESS_HOST='admin-tmpl-test.rencaiyoujia.cn'
                    env.INGRESS_TLS_SECRET="rencaiyoujia-tls-secret"
                    env.REPLICAS="1"  //deployment的副本数
                    KUBECONTEXT = "k8s-test-admin"  //测试环境k8s
                    NPM_RUN_BUILD_CMD="npm run build:test"
                    DOCKERFILE_NAME="Dockerfile"

                    // 【生产环境】变量
                    if( "${BRANCH_NAME}"== "master"){
                        env.INGRESS_HOST='admin-tmpl.rencaiyoujia.com'
                        env.INGRESS_TLS_SECRET="rencaiyoujia-tls-secret"
                        env.REPLICAS="2"
                        KUBECONTEXT="k8s-prod-admin"  //生产环境k8s
                        NPM_RUN_BUILD_CMD="npm run build:prod"
                        DOCKERFILE_NAME="Dockerfile"
                    }

                    // 【开发环境】变量
                    if( "${BRANCH_NAME}"== "dev"){
                        env.INGRESS_HOST='admin-tmpl-dev.rencaiyoujia.cn'
                        env.INGRESS_TLS_SECRET="rencaiyoujia-tls-secret"
                        env.REPLICAS="1"
                        KUBECONTEXT="k8s-dev-admin"  //开发环境k8s
                        NPM_RUN_BUILD_CMD="npm run build:dev"
                        DOCKERFILE_NAME="Dockerfile"
                    }
                }
            }
        }
        stage('Checkout') {
            steps {
                checkout scm
            }
        } 
        stage('npm打包') {
            steps {
                script{            
                    // sh 'npm config set registry https://registry.npm.taobao.org'
                    sh 'npm install --registry=https://registry.npm.taobao.org'
                    sh "${NPM_RUN_BUILD_CMD}"
                }
            }                
        }        
        stage('DockerBuild') {
            steps {
                script{
                    sh "rm -rf docker/dist;mv dist docker"
                    devops.docker(env.NAME,dockerfile:"docker/${DOCKERFILE_NAME}",context:"docker").build().push()
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        
        stage('Deploy') {
            parallel {
                stage('deploy ingress') {
                    when {
                        expression { env.INGRESS_HOST != null }
                    }
                    steps{
                        sh """envsubst < k8smanifests/svc.yaml | kubectl --context ${KUBECONTEXT} apply -f - ;\
                            envsubst < k8smanifests/ingress.yaml | kubectl --context ${KUBECONTEXT} apply -f - ;\
                        """      
                    }
                }
                stage('Deploy') {
                    steps{
                        sh """envsubst < k8smanifests/deploy.yaml ;\
                            envsubst < k8smanifests/deploy.yaml | kubectl --context ${KUBECONTEXT} apply -f - ;\
                        """                          
                    }
                }
            }
        }

    }


    post{
        success{
            script{
                devops.dingtalk(env.NAME,env.DOCKERIMAGE,"构建成功 ✅")
            }
        }
        failure{
            script{
                devops.dingtalk(env.NAME,env.DOCKERIMAGE,"构建失败 ❌")
            }
        }
        unstable{
            script{
                devops.dingtalk(env.NAME,env.DOCKERIMAGE,"不稳定构建 ✅")
            }
        }
        aborted{
            script{
                devops.dingtalk(env.NAME,env.DOCKERIMAGE,"暂停或中断 ❌")
            }
        }
    }

}

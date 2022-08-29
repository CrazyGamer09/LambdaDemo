const cdk = require('@aws-cdk/core');
const lambda = require('@aws-cdk/aws-lambda')

class LambdaCdkStack extends cdk.Stack {
  /**
   * @param {cdk.App} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const layer = new lambda.LayerVersion(this,'MyLayer',{
      code:lambda.Code.fromAsset('Resources'),
      compatibleRuntimes: [lambda.Runtime.NODEJS_14_X],
      description:'jst to test'
    })

    // @ts-ignore
    let func = new lambda.Function(this,'lambda-try',{
      runtime:lambda.Runtime.NODEJS_14_X,
      code:lambda.Code.fromAsset('Resources'),
      handler:'lambdaCode.handler',
      layers:[layer]
    })

    const version = func.currentVersion;
    
    

    const alias = new lambda.Alias(this,'LambdaAlias',{
      aliasName:"DVL",
      version
    })

  }
    
}

module.exports = { LambdaCdkStack }

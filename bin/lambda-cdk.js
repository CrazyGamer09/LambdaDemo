#!/usr/bin/env node
const cdk = require('@aws-cdk/core');
const { LambdaCdkStack } = require('../lib/lambda-cdk-stack');

const app = new cdk.App();
new LambdaCdkStack(app, 'LambdaCdkStack');

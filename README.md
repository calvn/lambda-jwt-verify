# lambda-jwt-verify

Lambda function for verifying JWTs. This is can be used as a custom authorizer for AWS API Gateway endpoints.

## Instructions

* `npm install`
* `echo "JWT_SECRET=your-secret" > .env` to pass in the secret signing key into a `.env` file in this project directory.
* Zip up the content in this project and upload it to a newly created or existing AWS Lambda
* Follow the [documentation](http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html) by AWS, under *Configure Custom Authorization Using the API Gateway Console*, to set up Custom Authorization for your APIG endpoint

# Serverless mysql

Getting Started
===

### Setup serverless

- [DOCUMENTATION](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

- Login to Amazon Web Services Account/IAM.
- Add a user and enable programmatic access.
- Attach the policy ```AdministratorAccess```.
- View and copy the API Key & Secret for the following step.
- Configure the Serverless Framework to use your AWS API Key & Secret:

#### Use the aws-cli

- [INSTALL THE CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
- [CONFIGURE THE CLI](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)

```
    AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
    AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
    Default region name [None]: us-west-2
    Default output format [None]: ENTER
```

**DONT FORGET TO CONFIGURE YOUR ENVIRONMENT VARIABLES**

### Services

- [DOCUMENTATION](https://serverless.com/framework/docs/providers/aws/guide/services/)

A service is like a project. It's where you define your AWS Lambda Functions, 
the events that trigger them and any AWS infrastructure resources they require, 
all in a file called serverless.yml.



---

Contributing
======

Please read the [contribution guidelines] before submitting a pull request.

In particular: <strong>If you have commit access, please don't merge changes without
waiting a week for everybody to leave feedback.</strong>

[contribution guidelines]: ../../../contributing

Maintainers
======

![clockwork](http://apps.clockworkmedia.co.za/github/assets/logos/logo.png)

This repository is maintained by [Clockwork Media](//www.clockworkmedia.co.za).
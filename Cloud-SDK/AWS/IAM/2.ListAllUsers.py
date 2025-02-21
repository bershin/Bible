import boto3

def list_all_users():
    iam = boto3.client("iam")
    paginator = iam.get_paginator('list_users')
    for page in paginator.paginate():
        for user in page['Users']:
            # print("User->" + user["UserName"] + ", " + "ARN->" + user["Arn"])
            print('User-> {}, ARN-> {}'.format(user["UserName"] , user["Arn"]))

list_all_users()

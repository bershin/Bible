import boto3

def list_all_policies():
    iam = boto3.client("iam")
    paginator = iam.get_paginator("list_policies")
    # Scope can be Local, AWS, All
    for response in paginator.paginate(Scope="Local"):
        for policy in response["Policies"]:
            print(f'Policy name: {policy["PolicyName"]}, Policy Arn: {policy["Arn"]}')

list_all_policies()
import boto3

def detach_policy_user(groupname, policyarm):
    client = boto3.client("iam")
    response = client.detach_group_policy(
        GroupName=groupname,
        PolicyArn=policyarm
    )
    print(response)

detach_policy_user('techops', 'arn:aws:iam::039612857130:policy/myCustomAdminPolicy')
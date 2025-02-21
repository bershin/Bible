import boto3

def detach_policy_user():
    client = boto3.client("iam")
    response = client.detach_user_policy(
        UserName='bershin',
        PolicyArn='arn:aws:iam::039612857130:policy/myCustomAdminPolicy'
    )
    print(response)

detach_policy_user()
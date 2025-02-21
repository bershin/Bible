import boto3

def detach_user_policy(user_name, policy_arn):
    client = boto3.client("iam")

    response = client.detach_user_policy(
        UserName=user_name,
        PolicyArn=policy_arn
    )
    print(response)

detach_user_policy("bershin", 'arn:aws:iam::039612857130:policy/myCustomAdminPolicy')
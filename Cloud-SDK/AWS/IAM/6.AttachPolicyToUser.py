import boto3

def attach_policy_user(user, policy_name):
    iam = boto3.client("iam")

    response = iam.attach_user_policy(
        UserName=user,
        PolicyArn=policy_name
    )

    print(response)

attach_policy_user('bershin', 'arn:aws:iam::039612857130:policy/myCustomAdminPolicy')
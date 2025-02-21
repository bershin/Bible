import boto3

def delete_policy(policy_arn):
    client = boto3.client("iam")

    response = client.delete_policy(
        PolicyArn=policy_arn
    )
    print(response)

delete_policy('arn:aws:iam::039612857130:policy/myCustomAdminPolicy')
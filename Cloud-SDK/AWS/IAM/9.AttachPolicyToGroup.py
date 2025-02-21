import boto3

def attach_policy_group(group_name, policy_arn):
    iam = boto3.client("iam")

    response = iam.attach_group_policy(
        GroupName=group_name,
        PolicyArn=policy_arn
    )

    print(response)

attach_policy_group('techops', 'arn:aws:iam::039612857130:policy/myCustomAdminPolicy')
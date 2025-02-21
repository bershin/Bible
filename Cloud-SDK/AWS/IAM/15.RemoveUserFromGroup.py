import boto3

def remove_user_from_group(group_name, user_name):
    client = boto3.client("iam")

    response = client.remove_user_from_group(
        GroupName=group_name,
        UserName=user_name
    )
    print(response)

remove_user_from_group("techops", "bershin")
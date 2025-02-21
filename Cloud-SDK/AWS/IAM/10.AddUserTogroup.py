import boto3

def add_user_group(user, group):
    client = boto3.client("iam")
    response = client.add_user_to_group(
        GroupName=group,
        UserName=user
    )
    print(response)

add_user_group("bershin", "techops")
import boto3

def list_user_policy(user_name):
    client = boto3.client("iam")

    response = client.list_attached_user_policies(
        UserName=user_name,
        # Marker=' ',
        MaxItems=10
    )
    print(response)

list_user_policy("bershin")
import boto3

def create_access_key(user):
    client = boto3.client("iam")
    response = client.create_access_key(
        UserName=user
    )
    print(response)

create_access_key("bershin")
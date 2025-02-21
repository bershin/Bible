import boto3

def create_group(group_name):
    client = boto3.client("iam")
    response = client.create_group(
        GroupName=group_name
    )
    print(response)

create_group('ops')
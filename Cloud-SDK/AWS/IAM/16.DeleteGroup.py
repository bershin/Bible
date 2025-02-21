import boto3

def delete_group(group_name):
    client = boto3.client("iam")

    response = client.delete_group(
        GroupName=group_name
    )
    print(response)

delete_group("techops")
import boto3

def delete_access_key(user_name, access_key):
    client = boto3.client("iam")

    response = client.delete_access_key(
        UserName=user_name,
        AccessKeyId=access_key
    )
    print(response)

delete_access_key("bershin", 'AKIAQSOI4HMVBSXBI6F4')
import boto3

def update_access_key(user, key, status):
    client = boto3.client("iam")
    response = client.update_access_key(
        UserName=user,
        AccessKeyId=key,
        Status=status #'Active' | 'Inactive'
    )
    print(response)

update_access_key("bershin", 'AKIAQSOI4HMVBSXBI6F4', 'Inactive')
import boto3

def delete_login_profile(user_name):
    client = boto3.client("iam")

    response = client.delete_login_profile(
        UserName=user_name
    )
    print(response)

delete_login_profile("bershin")
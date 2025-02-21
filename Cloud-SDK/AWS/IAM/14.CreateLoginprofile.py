import boto3

def create_login_profile(user, passwd, status):
    client = boto3.client("iam")
    response = client.create_login_profile(
        UserName=user,
        Password=passwd,
        PasswordResetRequired=status # True | False
    )
    print(response)

create_login_profile("bershin", 'AKIAQSOI4HMVBSXBI6F4', True)
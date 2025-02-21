import boto3

def update_user(old_user, new_user):
    iam = boto3.client("iam")
    response = iam.update_user(
        UserName=old_user,
        NewUserName=new_user
    )
    print(response)

update_user("john", "bershin")
import json
import boto3


policy_json = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "*",
            "Resource": "*"
        }
    ]
}
def create_iam_policy(policy_name, policy_json):
    iam = boto3.client("iam")

    response = iam.create_policy(
        PolicyName=policy_name,
        PolicyDocument=json.dumps(policy_json)
    )
    print(response)

create_iam_policy("myCustomAdminPolicy", policy_json)
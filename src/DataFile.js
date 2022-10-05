export const Payload = 
{
  target_marketplace: "eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9",
  selected: [ ],
  target: {
    marketplace: "amazon",
    shopId: "530"
  }
}

export const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    appTag: "amazon_sales_channel",
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMzMjlkN2YwNDUxYzA3NGFhMGUxNWE4Iiwicm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjY0OTg4NjM3LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzM2Q3ZDlkYjgyM2I5MTVhMzc0NTA3NSJ9.eZKlcA00P9R_hw-ThPqMP1G_ntdht2hoh2Sx9FhfFXsw1725An17BDLLEA5GYGEXr-vtrUMoWq2E7_sRAkFvvbBrEljQenYRUH0VxIdgFvUk3ptoh9_x63ZhOpS2LhW0v5G16fZiY4StoArQZ3TVRrzqf9b5ZGVrlxh7RjR6oZEzLg6UHqPdYXn5o1J0FdoyCndaDo8y3XwNBPUJU1BqnVMxeYYFnYlxWCpH1jq8IjSrP1YSQARMZhAfqrxuN73utQMwf5EYR4_2fM8Iz-LiwN7wVkRkoj7hDTeQtVx_736tycu6f4lLf03CZ0mxzrbAXuifl3eJsHKso0lgL4UxPg`,
    "Ced-Source-Id": 500,
    "Ced-Source-Name": "shopify",
    "Ced-Target-Id": 530,
    "Ced-Target-Name": "amazon"
}




export   const url = (d='getAllCategory')=>`https://multi-account.sellernext.com/home/public/connector/profile/${d}/`

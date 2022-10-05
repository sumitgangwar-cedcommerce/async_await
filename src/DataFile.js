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
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMzMjlkN2YwNDUxYzA3NGFhMGUxNWE4Iiwicm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjY0OTczOTY4LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzM2Q0NDUwZjBiZjcwNjMzMDJiYWE4NyJ9.n289tau-BROIUnCvR_RMgh5_W0KYAkVhMZRbZcvnoXDyL7NdIxhk8SeBRDGyQp_Ug534ErQSS7ufAi3QA35EAChgsKOAxyHNnXRIEfwkF4uMI865Qa83uzFVEoS5nLG_jtC41nBY-8YnCiaHF72RqieEVMw3LRnFOoNThAtyILPM7TkvYETEjduj_9H4J01pWYck0D47tDugVIV4L_JvApOc9TKeIcpIQ9Ep2b5TjMXdVX-PWmR6p64ALBEKUiF0tVEJ7j6qZLrFfk87JKnObUlktb3Vm9gN8KuG7DxrzlF42V74zrdQAxTH5k4nwmbx2X9kaUex5DcLbuOImtmnKw`,
    "Ced-Source-Id": 500,
    "Ced-Source-Name": "shopify",
    "Ced-Target-Id": 530,
    "Ced-Target-Name": "amazon"
}




export   const url = (d='getAllCategory')=>`https://multi-account.sellernext.com/home/public/connector/profile/${d}/`

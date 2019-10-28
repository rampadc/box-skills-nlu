# Get running

Until this project completes and a proper README is written, here's how you can run and expose a webhook endpoint to Box.

1. Install [NGROK](https://ngrok.com/) or a similar SSH tunnelling tool, like [Localtunnel](https://github.com/localtunnel/localtunnel).
2. Clone this repository, install dependencies with `npm install` and start a dev server with `npm run dev`.
3. Copy the forwarding HTTPS URL NGROK gives you, and add `/skills/nlu/invoke` into Box webhook URL.

For example, if NGROK gives you

```
Forwarding                    https://e41db081.ngrok.io -> http://localhost:3000
```

Then add `https://e41db081.ngrok.io/skills/nlu/invoke` to the **Invocation URL** text box in your Box Skills configurations.

# Why Cloud Foundry web app instead of using serverless?

IBM Cloud Functions at this point (Oct 2019) does not run serverless functions in Australia. This is unsuitable for certain Australian companies who require their workloads to be run solely in Australia.
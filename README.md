# ThoughtSpot Impersonator

Web application that provides impersonation functionality for ThoughtSpot Embedded

## How it works

For ThoughtSpot clusters where Embedded is enabled, ThoughtSpot allows the use of Trusted Authentication which allows an auth token to be created for any valid user on the platform without needing the user's credentials (beyond their username). ThoughtSpot also provides the ability to embed the full ThoughtSpot application. This application leverages those two tools to allow impersonation.

## ThoughtSpot requirements

- ThoughtSpot Embedded
- Trusted Authentication enabled
- Access to your ThoughtSpot Secret Key (available after enabling Trusted Auth)
- Application URL must be added to CSP visual embed hosts and CORS whitelisted domains

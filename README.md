# CloudClass Desktop

## Install

```bash
yarn bootstrap
```

## Config

```bash
cp .env.example packages/agora-classroom-sdk/.env
```

## How to generate RtmToken using your own AppId and Secret

```bash
# If .env contains `REACT_APP_AGORA_APP_ID` and `REACT_APP_AGORA_APP_CERTIFICATE` configurations, the client will automatically generate an RTM Token for you
REACT_APP_AGORA_APP_ID=
REACT_APP_AGORA_APP_CERTIFICATE=
```

## Run

```bash
yarn dev
```

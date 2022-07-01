# CloudClass Desktop

## Check Node version

```bash
node -v
```

## Install

If you have installed Node.js 16.10 or later, you can directly enable Yarn with the following command:

```bash
corepack enable
```

If you have installed a Node.js version earlier than 16.10, you need to install Corepack first and then enable Yarn with the following command:

```bash
npm i -g corepack enable
```

```bash
yarn add global lerna
```

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

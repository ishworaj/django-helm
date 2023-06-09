FROM node:latest

USER root

RUN apt-get update && apt-get -y upgrade && \
    npm install -g npm@9.7.1 && npm install -g cdk8s-cli

RUN useradd -m -s /bin/bash cdk8s && \ 
    echo 'cdk8s:cdk8s' | chpasswd && \
    usermod -aG sudo cdk8s

WORKDIR /app 
COPY app/package.json /app/package.json
RUN chown -R cdk8s:cdk8s /app  && \
    chmod -R 755 /app && \
    chown -R cdk8s:cdk8s /usr/local/bin && \
    chown -R cdk8s:cdk8s /usr/local/lib/node_modules
    
USER cdk8s

# set npm prefix to user's home directory
RUN npm config set prefix /app/.npm

RUN \
    npm install -g cdk8s-plus-26

ENTRYPOINT ["/bin/bash", "-c"]



